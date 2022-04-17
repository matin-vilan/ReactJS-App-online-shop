import React from "react";
import Divider from "../Divider/Divider";
import styles from "./HeaderTitleWithDivider.module.css";

const HeaderTitleWithDivider = (props) => {
  return (
    <div>
      <div className={styles.title} style={props.style}>
        {props.title}
        <div className={styles.redLine} style={{width:props.width}}></div>
      </div>
      <Divider />
    </div>
  );
};

export default HeaderTitleWithDivider;
