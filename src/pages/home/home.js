import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageCard from '../../components/Card/ImageCard/ImageCard'
import { getArticleData } from '../../store/Reducer/home'
import { Pagination } from 'antd';
import scrollToTarget from '../../utils/scroll'
import './home.styl'
@connect(state => ({ articleData: state.home.articleData }), { getArticleData })
class Home extends Component {
  constructor() {
    super()
    this.state = {
      params: {
        status: 2,
        page: 1,
        pageSize: 10
      },
    }
  }
  UNSAFE_componentWillMount () {
    this.props.getArticleData(this.state.params)
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
      this.props.getArticleData(this.state.params)
    })
  }
  render () {
    return (
      <div className="home">
        {
          this.props.articleData.list ? this.props.articleData.list.map((item, index) => {
            return (
              <ImageCard key={index} tags={item.tags} article={item.article}></ImageCard>
            )
          }) : null
        }
        <Pagination onChange={this.pageChange} defaultCurrent={1} total={this.props.articleData.count} />
      </div>
    )
  }
}
export default Home