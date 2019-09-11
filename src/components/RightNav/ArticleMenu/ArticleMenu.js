import React, { Component } from 'react'
import './ArticleMenu.styl'
import scrollToTarget from '../../../utils/scroll'
import { connect } from 'react-redux'

@connect(state => ({ articleMenuTag: state.common.articleMenuTag }))
class ArticleMenu extends Component {
  toTitle = menu => {
    /**
       * 这里不需要记录当前的目录tag了,
       * 因为，在App.vue里面，做对滚动做了监听
       * 在下面的滚动行为执行时，会在App.vue根据条件判断是哪个tag，并做记录
       */
    // this.setArticleMenuTag(item.tag)
    /**
     * Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置(https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
     */
    let top = document.getElementById(menu.id).getBoundingClientRect().top
    // 如果产生了滚动的话，上面的top距离视口的距离就会出现数值不正确的情况，这个时候需要把滚动了多少的高度加回去
    top += document.body.scrollTop || document.documentElement.scrollTop
    scrollToTarget(top)
  }
  heightLight = menu => {
    return menu.tag === this.props.articleMenuTag
  }
  isParent = menu => {
    return this.props.articleMenuTag.indexOf(menu.tag) === 0
  }
  render () {
    return (
      <div className="article-menu">
        <ul>
          {
            this.props.menus && this.props.menus.map(menu => (
              <li key={menu.tag}>
                <span onClick={() => this.toTitle(menu)} className={this.heightLight(menu) || this.isParent(menu) ? 'active' : ''}>
                  {menu.tag} {menu.text}
                </span>
                {this.isParent(menu) ? <ArticleMenu articleMenuTag={this.props.articleMenuTag} menus={menu.children} ></ArticleMenu> : null}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default ArticleMenu