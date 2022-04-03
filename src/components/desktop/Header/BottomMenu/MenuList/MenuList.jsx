import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";

const MenuList = () => {

  const data = [
    {
      text: "صفحه نخست",
    },
    {
      text: "فروشگاه",
    },
  ];

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
