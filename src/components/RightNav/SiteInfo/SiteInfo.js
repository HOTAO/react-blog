import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStatistics } from '../../../store/Reducer/webconfig'
import './SiteInfo.styl'

@connect(state => ({ baseInfo: state.webconfig.baseInfo, staticleInfo: state.webconfig.staticleInfo }), { getStatistics })
class SiteInfo extends Component {
  UNSAFE_componentWillMount () {
    this.props.getStatistics()
  }
  render () {
    return (
      <div className="siet-info-box">
        <div className="siet-info">
          <img src={this.props.baseInfo.avatar} alt="" />
          <p className="Archives">{this.props.baseInfo.blog_name}</p>
          <p>{this.props.baseInfo.sign}</p>
        </div>
        <div className="siet-menu">
          <Link to="" className="menu-item">
            <p className="num">{this.props.staticleInfo.publish_count}</p>
            <p>文章</p>
          </Link>
          <Link to="Classify" className="menu-item">
            <p className="num">{this.props.staticleInfo.category_count}</p>
            <p>分类</p>
          </Link>
          <Link to="Classify" className="menu-item">
            <p className="num">{this.props.staticleInfo.tag_count}</p>
            <p>标签</p>
          </Link>
        </div>
        <a className="github" href={this.props.baseInfo.github} target="_black">
          <i className="iconfont icon-github"></i>
          github</a>
      </div>
    )
  }
}
export default SiteInfo
