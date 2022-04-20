import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";
import { useSelector } from 'react-redux';

const MenuList = () => {

  const state = useSelector(state=>state.menus);
  const mainMenu = state?.main_menu;

  return (
    <div className={styles.menuList + " d-flex h-100"}>
      {mainMenu?.map((item) => {
        return <MenuItem key={item.id} mainMenu={item} text={item?.title} items={item?.children} />;
      })}
    </div>
  );
};

export default MenuList;
