import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to="/" className={this.state.isPc ? 'myName hover-underline-animation' : 'myName'} onClick={this.goHome} >
        HoTao
      </Link>
    )
  }
}
