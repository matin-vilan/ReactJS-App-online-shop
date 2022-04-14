import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import styles from "./SliderMenu.module.css";
import "./OffCanvasSlider.css";
import Tabs from "./Tabs/Tabs";

const SliderMenu = () => {

  const [show , setShow] = useState(false);

  const handleShow =()=>{
    setShow(true)
  }

  const handleClose = ()=>{
    setShow(false)
  }

  return (
    <>
      <div className="menuIconContainer" onClick={handleShow}>
        <i className="bi bi-list"></i>
      </div>
      <Offcanvas
        className={"offcanvasStyle"}
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
      >
        <div className={styles.sliderMenu + " position-absolute"}>
          <div className={styles.sliderContainer}>
            <div className={styles.productSearching + " row p-0 m-0"}>
              <div className="col-10">
                <input type="text" placeholder="جستجوی محصولات" />
              </div>
              <div className={styles.iconContainer + " col-2"}>
                <i className="bi bi-search"></i>
              </div>
            </div>
            <div className={styles.tabsAndContent}>
              <Tabs />
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default SliderMenu;
