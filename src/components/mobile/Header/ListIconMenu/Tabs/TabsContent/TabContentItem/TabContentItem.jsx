import React from "react";
import styles from "./TabContentItem.module.css";

function TabContentItem({ text }) {
  return (
    <div className={styles.tabContentItem}>
      <p>{text}</p>
    </div>
  );
}

export default TabContentItem;
