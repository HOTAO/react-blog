import React, { Component } from 'react'
import Md2Html from '../../../components/Md2Html/Md2Html'
import Tips from '../../../components/Tips/Tips'
import api from '../../../api'
import './detail.styl'
export default class Detail extends Component {
  state = {
    articleData: { articleInfo: {}, tags: {} }
  }
  UNSAFE_componentWillMount () {
    api.getArticleInfoById(this.props.match.params.id)
      .then(res => {
        this.setState({
          articleData: res
        })
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <div className="detail container">
        <div className="title">{this.state.articleData.articleInfo.title}</div>
        <Tips createTime={this.state.articleData.articleInfo.createTime} category_id={this.state.articleData.articleInfo.category_id} categoryName={this.state.articleData.articleInfo.categoryName} pageview={this.state.articleData.articleInfo.pageview}></Tips>
        <div className="article-dec">{this.state.articleData.articleInfo.dec}</div>
        {
          Object.keys(this.state.articleData.articleInfo).length > 0 ? <Md2Html html={this.state.articleData.articleInfo.html_content}></Md2Html> : <p>这篇文章因为某些原因，已下架了</p>
        }

      </div>
    )
  }
}
