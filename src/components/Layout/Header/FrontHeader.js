import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FrontHeader.styl'
import Logo from './Logo/logo'
import Tabs from './Tabs/tabs'
import { Link } from 'react-router-dom'

@connect(state => (
  {
    isPc: state.common.isPc,
    tabs: state.common.tabs
  })
)
class FrontHeader extends Component {
  state = {
    show: false
  }
  render () {
    return (
      <div className="headerLayout">
        <div className="header-warp container">
          <Logo></Logo>
          {this.props.isPc ? <Tabs></Tabs> : <Toggle show={this.state.show} callback={() => this.setState({ show: !this.state.show })}></Toggle>}
        </div>
        <CollapseTab activeKey={this.state.show ? '1' : ''} show={!this.props.isPc && this.state.show} tabs={this.props.tabs}></CollapseTab>
      </div>
    )
  }
}
function Toggle (props) {
  return (
    <div className={props.show ? 'nav-toggle toggole-open' : 'nav-toggle'} onClick={props.callback}>
      <span className="toggle-line"></span>
      <span className="toggle-line"></span>
      <span className="toggle-line"></span>
    </div>
  )
}
function CollapseTab (props) {
  return (
    <div className="mobile-tab-wrap" style={{ height: props.show ? '115px' : '0' }}>
      {
        props.tabs.map(tab => (
          <Link to={tab.route} className="tab" key={tab.text}>
            <i className={`iconfont icon-${tab.icon}`}></i>
            <span>{tab.text}</span>
          </Link>
        ))
      }
    </div>
  )
}
export default FrontHeader