import React from "react";
import OwlCarouselSlider from "./OwlCarouselSlider/OwlCarouselSlider";
import TopMainSquareImage from "./TopMainImages/TopMainSquareImage/TopMainSquareImage";
import styles from "./Main.module.css";
import SpecialOffersLogo from "./SpecialOffers/SpecialOffersLogo/SpecialOffersLogo";
import Swipper from "./SpecialOffers/SpecialOffersLogo/Swipper/Swipper";
import Offers from "./Offers/Offers";
import Products from './Products/Products';


function Main() {

  return (
    <div className={styles.main+" row m-0 p-0"}>
      <section className={styles.mainLayout + " col-12"}>
        <div className="row p-0 m-0 my-5">
          <div className="row p-0 m-0 d-flex col-12 mb-md-4 mb-0 align-items-stretch">
            <div className="col-md-4 col-12">
              <TopMainSquareImage src={"/assets/images/mainImages/1.jpg"} />
            </div>
            <div className="col-md-8 col-12 mt-3 mt-md-0">
              <OwlCarouselSlider />
            </div>
          </div>

          <div className="row p-0 m-0 d-flex col-12 align-items-stretch">
            <div className="col-md-4 col-12 mt-3 mt-md-0">
              <TopMainSquareImage src={"assets/images/mainImages/2.jpg"} />
            </div>
            <div className="col-md-4 col-12 mt-3 mt-md-0">
              <TopMainSquareImage src={"assets/images/mainImages/3.jpg"} />
            </div>
            <div className="col-md-4 col-12 mt-3 mt-md-0">
              <TopMainSquareImage src={"assets/images/mainImages/4.jpg"} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainSpecialOffers + " col-12"}>
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
      </section>

      <section className={styles.dayOffers + " col-12"}>
        <Offers />
      </section>

      <section className={styles.Products + " col-12"}>
        <Products />
      </section>

    </div>
  );
}

export default Main;
