import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tag.styl'
export default class Tag extends Component {
  render () {
    return (
      <Link to={`articleList?type=category&id=${this.props.id}`} className="tag" >
        {this.props.name}
        <span>{this.props.article_count}</span>
      </Link>
    )
  }
}
