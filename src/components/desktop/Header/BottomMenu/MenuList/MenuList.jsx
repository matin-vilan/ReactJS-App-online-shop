import React, { useEffect } from "react";
import { getMenusRequestServer } from "../../../../../store/actions/actions";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const MenuList = () => {

  const dispatch = useDispatch();
  const menuData = useSelector((state)=>state);

  const data = [
    {
      text: "صفحه نخست",
    },
    {
      text: "فروشگاه",
    },
  ];

  useEffect(() => {
    dispatch(getMenusRequestServer());
  }, [])

  console.log("menudata",menuData);

  return (
    <div className="d-flex justify-content-start">
      {data.map((item, index) => {
        return (
          <MenuItem
            key={index}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
