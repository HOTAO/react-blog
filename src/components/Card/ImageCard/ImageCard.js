import React from 'react'
import { Link } from 'react-router-dom'
import Tips from '../../Tips/Tips'
import styles from './ImageCard.module.styl'
export default function ImageCard (props) {
  return (
    <div className={`${styles.imageCard} container`}>
      <div className={styles.article}>
        <div className={styles.articleCover}>
          <img src={props.article.cover} alt="" />
          <Link to={`articleDetail/${props.article.id}`} className={styles.articleTitle}>
            <span>{props.article.title}</span>
          </Link>
        </div>
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
