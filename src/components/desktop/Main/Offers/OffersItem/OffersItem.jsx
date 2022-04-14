import React from "react";
import styles from "./OffersItem.module.css";
const OffersItem = ({src,text,small,price}) => {
  return (
    <>
      <div className={styles.offersItem}>
        <div className={styles.offersItemImage}>
          <img
            src={src}
            alt="offersImage"
            className="img-fluid"
          />
        </div>
        <div className={styles.offersItemText}>
          <p>{text}</p>
          <small>{small}</small>
        </div>
        <div className={styles.offersItemPrice}>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default OffersItem;
