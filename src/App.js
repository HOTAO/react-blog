import React, { Component } from 'react'
import { Layout } from 'antd'
// import Clock from './componse/Clock'
// import MyButton from './componse/MyButton'
import FrontHeader from './componse/layout/FrontHeader'

const { Header, Footer, Content } = Layout;
export default class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Header>
            <FrontHeader></FrontHeader>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        {/* <Header></Header>
        <Clock></Clock>
        <MyButton></MyButton> */}
      </div>
    )
  }
}
