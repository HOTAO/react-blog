import React, { Component } from 'react'
import { Layout } from 'antd'
// import Clock from './componse/Clock'
// import MyButton from './componse/MyButton'
import FrontHeader from './componse/Layout/FrontHeader'
import './styl/main.styl'

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const { Header, Footer, Content } = Layout;
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header>
              <FrontHeader></FrontHeader>
            </Header>
            <Content>
              <Routes></Routes>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
          {/* <Header></Header>
        <Clock></Clock>
        <MyButton></MyButton> */}
        </BrowserRouter>
      </Provider>
    )
  }
}
