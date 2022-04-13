import React from 'react'
import styles from "./Gift.module.css";
import Divider from '../../../global/Divider/Divider';
import GiftBoxItem from './GiftBoxItem/GiftBoxItem';

const Gift = () => {
  return (
    <div className={styles.giftContainer + " row m-0 p-0"}>
        <div className={styles.giftText + " col-12"}>
            <p className={styles.giftTextPTag}>هدیه چی بدم؟؟</p>
        </div>
        <div className={styles.giftDivider+' col-12 my-3'}>
            <Divider />
            <div className={styles.redLine}></div>
        </div>
        <div className={styles.giftBoxSwiper + " col-12 my-3"}>
          <GiftBoxItem />
        </div>
    </div>
  )
}

export default Gift