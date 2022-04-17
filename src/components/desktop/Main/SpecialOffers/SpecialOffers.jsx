import React from 'react'
import SpecialOffersLogo from './SpecialOffersLogo/SpecialOffersLogo';
import Swipper from './SpecialOffersLogo/Swipper/Swipper';
import styles from './SpecialOffers.module.css'

const SpecialOffers = () => {
  return (
    <>
        <div className={styles.specialOffersContainer + " row m-0 p-0 py-4"}>
          <div className="specialOfferLogo col-md-3 ps-5 pe-2 d-none d-md-block">
            <SpecialOffersLogo />
          </div>
          <div
            className={
              styles.specialOfferTimer + " col-12 col-md-9 row m-0 p-0 container"
            }
          >
            <div className="swiperSpecialTimer">
              <Swipper />
            </div>
          </div>
        </div>
    </>
  )
}

export default SpecialOffers