import React, { Component } from 'react'
import { Layout } from 'antd'
// import Clock from './components/Clock'
// import MyButton from './components/MyButton'
import FrontHeader from './components/Layout/Header/FrontHeader'
import FrontFooter from './components/Layout/Footer/FrontFooter'
import RightNav from './components/RightNav'
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
              <RightNav ></RightNav>
              {/* { */}
              {/* } */}
            </Content>
            <Footer>
              <FrontFooter></FrontFooter>
            </Footer>
          </Layout>
          {/* <Header></Header>
        <Clock></Clock>
        <MyButton></MyButton> */}
        </BrowserRouter>
      </Provider>
    )
  }
}
