import React from 'react'
import styles from "./ProductsItem6.module.css"


const ProductsItem6 = ({src}) => {
  return (
    <div className='col-md-6 col-12 my-md-0 my-2 d-flex justify-content-center align-items-center'>
        <div>
            <img src={src} alt="product_image" className={styles.img6+' img-fluid pointer'} />
        </div>
    </div>
  )
}

export default ProductsItem6