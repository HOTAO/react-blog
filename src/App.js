import React, { Component } from 'react'
import { Layout } from 'antd'
// import Clock from './components/Clock'
// import MyButton from './components/MyButton'
import FrontHeader from './components/Layout/Header/FrontHeader'
import FrontFooter from './components/Layout/Footer/FrontFooter'
import RightNav from './components/RightNav'
import ToTop from './components/ToTop/ToTop'
import './styl/main.styl'
import './App.styl'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { setIsPc } from './store/Reducer/common'
const { Header, Footer, Content } = Layout;
@connect(state => (
  {
    rightNavStatus: state.common.rightNavStatus,
    isPc: state.common.isPc,
  }),
  {
    setIsPc
  }
)
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="fade" style={{ width: this.state.viewWidth }}>
          <Layout>
            <Header>
              <FrontHeader></FrontHeader>
            </Header>
            <Content>
              <Routes></Routes>
            </Content>
            <Footer>
              <FrontFooter></FrontFooter>
            </Footer>
          </Layout>
        </div>
        {this.props.isPc ? <RightNav ></RightNav> : null}
        <ToTop></ToTop>
      </BrowserRouter>
    )
  }
  state = {
    screenInof: {
      width: 0,
      height: 0
    },
    viewWidth: '1000px'
  }
  UNSAFE_componentWillMount () {
    this.hiddenProperty()
    this.setViewWidth()
    window.addEventListener('resize', this.setViewWidth)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.setViewWidth)
  }
  UNSAFE_componentWillReceiveProps (nextState) {
    this.setViewWidth(nextState.rightNavStatus)
  }
  // 设置可视宽度(resize回调))
  setViewWidth = (rightNavStatus) => {
    let temp = 0
    typeof rightNavStatus !== 'boolean' && (rightNavStatus = this.props.rightNavStatus)
    if (document.body.clientWidth > 768 && rightNavStatus) {
      temp = 320
    }
    this.props.setIsPc(document.body.clientWidth > 768)
    this.setState({
      viewWidth: document.body.clientWidth - temp + 'px'
    })
  }
  // 根据当前窗口是否激活，修改title
  hiddenProperty () {
    // 不同浏览器 hidden 名称
    var hiddenProperty = 'hidden' in document ? 'hidden' :
      'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :
          null;
    // 不同浏览器的事件名
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function () {
      if (!document[hiddenProperty]) {
        document.title = `(ฅ>ω<*ฅ) 噫又好了~`
      } else {
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~ 快回来看看吧~！'
      }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
  }
}
export default App
