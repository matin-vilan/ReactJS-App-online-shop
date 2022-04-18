import React, { useState } from "react";
import MenuDropDownList from "./MenuDropDownList/MenuDropDownList";
import styles from "./MenuItem.module.css";
import * as Icon from "react-bootstrap-icons";

const MenuItem = ({ text , id }) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const activeHandler = () => {
    setActive(!active);
    setShow(!show);
  };


  return (
    <>
      <div className={styles.menuContainer +" pointer"} onMouseEnter={activeHandler} onMouseLeave={activeHandler}>
        <div className={styles.menuTitle}>
          <p className='p-0 m-0'>{text}</p>
          <Icon.ChevronDown />
        </div>
        <div className={show ? " d-block " +styles.menuDropDownList : " d-none " +styles.menuDropDownList}>
          <MenuDropDownList />
        </div>
      </div>
    </>
  );
};

export default MenuItem;
