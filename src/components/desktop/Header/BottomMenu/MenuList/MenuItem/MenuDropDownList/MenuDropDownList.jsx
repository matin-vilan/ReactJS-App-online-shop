import React from "react";
import MenuDropDownItem from "./MenuDropDownItem/MenuDropDownItem";
import styles from "./MenuDropDownList.module.css";

const MenuDropDownList = ({ items }) => {
  return (
    <ul className={styles.MenuDropDownItemContainer}>
      <MenuDropDownItem items={items} />
    </ul>
  );
};

export default MenuDropDownList;
