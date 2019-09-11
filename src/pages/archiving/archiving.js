import React, { Component } from 'react'
import SimpleCard from '../../components/Card/SimpleCard/SimpleCard'
import api from '../../api'
import { Pagination } from 'antd';
import './archiving.styl'
class Archiving extends Component {
  state = {
    params: {
      status: 2,
      page: 1,
      pageSize: 10
    },
    articleData: {}
  }
  UNSAFE_componentWillMount () {
    this.getArticlesForWeb()
  }
  getArticlesForWeb = () => {
    api.getArticlesForWeb(this.state.params)
      .then(res => {
        this.setState({
          articleData: res
        })
      })
      .catch(err => console.log(err))
  }
  pageChange = (page, pageSize) => {
    this.setState({
      params: {
        status: 2,
        page: page,
        pageSize: pageSize
      }
    }, () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0
      // scrollToTarget(0)
      this.getArticlesForWeb()
    })
  }
  render () {
    return (
      <div className="archives">
        <div className="container archiving-wrap">
          <div className="time-line"></div>
          <div className="list-content">
            <p className="normal-node">目前共计 {this.state.articleData.count} 篇文章~</p>
            {
              this.state.articleData.list ? this.state.articleData.list.map((item, index) => {
                return (
                  <div className="bold-node" key={index} >
                    <SimpleCard tags={item.tags} article={item.article}></SimpleCard>
                  </div>
                )
              }) : null
            }
          </div>
        </div>
        <Pagination onChange={this.pageChange} defaultCurrent={1} total={this.state.articleData.count} />
      </div>
    )
  }
}
export default Archiving