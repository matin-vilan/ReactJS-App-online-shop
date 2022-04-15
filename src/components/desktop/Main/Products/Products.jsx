import React from 'react';
import styles from "./Products.module.css"
import ProductsItem4 from './ProductsItem4/ProductsItem4';
import ProductsItem6 from './ProductsItem6/ProductsItem6';

const productsImagesTop = [
    {
        src:"assets/images/mainImages/Products/01_1.jpg"
    },
    {
        src:"assets/images/mainImages/Products/top2-.jpg"
    },
    {
        src:"assets/images/mainImages/Products/top3-desk-s4.jpg"
    },
]

const productsImagesBottom = [
    {
        src:"assets/images/mainImages/Products/top4-desk-s4_0.jpg"
    },
    {
        src:"assets/images/mainImages/Products/top5-desk-s4.jpg"
    },
]

const Products = () => {
  return (
    <div className={styles.products}>
        <div className={styles.productsContainer+" row m-0 p-0"}>
            <div className='col-12'>
                <div className='row'>
                    {productsImagesTop.map((item, index)=>{
                        return <ProductsItem4 src={item.src} key={index} />
                    })}
                </div>
            </div>
            <div className='col-12'>
                <div className='row'>
                    {productsImagesBottom.map((item, index)=>{
                        return <ProductsItem6 src={item.src} key={index} />
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products