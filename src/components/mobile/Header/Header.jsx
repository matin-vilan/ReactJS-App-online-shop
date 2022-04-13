import React, { useState } from "react";
import styles from "./Header.module.css";
import SliderMenu from "./ListIconMenu/SliderMenu";
import { showSliderMenu } from "../../../store/actions/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const showSlider = useSelector((state) => state.showSlider);

  const handleShow = () => {
    dispatch(showSliderMenu(true));
    console.log("clicked", showSlider, showSliderMenu(true));
  };

  // const [show, setShow] = useState(false);

  // const handleSliderMenu = () => {
  //   setShow(!show);
  // };

  return (
    <div className="header">
      <div
        id="headerContainer"
        className={
          styles.headerContainer +
          " row m-0 p-0 px-2 my-4 d-flex justify-content-around"
        }
      >
        <div
          className="menuIcon col-4 d-flex justify-content-start align-items-center fs-4 pointer"
        >
          <SliderMenu />
        </div>
        <div className="logo col-4 d-flex justify-content-center align-items-center poointer">
          <img
            src="./assets/images/topMenuLogo.png"
            alt="Logo"
            className="img-fluid"
          />
        </div>
        <div
          className={
            styles.signMenu +
            " col-4 d-flex justify-content-end align-items-center fs-4"
          }
        >
          <i className="bi bi-person pointer"></i>
          <i className="bi bi-bag pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
