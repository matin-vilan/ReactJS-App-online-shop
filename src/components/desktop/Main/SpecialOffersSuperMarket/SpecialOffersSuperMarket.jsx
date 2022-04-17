import React from 'react'
import SpecialOffersSuperMarketLogo from './SpecialOffersLogo/SpecialOffersSuperMarketLogo';
import Swipper from '../SpecialOffers/SpecialOffersLogo/Swipper/Swipper';
import styles from './SpecialOffersSuperMarket.module.css'

const SpecialOffersSuperMarket = () => {
  return (
    <>
        <div className={styles.specialOffersSuperMarketContainer + " row m-0 p-0 py-4"}>
          <div className="specialOfferLogo col-md-3 ps-5 pe-2 d-none d-md-block">
            <SpecialOffersSuperMarketLogo />
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

export default SpecialOffersSuperMarket