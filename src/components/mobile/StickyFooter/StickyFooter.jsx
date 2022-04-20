import React from 'react';
import styles from "./StickyFooter.module.css";
import StickyFooterItem from './StickyFooterItem/StickyFooterItem';

const StickyFooter = () => {
  return (
    <div className={styles.stickyFooter}>
        <div className='stickyFooterContainer'>
            <div className='row p-0 m-0' style={{direction:"rtl"}}>
                <StickyFooterItem icon={<i className="bi bi-shop"></i>} title={"فروشگاه"} />
                <StickyFooterItem icon={<i className="bi bi-heart"></i>} title={"علاقه مندی"} />
                <StickyFooterItem icon={<i className="bi bi-handbag"></i>} title={"سبد خرید"} />
                <StickyFooterItem icon={<i className="bi bi-person"></i>} title={"حساب کاربری"} />
            </div>
        </div>
    </div>
  )
}

export default StickyFooter