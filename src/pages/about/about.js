import React, { Component } from 'react'
import Md2Html from '../../components/Md2Html/Md2Html'
import Comments from '../../components/Comments/Comments'
import api from '../../api'
import './about.styl'
export default class About extends Component {
  state = {
    meInfo: {}
  }
  UNSAFE_componentWillMount () {
    this.getMyResume()
  }
  getMyResume () {
    api.getMe()
      .then(res => {
        this.setState({
          meInfo: res[0]
        })
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <div className="about container">
        <div className="header">
          <h1>关于我</h1>
        </div>
        <Md2Html html={this.state.meInfo.html}></Md2Html>
        <Comments article_id={1}></Comments>
      </div>
    )
  }
}
