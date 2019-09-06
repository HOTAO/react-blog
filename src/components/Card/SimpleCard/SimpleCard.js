import React from 'react'
import { Link } from 'react-router-dom'
import Tips from '../../Tips/Tips'
import './SimpleCard.styl'
export default function SimpleCard (props) {
  return (
    <div className="card container">
      <div className="article">
        <Link to={`articleDetail/${props.article.id}`} className="article-title">{props.article.title}</Link>
        <Tips createTime={props.article.createTime} category_id={props.article.category_id} categoryName={props.article.categoryName} pageview={props.article.pageview}></Tips>
        <div className="article-dec">
          {props.article.dec}
        </div>
        <div className="acticle-tags">
          {
            props.tags.map(tag => (
              <Link to={`articleList?type=category&id=${tag.tag_id}`} key={tag.tag_id} className="tag">
                <i className="iconfont icon-tag"></i>
                <span>{tag.tag_name}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div >
  )
}
