import React, { Component } from 'react';
import Tag from './components/Tag/Tag';
import Category from './components/Category/Category';
import api from '../../api';
import './classify.styl'
export default class Classify extends Component {
  constructor() {
    super()
    this.state = {
      tags: [],
      categorys: []
    }
  }
  UNSAFE_componentWillMount () {
    this.getTags()
  }
  getTags () {
    api.getCategory().then(res => {
      console.log(res)
      this.setState({
        tags: res.list
      })
    })
    api.getTags().then(res => {
      console.log(res)
      this.setState({
        categorys: res.list
      })
    })
  }
  render () {
    return (
      <div className="classify container">
        <div className="title">分类</div>
        <div className="tags">
          {
            this.state.tags.map(tag => (
              <Tag key={tag.id} id={tag.id} count={tag.article_count} name={tag.name} />
            ))
          }
        </div>
        <div className="title">标签</div>
        <div className="categorys">
          {
            this.state.categorys.map(cate => (
              <Category key={cate.id} name={cate.name}></Category>
            ))
          }
        </div>
      </div>
    )
  }
}
