import React from 'react'
import { Link } from 'react-router-dom'
import Tips from '../../Tips/Tips'
import styles from './SimpleCard.module.styl'
export default function SimpleCard (props) {
  return (
    <div className={`${styles.card} container`}>
      <div className={styles.article}>
        <Link to={`articleDetail/${props.article.id}`} className={styles.articleTitle}>{props.article.title}</Link>
        <Tips createTime={props.article.createTime} category_id={props.article.category_id} categoryName={props.article.categoryName} pageview={props.article.pageview}></Tips>
        <div className={styles.articleDec}>
          {props.article.dec}
        </div>
        <div className={styles.acticleTags}>
          {
            props.tags.map(tag => (
              <Link to={`articleList?type=category&id=${tag.tag_id}`} key={tag.tag_id} className={styles.tag}>
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
