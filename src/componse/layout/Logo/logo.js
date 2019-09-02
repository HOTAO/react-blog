import React, { Component } from 'react'
import './logo.styl'
export default class Logo extends Component {
  constructor() {
    super()
    this.state = {
      isPc: true,
    }
  }
  goHome = () => {
    console.log('goHome');
  }
  render () {
    return (
      <div className={this.state.isPc ? 'myName hover-underline-animation' : 'myName'} onClick={this.goHome} >
        HoTao
      </div>
    )
  }
}
