import React from 'react';
import styles from "./LastDiscount.module.css"

const LastDiscount = () => {
  return (
    <div className='LastDiscount'>
        <div className={styles.text}>
            <p>همیشه اولین نفر باشید! برای اطلاع از آخرین تخفیف‌ها و جدیدترین کالاها در خبرنامه ثبت‌نام کنی</p>
        </div>
        <div className={styles.input}>
            <div><input type="text" /></div>
            <div><button>عضویت</button></div>
        </div>
    </div>
  )
}

export default LastDiscount