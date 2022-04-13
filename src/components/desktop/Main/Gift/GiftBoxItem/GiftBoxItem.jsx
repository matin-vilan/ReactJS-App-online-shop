import React from 'react'
import styles from "./GitBoxItem.module.css"

const GiftBoxItem = () => {
  return (
    <div className={styles.giftBoxItemContainer +" row p-0 m-0 "}>
        <div className={styles.icon +" col-12"}>icon</div>
        <div className={styles.text +" col-12"}>text</div>
        <div className={styles.button +" col-12"}>button</div>
    </div>
  )
}

export default GiftBoxItem