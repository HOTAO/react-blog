import React, { Component } from 'react'
import './FrontHeader.styl'
import Logo from './Logo/logo'
import Tabs from './Tabs/tabs'
export default class FrontHeader extends Component {
  render () {
    return (
      <div className="headerLayout">
        <div className="header-warp container">
          <Logo></Logo>
          <Tabs></Tabs>
        </div>
      </div>
    )
  }
}
