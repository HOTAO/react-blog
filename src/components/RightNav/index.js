import React, { Component } from 'react'
import './index.styl'
import SiteInfo from './SiteInfo/SiteInfo'
import ArticleMenu from './ArticleMenu/ArticleMenu'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { setArticleMenuInfo, setArticleMenuTag, setSourceArticleMenuInfo, setRightNavStatus } from '../../store/Reducer/common'
@connect(state => (
  {
    hasArticleMenu: state.common.hasArticleMenu,
    sourceArticleMenuInfo: state.common.sourceArticleMenuInfo,
    articleMenuInfo: state.common.articleMenuInfo,
    rightNavStatus: state.common.rightNavStatus
  }),
  {
    setArticleMenuInfo, setArticleMenuTag, setSourceArticleMenuInfo, setRightNavStatus
  }
)
class RightNav extends Component {
  render () {
    return (
      <div className="rightNav">
        <div className="nav-content" style={{ width: this.state.width }}>
          <div className="nav-warp" style={{ width: this.state.width }}>
            {this.props.hasArticleMenu ? <div className="nav-header">
              <span onClick={() => this.setState({ isConfig: false })} className={!this.state.isConfig ? 'active' : ''}>文章目录 </span>
              |
              <span onClick={() => this.setState({ isConfig: true })} className={this.state.isConfig ? 'active' : ''}> 站点信息</span>
            </div> : null}
            <CSSTransition
              in={this.state.isConfig}
              timeout={300}
              classNames={'fade'}
              unmountOnExit={true}
            >
              <SiteInfo></SiteInfo>
            </CSSTransition>
            <CSSTransition
              in={!this.state.isConfig}
              timeout={300}
              classNames={'fade'}
              unmountOnExit={true}
            >
              <ArticleMenu menus={this.props.articleMenuInfo}></ArticleMenu>
            </CSSTransition>
            {/* {this.state.isConfig ? <SiteInfo></SiteInfo> : <ArticleMenu menus={this.props.articleMenuInfo}></ArticleMenu>} */}
          </div>
        </div>
        <div className={this.props.rightNavStatus ? 'nav-toggle toggole-open' : 'nav-toggle toggole-close'} onClick={() => this.props.setRightNavStatus(!this.props.rightNavStatus)}>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </div>
      </div >
    )
  }
  state = {
    isConfig: true,
    width: 0,
  }
  UNSAFE_componentWillMount () {
    this.openNav(this.props.rightNavStatus)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollListener)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollListener)
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    this.openNav(nextProps.rightNavStatus)
    if (this.props.hasArticleMenu !== nextProps.hasArticleMenu) {
      this.setState({
        isConfig: !nextProps.hasArticleMenu
      })
      this.openNav(nextProps.hasArticleMenu)
      this.props.setRightNavStatus(nextProps.hasArticleMenu)
    }
  }
  // setRightNavStatus = () => {
  //   console.log('222');
  //   this.props.setRightNavStatus(!this.props.rightNavStatus)
  // }
  openNav = boolean => {
    this.setState({
      width: boolean ? '320px' : 0
    })
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
}

export default RightNav
