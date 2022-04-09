import React, { useState } from "react";
import MenuDropDownList from "./MenuDropDownList/MenuDropDownList";
import styles from "./MenuItem.module.css";

const MenuItem = ({ text }) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const activeHandler = () => {
    setActive(!active);
    setShow(!show);
  };

  return (
    <>
      <div className={styles.menuContainer} onMouseEnter={activeHandler} onMouseLeave={activeHandler}>
        <div className={styles.menuTitle + ' d-flex'}>
          <p className='p-0 m-0'>{text}</p>
          <i className="bi bi-chevron-compact-down"></i>
        </div>
        <div className={show ? " d-block " +styles.menuDropDownList : " d-none " +styles.menuDropDownList}>
          <MenuDropDownList />
        </div>
      </div>
    </>
  );
};

export default MenuItem;
