import React from "react";
import styles from "./Footer.module.css";
import Divider from '../../global/Divider/Divider';
import TopFooter from "./TopFooter/TopFooter";
import BottomFooter from "./BottomFooter/BottomFooter";



function Footer() {
  return (
    <div className={styles.footer}>
      <div className="footerContainer mb-5">
        <div className="row m-0 p-0">
          <TopFooter />
          <Divider />
          <BottomFooter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
