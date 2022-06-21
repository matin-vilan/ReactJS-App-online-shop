import React from "react";
import Divider from "../Divider/Divider";
import styles from "./MainSpecialsTimer.module.css";

function MainSpecialsTimer() {
  return (
    <div
      className={
        styles.mainSpecialTimerComponent + " col-12 col-md-4 p-0 m-0 container"
      }
    >
      <div className="specialComponentContainer d-flex flex-column justify-content-center align-items-center h-100">
        <div className="specialComponentImg">
          <img
            src="/assets/images/mainImages/specialOffers/flormar.jpg"
            alt="special_image_flormar"
            className="img-fluid"
          />
        </div>
        <div
          className={
            styles.specialComponentText +
            " my-3 d-flex flex-column justify-content-center align-items-start"
          }
        >
          <p className="mb-3">رژ گونه فلورمار - ۹۰</p>
          <p className="text-danger" style={{ color: "#333333" }}>
            ۵۵,۰۰۰ تومان
          </p>
        </div>
        <Divider />
        <div className="specialComponentTime">
          <div className="timerContainer row d-flex m-0 p-0 mt-3">
            <div className={styles.timerItem + " col-3"}>
              <div className={styles.counter}>5</div>
              <div className={styles.format}>روز</div>
            </div>
            <div className={styles.timerItem + " col-3"}>
              <div className={styles.counter}>5</div>
              <div className={styles.format}>ساعت</div>
            </div>
            <div className={styles.timerItem + " col-3"}>
              <div className={styles.counter}>5</div>
              <div className={styles.format}>دقیقه</div>
            </div>
            <div className={styles.timerItem + " col-3"}>
              <div className={styles.counter}>5</div>
              <div className={styles.format}>ثانیه</div>
            </div>
          </div>
        </div>

        <div className={styles.buy}>
          <div>
            <i className="bi bi-cart3"></i>
          </div>
          <div>
            <i className="bi bi-search"></i>
          </div>
          <div>
            <i className="bi bi-arrow-left-right"></i>
          </div>
          <div>
            <i className="bi bi-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSpecialsTimer;
