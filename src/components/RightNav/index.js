import React, { Component } from 'react'
import './index.styl'
import SiteInfo from './SiteInfo/SiteInfo'
import ArticleMenu from './ArticleMenu/ArticleMenu'
import { connect } from 'react-redux'
import { setArticleMenuInfo, setArticleMenuTag, setSourceArticleMenuInfo } from '../../store/Reducer/common'
@connect(state => (
  {
    hasArticleMenu: state.common.hasArticleMenu,
    sourceArticleMenuInfo: state.common.sourceArticleMenuInfo,
    articleMenuInfo: state.common.articleMenuInfo
  }),
  {
    setArticleMenuInfo, setArticleMenuTag, setSourceArticleMenuInfo
  }
)
class RightNav extends Component {
  state = {
    isConfig: true,
    width: 0,
    rightNavStatus: true
  }
  UNSAFE_componentWillMount () {
    this.openNav(this.state.rightNavStatus)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollListener)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollListener)
  }
  scrollListener = () => {
    if (this.props.hasArticleMenu) {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      let len = this.props.sourceArticleMenuInfo.length
      this.props.sourceArticleMenuInfo.some((item, index) => {
        let jumpout = false
        let last = index === len - 1
        let id = last ? item.id : this.props.sourceArticleMenuInfo[index + 1].id
        let top = document.getElementById(id).getBoundingClientRect().top
        top += scrollTop
        if (scrollTop <= top - 40) {
          this.props.setArticleMenuTag(item.tag)
          jumpout = true
        } else if (last) {
          this.props.setArticleMenuTag(this.props.sourceArticleMenuInfo[len - 1].tag)
          jumpout = true
        }
        return jumpout
      })
    }
  }
  render () {
    return (
      <div className="rightNav">
        <div className="nav-content" style={{ width: this.state.width }}>
          <div className="nav-warp" style={{ width: this.state.width }}>
            {this.props.hasArticleMenu ? <div className="nav-header">
              <span onClick={() => this.setState({ isConfig: true })} className={this.state.isConfig ? 'active' : ''}>文章目录 </span>
              |
              <span onClick={() => this.setState({ isConfig: false })} className={!this.state.isConfig ? 'active' : ''}> 站点信息</span>
            </div> : null}
            {this.state.isConfig ? <SiteInfo></SiteInfo> : <ArticleMenu menus={this.props.articleMenuInfo}></ArticleMenu>}
          </div>
        </div>
        <div className={this.state.rightNavStatus ? 'nav-toggle toggole-open' : 'nav-toggle toggole-close'} onClick={this.setRightNavStatus}>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </div>
      </div >
    )
  }
  openNav (value) {
    console.log('tianh ')

    this.setState({
      width: value ? '320px' : 0
    })
  }
  setRightNavStatus = () => {
    console.log('nihao')
    this.openNav(!this.state.rightNavStatus)
    this.setState({
      rightNavStatus: !this.state.rightNavStatus
    })
  }
}

export default RightNav
