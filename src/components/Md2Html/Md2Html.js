import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setArticleMenuInfo, setArticleMenuTag, setSourceArticleMenuInfo, setArticleMenuStatus } from '../../store/Reducer/common'
@connect(state => ({ hasArticleMenu: state.common.hasArticleMenu }), { setArticleMenuInfo, setArticleMenuTag, setSourceArticleMenuInfo, setArticleMenuStatus })
class Md2Html extends Component {
  render () {
    return (
      <div className="markdown-body">
        <link href="//cdn.bootcss.com/github-markdown-css/2.4.1/github-markdown.css" rel="stylesheet" />
        <div dangerouslySetInnerHTML={{ __html: this.props.html }}>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.getArticleMenu()
    this.props.setArticleMenuStatus(true)
  }
  componentWillUnmount () {
    this.props.setArticleMenuStatus(false)
  }
  // 获取articleList
  getArticleMenu () {
    // 获取所有blog-head类名元素
    let nodeList = document.getElementsByClassName('blog-head')
    let titleList = []
    /**
     * 循环拼接数组数据
     * 参考：https://blog.csdn.net/qq_26847293/article/details/50833285
     */
    Array.prototype.map.call(nodeList, item => {
      let leval = item.tagName.replace('H', '')
      titleList.push({
        id: item.id,
        text: item.innerText,
        leval,
        children: []
      })
    })
    let tree = this.setTitleMune(titleList)
    let source = JSON.parse(JSON.stringify(titleList))
    source.forEach(item => {
      item.children = []
    })
    // 保存文章目录到vuex
    this.props.setArticleMenuInfo(tree)
    // 初始化当前高亮的文章目录，默认'1.'
    this.props.setArticleMenuTag('1.')
    // 保存文章标题到vuex（即：没有判断父子标题的关系）
    this.props.setSourceArticleMenuInfo(source)
  }
  setTitleMune (titleList, tag = '') {
    let titles = []
    titleList.map((item, index) => {
      let len = titles.length
      if (len <= 0) {
        item.tag = `${tag}${index + 1}.`
        titles.push(item)
      } else {
        let lastTitle = titles[len - 1]
        // 当前标题等级大于上一个标题的等级，例如（当前是h2，上一个是h1），那么当前标题为上一个标题的子标题
        if (lastTitle.leval < item.leval) {
          lastTitle.children.push(item)
        } else {
          item.tag = `${tag}${len + 1}.`
          titles.push(item)
        }
      }
    })
    /**
     * 上面的只能处理两层的父子标题关系，如果出现了3层甚至跟多，那么需要做递归处理。
     * 遍历上面等到的titles,遍历title.children属性，判断里面的leval时候有多个值，比如:2、3、4、5等等
     * 如果是，递归处理遍历title.children
     * */
    titles.map(title => {
      let children = title.children
      let levals = []
      children.map((child, index) => {
        child.tag = `${title.tag}${index + 1}.`
        if (levals.indexOf(child.leval) === -1) {
          levals.push(child.leval)
        }
      })
      if (levals.length > 1) {
        title.children = this.setTitleMune(children, title.tag)
      }
    })
    return titles
  }
}

export default Md2Html
