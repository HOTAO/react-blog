import React, { Component } from 'react'
import Button from 'antd/es/button'
export default class MyButton extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
      count: 0
    }
  }
  changeTitle = () => {
    this.setState({ clicked: !this.state.clicked, count: this.state.count + 1 })
  }
  render () {
    return (
      <div>
        <Button type="primary" onClick={this.changeTitle}>{this.state.clicked ? '点击了' : '取消了'}</Button>
        <span>点击次数:{this.state.count}</span>
      </div>
    )
  }
}
