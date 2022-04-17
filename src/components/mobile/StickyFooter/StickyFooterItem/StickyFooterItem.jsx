import React from "react";
import styles from "./StickyFooterItem.module.css";

const StickyFooterItem = ({icon , title}) => {
  return (
    <div className={styles.StickyFooterItem + " col-3 py-2"}>
      <div className={styles.StickyFooterItemContainer}>
        <div className={styles.stickyFooterIcon}>
          {icon}
        </div>
        <div className={styles.stickyFooterItem}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StickyFooterItem;
