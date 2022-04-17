import React from 'react'
import styles from "./BottomFooter.module.css"

const BottomFooter = () => {
  return (
    <div className={styles.bottomFooter+" row p-0 m-0 d-flex justify-content-between align-items-center mt-4"}>
        <div className='col-6 d-flex justify-content-start'><p className='text-muted'>تمام حقوق برای پینادو محفوظ است</p></div>
        <div className='col-6 d-flex justify-content-end'><img src="/assets/images/FooterImages/Banks/banks.png" alt="Banks_image" className='img-fluid' /></div>
    </div>
  )
}

export default BottomFooter