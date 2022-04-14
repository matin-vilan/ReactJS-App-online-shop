import React, { useEffect } from "react";
import { getMenusRequestServer } from "../../../../../store/actions/actions";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Divider from "../../../../global/Divider/Divider";
import { axiosInstanceApiMenu } from "../../../../../utils/axiosInstance/axiosInstance";

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

  useEffect(() => {
    axiosInstanceApiMenu().get().then().catch();
  });

  return (
    <div className={styles.menuList + " pointer d-flex h-100"}>
      {data.map((item, index) => {
        return <MenuItem key={index} text={item.text} />;
      })}
    </div>
  );
};

export default MenuList;
