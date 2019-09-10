import React, { Component } from 'react'
import api from '../../api'
import styles from './Comments.module.styl'
import emojis from '../../utils/emoji'

import { Form, Input, Icon, Button, notification } from 'antd';
class Comments extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      commentsInfo: {
        list: [],
        count: 0
      }
    }
    this.avatarList = [
      'http://blogimg.hotao.work/9de49b6cc2c18b17d1652b0228f3febd.png',
      'http://blogimg.hotao.work/891fa80a103ce5ff5598f701591573d1.png',
      'http://blogimg.hotao.work/700080c250e0638f22c2c69b20ccaa77.png',
      'http://blogimg.hotao.work/8757ac813fee1e5a4b09775ce252d884.png',
      'http://blogimg.hotao.work/a391a4ffd709f2a8b571b2f93788268e.png',
      'http://blogimg.hotao.work/adb831a7fdd83dd1e2a309ce7591dff8.png'
    ]
    this.comment = {
      reply_id: '',
      avatar: ''
    }
  }


  UNSAFE_componentWillMount () {
    this.getComments()
  }
  getComments () {
    api.getComments({ article_id: this.props.article_id })
      .then(res => {
        console.log(res)
        this.setState({
          commentsInfo: res
        })
      })
      .catch(err => console.log(err))
  }
  isShowEmoji = () => {
    this.setState({ show: !this.state.show })
  }
  addEmoji = (emoji) => {
    let content = this.props.form.getFieldValue('content') || ''
    content += emoji
    this.props.form.setFieldsValue({ content })
  }
  setTextInputRef = element => {
    this.textInput = element
  }
  setAvatar () {
    const index = Math.floor((Math.random() * 10) % 6)
    this.comment.avatar = this.avatarList[index]
  }
  reply = (comment) => {
    this.comment.reply_id = comment.id
    this.props.form.setFieldsValue({ content: `@${comment.name} ` })
    if (this.textInput) this.textInput.focus()
  }
  send = () => {
    this.setAvatar()
    this.props.form.validateFields((err, values) => {
      console.log(err, values)
      console.log(err, values)
      if (!err) {
        const params = {
          name: values.name,
          email: values.email || '',
          content: values.content,
          article_id: this.props.article_id,
          reply_id: this.comment.reply_id || 0,
          is_author: 0,
          avatar: this.comment.avatar
        }
        api.insertComment(params).then(() => {
          notification.success({
            message: '评论成功',
          })
          this.getComments()
        })
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <div className={styles.comments}>
        <div className={styles.title}>留下你的👣（足迹）吧~</div>
        <Form {...formItemLayout} >
          <Form.Item label="称呼">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '称呼（必填）' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="称呼"
              />,
            )}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('email', {
              rules: [],
            })(
              <Input
                prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="邮箱（选填，方便联系你，不会公开）"
              />,
            )}
          </Form.Item>
          <Form.Item label="内容">
            {getFieldDecorator('content', {
              rules: [{ required: true, message: '内容必填~' }],
            })(
              <Input.TextArea rows={4} ref={this.setTextInputRef}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="写下您的留言~（必填）"
              />,
            )}
          </Form.Item>
        </Form>
        <div className={styles.actions}>
          <div className={styles.btn}>
            <Button onClick={this.isShowEmoji} className={this.state.show ? styles.active : ''}>表情</Button>
            <Button onClick={this.send} type="primary">发送~</Button>
          </div>
          {this.state.show ? <div className={styles.emojis}>
            {
              emojis.map(emoji => <span onClick={(emiji) => this.addEmoji(emoji)} key={emoji} className={styles.emoji}>{emoji}</span>)
            }
            {/* <span className="emoji">{{ emoji }}</span> */}
          </div> : null
          }
        </div>
        <div className={styles.list}>
          <div className={styles.title}>{this.state.commentsInfo.count}条留言</div>
          {
            this.state.commentsInfo.list.map(item => (
              <div className={styles.item} key={item.id}>
                <Comment reply={this.reply} comment={item}></Comment>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}


const Comment = (props) => (
  <div className={styles.info}>
    <div className={styles.commenter}>
      <img src={props.comment.avatar} alt="" className={styles.avatar} />
      <div className={styles.nameTime}>
        <div className={styles.name}>
          {props.comment.name}
          <Button onClick={() => props.reply(props.comment)} type="link">回复</Button>
        </div>
        <div className={styles.time}>{props.comment.create_time}</div>
      </div>
    </div>
    <div className={styles.content}>{props.comment.content}</div>
    {
      (props.comment.children && props.comment.children.length > 0) ? (<div className={styles.children}>
        {
          props.comment.children.map((child,index) => (
            <Comment key={index} reply={props.reply} comment={child}></Comment>
          ))
        }
      </div>) : null
    }
  </div>
)

const aaa = Form.create({ name: 'normal_login' })(Comments);

export default aaa
