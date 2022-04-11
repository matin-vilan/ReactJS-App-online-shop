import React from 'react'
import styles from "./SliderMenu.module.css"
import Tabs from './Tabs/Tabs';
import TabsContent from './Tabs/TabsContent/TabsContent';

const SliderMenu = () => {
  return (
    <div className={styles.sliderMenu+' position-absolute'}>
        <div className={styles.sliderContainer}>

          <div className={styles.productSearching+" row p-0 m-0"}>
            <div className='col-10'>
              <input type="text" placeholder='جستجوی محصولات'/>
            </div>
            <div className={styles.iconContainer+' col-2'}>
              <i class="bi bi-search"></i>
            </div>
          </div>
          
          <div className={styles.tabsAndContent}>
            <Tabs />
          </div>

        </div>
    </div>
  )
}

export default SliderMenu;