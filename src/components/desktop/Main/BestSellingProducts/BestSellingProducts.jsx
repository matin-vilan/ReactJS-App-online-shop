import React from "react";
import styles from "./BestSellingProducts.module.css";
import HeaderTitleWithDivider from "../../../global/HeaderTitleWithDivider/HeaderTitleWithDivider";
import OffersSwiper from "./OffersSwiper/OffersSwiper";

const BestSellingProducts = () => {
  return (
    <div className={styles.bestSellingProducts}>
      <div className={styles.header}>
        <HeaderTitleWithDivider
          title={"پر فروش ترین محصولات"}
          width={"18rem"}
          style={{
            fontSize: "2rem",
            fontWeight: "900",
          }}
        />
      </div>
      <div className={styles.swiper}>
        <OffersSwiper />
      </div>
    </div>
  );
};

export default BestSellingProducts;
