import React from "react";
import styles from "./ProductsItem4.module.css"

const ProductsItem4 = ({ src }) => {
  return (
    <div className="col-md-4 col-12 my-md-0 my-2 d-flex justify-content-center align-items-center">
      <div className="w-100">
        <img src={src} alt="product_image"  className={styles.img4+' img-fluid w-100 pointer'} />
      </div>
    </div>
  );
};

export default ProductsItem4;
