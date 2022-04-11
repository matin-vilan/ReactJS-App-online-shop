import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className="header">
      <div className={styles.headerContainer+" row m-0 p-0 px-2 my-4 d-flex justify-content-around"}>
        <div className="menuIcon col-4 d-flex justify-content-start align-items-center fs-4 pointer">
          <i class="bi bi-list"></i>
        </div>
        <div className="logo col-4 d-flex justify-content-center align-items-center poointer">
            <img src="./assets/images/topMenuLogo.png" alt="Logo" className="img-fluid" />
        </div>
        <div className={styles.signMenu+" col-4 d-flex justify-content-end align-items-center fs-4"}>
            <i class="bi bi-person pointer"></i>
            <i class="bi bi-bag pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
