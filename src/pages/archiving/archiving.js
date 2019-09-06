import React, { Component } from 'react'
import SimpleCard from '../../components/Card/SimpleCard/SimpleCard'
import api from '../../api'
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
  async UNSAFE_componentWillMount () {
    console.log(this.props);
    api.getArticlesForWeb(this.state.params)
      .then(res => {
        console.log(res)
        this.setState({
          articleData: res
        })
      })
      .catch(err => console.log(err))
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
      </div>
    )
  }
}
export default Archiving