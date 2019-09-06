import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageCard from '../../components/Card/ImageCard/ImageCard'
import { getArticleData } from '../../store/Reducer/home'
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
  render () {
    return (
      <div>
        {
          this.props.articleData.list ? this.props.articleData.list.map((item, index) => {
            return (
              <ImageCard key={index} tags={item.tags} article={item.article}></ImageCard>
            )
          }) : null
        }
      </div>
    )
  }
}
export default Home