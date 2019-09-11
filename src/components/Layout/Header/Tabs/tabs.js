import React, { Component } from 'react'
import { connect } from 'react-redux'
import './tabs.styl'

import { Link } from 'react-router-dom'


@connect(state => (
  {
    tabs: state.common.tabs
  })
)
class Tabs extends Component {
  render () {
    return (
      <div className="tabs">
        {this.props.tabs.map(tab => (
          <Link to={tab.route} className="tab" key={tab.text}>
            <i className={`iconfont icon-${tab.icon}`}></i>
            <span>{tab.text}</span>
          </Link>
        ))
        }
      </div>
    )
  }
}

export default Tabs
