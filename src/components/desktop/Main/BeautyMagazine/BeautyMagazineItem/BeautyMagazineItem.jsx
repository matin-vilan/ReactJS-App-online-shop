import React from 'react'
import styles from "./BeutyMagazineItem.module.css"

const BeautyMagazineItem = ({text,src,badge,title,date}) => {
  return (
    <div className={styles.BeautyMagazineItem}>
        <div className={styles.BeautyMagazineItemContainer}>
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <img src={src} alt="beauty_magazine_picture" className='img-fluid' />
              </div>
              <div className={styles.imageDate}>{date}</div>
              <div className={styles.imageBadge}><span>{badge}</span></div>
            </div>
            <div className={styles.content}>
              <div className={styles.contentTitle}>{title}</div>
              <div className={styles.contentShare +" text-muted"}>
                <div className='admin'><span>admin</span></div>
                <div className='commentIcon mx-4'><i className="bi bi-chat-left"></i></div>
                <div className='shareIcon'><i className="bi bi-share"></i></div>
              </div>
              <div className={styles.contentText +" text-muted"}><span>{text + " ..."}</span></div>
              <div className={styles.moreContent +" text-muted"}>ادامه مطلب</div>
            </div>
        </div>
    </div>
  )
}

export default BeautyMagazineItem