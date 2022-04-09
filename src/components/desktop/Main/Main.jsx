import React from 'react'
import OwlCarouselSlider from './OwlCarouselSlider/OwlCarouselSlider'
import TopMainSquareImage from './TopMainImages/TopMainSquareImage/TopMainSquareImage'
import styles from "./Main.module.css";
import SpecialOffersLogo from './SpecialOffers/SpecialOffersLogo/SpecialOffersLogo';
import MainSpecialsTimer from '../../global/MainSpecialsTimer/MainSpecialsTimer';

function Main() {
  return (
    <div className='row m-0 p-0'>
    <section className={styles.mainLayout + " col-12"}>
      <div className='row p-0 m-0 my-5'>

        <div className='row p-0 m-0 d-flex col-12 mb-4'>
          <div className='col-md-4 col-12'>
            <TopMainSquareImage src={"/assets/images/mainImages/1.jpg"} />
          </div>
          <div className='col-md-8 col-12'>
            <OwlCarouselSlider />
          </div>
        </div>

        <div className='row p-0 m-0 d-flex col-12'>
          <div className='col-md-4 col-12'>
          <TopMainSquareImage src={"assets/images/mainImages/2.jpg"} />
          </div>
          <div className='col-md-4 col-12'>
          <TopMainSquareImage src={"assets/images/mainImages/3.jpg"} />
          </div>
          <div className='col-md-4 col-12'>
          <TopMainSquareImage src={"assets/images/mainImages/4.jpg"}  />
          </div>
        </div>
        
      </div>
    </section>

    <section className={styles.mainSpecialOffers + " col-12"}>
      <div className={styles.specialOffersContainer+' row m-0 p-0 py-4'}>
        <div className='specialOfferLogo col-5 col-md-3 ps-5 pe-2'>
          <SpecialOffersLogo />
        </div>
        <div className={styles.specialOfferTimer+' col-7 col-md-9 row m-0 p-0 container'}>
          <MainSpecialsTimer />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Main