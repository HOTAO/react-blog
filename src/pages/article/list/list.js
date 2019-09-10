import React, { Component } from 'react'
import qs from 'qs'
import './list.styl'
import SimpleCard from '../../../components/Card/SimpleCard/SimpleCard'
import api from '../../../api'
export default class List extends Component {
  state = {
    web_articleListInfo: { count: '', list: [] }
  }
  UNSAFE_componentWillMount () {
    console.log();
    let query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    if (query.type === 'tag') {
      api.getArticleByTag(query.id).then(res => this.setState({ web_articleListInfo: res })).catch(err => console.log(err))
    } else {
      api.getArticlesForWeb({ category_id: query.id }).then(res => this.setState({ web_articleListInfo: res })).catch(err => console.log(err))
    }
  }
  render () {
    return (
      <div className="article-list container">
        {
          this.state.web_articleListInfo.list.map((item, index) =>
            <SimpleCard key={index} tags={item.tags} article={item.article}></SimpleCard>
          )
        }
      </div>
    )
  }
}
