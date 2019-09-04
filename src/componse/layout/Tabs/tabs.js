import React, { Component } from 'react'
import './tabs.styl'

import { Link } from 'react-router-dom'

const tabs = [
  {
    text: '首页',
    icon: 'home',
    route: '/'
  },
  {
    text: '分类/标签',
    icon: 'tag',
    route: '/classify'
  },
  {
    text: '归档',
    icon: 'archives',
    route: '/archiving'
  },
  {
    text: '关于',
    icon: 'about',
    route: '/about'
  }
]
export default class Tabs extends Component {

  render () {
    return (
      <div>
        {/* <div class="tab" v-for="tab in tabs" : key="tab.text" @click="_pageGo(tab)">
          <i : class="`iconfont icon-${tab.icon}`"></i>
      <span>{{ tab.text }}</span>
        </div > */}
        <div className="tabs">
          {tabs.map(tab => (
            <Link to={tab.route} className="tab" key={tab.text}>
              <i className={`iconfont icon-${tab.icon}`}></i>
              <span>{tab.text}</span>
            </Link>
          ))
          }
        </div>
      </div>
    )
  }
}
