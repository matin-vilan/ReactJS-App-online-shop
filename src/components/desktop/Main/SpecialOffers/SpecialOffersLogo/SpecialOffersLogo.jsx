import React from "react";
import SeeAllButton from "../../../../global/Buttons/SeeAllButton/SeeAllButton";
import styles from "./SpecialOffersLogo.module.css";

function SpecialOffersLogo() {
  return (
    <>
      <div
        className={
          "SpecialOffersLogo d-flex flex-column justify-content-center align-items-center"
        }
      >
        <div className="SpecialOffersLogoImage">
          <img
            src={"/assets/images/mainImages/specialOffers/specialOffers.png"}
            alt={"special_Offers_image"}
            className={"img-fluid"}
          />
        </div>
        <div
          className={
            "SpecialOffersLogoButton d-flex justify-content-center w-75 mt-3 pointer"
          }
        >
          <SeeAllButton />
        </div>
      </div>
    </>
  );
}

export default SpecialOffersLogo;
