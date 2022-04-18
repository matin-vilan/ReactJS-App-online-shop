import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";

const MenuList = ({ menusTitle }) => {

  return (
    <div className={styles.menuList + " d-flex h-100"}>
      {menusTitle?.map((item, index) => {
        return <MenuItem key={index} text={item.slug} id={item.termId} />;
      })}
    </div>
  );
};

export default MenuList;
