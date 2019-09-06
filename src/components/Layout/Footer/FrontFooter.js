import React, { Component } from 'react'
import api from '../../../api'
import './FrontFooter.styl'

export default class footer extends Component {
  state = {
    baseInfo: {},
    text: '',
    createdTime: '1539745193000'
  }
  componentWillMount () {
    setInterval(() => {
      let time = new Date() - this.state.createdTime
      let day = parseInt(time / 1000 / 60 / 60 / 24, 10)
      let hour = parseInt((time / 1000 / 60 / 60) % 24, 10)
      let minute = parseInt((time / 1000 / 60) % 60, 10)
      let second = parseInt((time / 1000) % 60, 10)
      this.setState({
        text: `${day}天${hour}小时${minute}分${second}秒`
      })
    }, 1000)
    this.getWebConfig()
  }

  getWebConfig () {
    api.getWebConfig()
      .then(res => {
        console.log(res);
        this.setState({
          baseInfo: res[0]
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="footerLayout">
        <div className="container footer-warp">
          <p>本站年龄:{this.state.text}</p>
          <p>@{this.state.baseInfo.blog_name}--{this.state.baseInfo.sign}</p>
          <p>
            本作品采用：
            <a style={{ color: '#3b74fe' }} rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>
            进行许可。
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
              <img alt="知识共享许可协议" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" />
            </a>
          </p>
          <p>
            本站由 @HoTao 创建 - @2018.
            <a href="http://www.miitbeian.gov.cn/" target="_black">粤ICP备18117296号</a>
          </p>
        </div>
      </div >
    )
  }
}
