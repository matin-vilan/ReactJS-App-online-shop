import React from "react";
import styles from "./MenuDropDownItem.module.css";

const MenuDropDownItem = ({ items }) => {
  return (
    <>
      {items?.map((item, index) => {
        return (
          <li className={styles.menuDropDownItem} key={index} >
            <p className="p-0 m-0">{item?.title}</p>
          </li>
        );
      })}
    </>
  );
};

export default MenuDropDownItem;
