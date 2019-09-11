import React, { Component } from 'react'
import scrollToTarget from '../../utils/scroll'
import './ToTop.styl'
export default class ToTop extends Component {
  render () {
    return (
      <div onClick={() => scrollToTarget(0)} className='toTop to-top-animation' >
        <span className="to-top-line"></span>
        <span className="to-top-line"></span>
        <span className="to-top-line"></span>
      </div>
    )
  }
}
