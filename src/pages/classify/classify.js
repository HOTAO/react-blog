import React, { Component } from 'react';
import Tag from '../../componse/Tag/Tag';
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
      <div className="container">
        <div className="title">分类</div>
        <div className="tags">
          {
            this.state.tags.map(cate => (
              <Tag key={cate.id} id={cate.id} count={cate.article_count} name={cate.name} />
            ))
          }
        </div>
      </div>
    )
  }
}
