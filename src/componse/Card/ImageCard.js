import React from 'react'
import './ImageCard.styl'
export default function ImageCard (props) {
  return (
    <div className="image-card container">
      <div className="article">
        <div className="article-cover">
          <img src={props.article.cover} alt="" />
          <div className="article-title">
            <span>{props.article.title}</span>
          </div>
        </div>
        <div className="article-info">
          <i className="iconfont icon-calendar"></i>
          <span>发表于 {props.article.createTime}</span>
          <i className="iconfont icon-folder"></i>
          <span className="article-category" >{props.article.categoryName}</span>
          <i className="iconfont icon-eye"></i>
          <span>{props.article.pageview}次围观</span>
        </div>
        <div className="article-dec">
          {props.article.dec}
        </div>
        <div className="acticle-tags">
          {
            props.tags.map(tag => (
              <div key={tag.tag_id} className="tag">
                <i className="iconfont icon-tag"></i>
                <span>{tag.tag_name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
