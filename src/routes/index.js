
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Archiving from '../pages/archiving/archiving'
import Classify from '../pages/classify/classify'
import detail from '../pages/article/detail/detail'
import list from '../pages/article/list/list'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/archiving" component={Archiving} />
        <Route path="/classify" component={Classify} />
        <Route path="/articleDetail" component={detail} />
        <Route path="/articleList" component={list} />
      </Switch>
    )
  }
}
