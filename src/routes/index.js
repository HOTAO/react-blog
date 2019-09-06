
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// import Home from '../pages/home/home'
// import About from '../pages/about/about'
// import Archiving from '../pages/archiving/archiving'
// import Classify from '../pages/classify/classify'
// import detail from '../pages/article/detail/detail'
// import list from '../pages/article/list/list'

import { asyncComponent } from '../helper/asyncComponent'

const Home = asyncComponent(() => import(/* webpackChunkName: "home" */ "../pages/home/home"))
const About = asyncComponent(() => import(/* webpackChunkName: "about" */ "../pages/about/about"))
const Archiving = asyncComponent(() => import(/* webpackChunkName: "archiving" */ "../pages/archiving/archiving"))
const Classify = asyncComponent(() => import(/* webpackChunkName: "classify" */ "../pages/classify/classify"))
const ArticleDetail = asyncComponent(() => import(/* webpackChunkName: "articleDetail" */ "../pages/article/detail/detail"))
const ArticleList= asyncComponent(() => import(/* webpackChunkName: "articleList" */ "../pages/article/list/list"))


export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/archiving" component={Archiving} />
        <Route path="/classify" component={Classify} />
        <Route path="/articleDetail/:id" component={ArticleDetail} />
        <Route path="/articleList" component={ArticleList} />
      </Switch>
    )
  }
}
