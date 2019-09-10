import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tag.styl'
export default class Tag extends Component {
  render () {
    return (
      this.props.count > 0 ? <Link to={`articleList?type=category&id=${this.props.id}`} className="tag" >
        {this.props.name}
        <span> {this.props.count}</span>
      </Link> : null
    )
  }
}
