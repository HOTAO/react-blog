import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Category.styl'
export default class Category extends Component {
  render () {
    return (
      <Link to={`articleList?type=category&id=${this.props.id}`} className="category" >
        {this.props.name}
      </Link>
    )
  }
}
