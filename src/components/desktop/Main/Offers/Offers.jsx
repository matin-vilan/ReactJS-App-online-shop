import React from "react";
import styles from "./Offers.module.css";
import Divider from "../../../global/Divider/Divider";
import OffersSwiper from "./OffersSwiper/OffersSwiper";

const Offers = () => {

  return (
    <div className={styles.offersContainer}>
      <div className={styles.offersTitle}>
        <div className={styles.titleContainer}>
          <div>
            <p>آفروز | پیشنهادات وودمارت</p>
          </div>
          {/* <div>
          <i onClick={swiper.slideNext} className="bi bi-chevron-right"></i>
          <i onClick={swiper.slidePrev} className="bi bi-chevron-left"></i>
        </div> */}
          
        </div>
        <div className={styles.redLine}></div>
        <Divider />
      </div>
     
      <div className={styles.offersItemsContainer}>
        <OffersSwiper />
      </div>
    </div>
  );
};

export default Offers;
