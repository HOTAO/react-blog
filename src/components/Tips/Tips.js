import React from 'react'
import { Link } from 'react-router-dom'
import './Tips.styl'
export default function SimpleCard (props) {
  return (
    <div className="article-info">
      <i className="iconfont icon-calendar"></i>
      <span>发表于 {props.createTime}</span>
      <i className="iconfont icon-folder"></i>
      <Link to={`ArticleList?type=category&id=${props.category_id}`} className="article-category" >{props.categoryName}</Link>
      <i className="iconfont icon-eye"></i>
      <span>{props.pageview}次围观</span>
    </div>
  )
}
