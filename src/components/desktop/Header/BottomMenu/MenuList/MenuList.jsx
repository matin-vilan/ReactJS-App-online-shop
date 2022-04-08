import React, { useEffect } from "react";
import { getMenusRequestServer } from "../../../../../store/actions/actions";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Divider from "../../../../global/Divider/Divider";


const MenuList = () => {

  const dispatch = useDispatch();
  const menuData = useSelector((state) => state);

  const data = [
    {
      text: "صفحه نخست",
    },
    {
      text: "فروشگاه",
    },
  ];

  return (
    <div className={styles.menuList+"menuList d-flex h-100"}>
      {data.map((item, index) => {
        return (
          <>
            <MenuItem
              key={index}
              text={item.text}
            />
            {/* <div key={index+2} className="hr"></div> */}
          </>
        );
      })}
    </div>
  );
};

export default MenuList;
