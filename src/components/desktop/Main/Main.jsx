import React from 'react'
import OwlCarouselSlider from './OwlCarouselSlider/OwlCarouselSlider'
import TopMainSquareImage from './TopMainImages/TopMainSquareImage/TopMainSquareImage'
import styles from "./Main.module.css";
import SpecialOffersLogo from './SpecialOffers/SpecialOffersLogo/SpecialOffersLogo';

function Main() {
  return (
    <div className='row m-0 p-0'>
    <section className={styles.mainLayout + " container col-12"}>
      <div className='row p-0 m-0 my-5'>

        <div className='row p-0 m-0 d-flex col-12 mb-4'>
          <div className='col-4'>
            <TopMainSquareImage src={"/assets/images/mainImages/1.jpg"} />
          </div>
          <div className='col-8'>
            <OwlCarouselSlider />
          </div>
        </div>

        <div className='row p-0 m-0 d-flex col-12'>
          <div className='col-4'>
          <TopMainSquareImage src={"assets/images/mainImages/2.jpg"} />
          </div>
          <div className='col-4'>
          <TopMainSquareImage src={"assets/images/mainImages/3.jpg"} />
          </div>
          <div className='col-4'>
          <TopMainSquareImage src={"assets/images/mainImages/4.jpg"}  />
          </div>
        </div>
        
      </div>
    </section>

    <section className={styles.mainSpecialOffers + " col-12"}>
      <div className={styles.specialOffersContainer+' row m-0 p-0 pt-4'}>
        <div className='specialOfferLogo col-2 pe-5'>
          <SpecialOffersLogo />
        </div>
        <div className='specialOfferLogo col-10'>
          items
        </div>
      </div>
    </section>
    </div>
  )
}

export default Main