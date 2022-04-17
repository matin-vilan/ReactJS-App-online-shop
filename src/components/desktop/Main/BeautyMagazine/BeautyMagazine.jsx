import React from "react";
import HeaderTitleWithDivider from "../../../global/HeaderTitleWithDivider/HeaderTitleWithDivider";
import Swipper from "./Swipper/Swipper";
import styles from "./BeautyMagazine.module.css"
const BeautyMagazine = () => {
  return (
    <div>
      <div className={styles.header+" my-4"}>
        <HeaderTitleWithDivider width={"12rem"} title={"مجله ی زیبایی"} />
      </div>
      <div className={styles.swiperContainer}>
        <Swipper />
      </div>
    </div>
  );
};

export default BeautyMagazine;
