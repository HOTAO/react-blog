import React, { Component } from 'react'
import Logo from './Logo/logo'
import Tabs from './Tabs'
export default class FrontHeader extends Component {
  render () {
    return (
      <div className="header">
        <Logo></Logo>
        <Tabs></Tabs>
      </div>
    )
  }
}
