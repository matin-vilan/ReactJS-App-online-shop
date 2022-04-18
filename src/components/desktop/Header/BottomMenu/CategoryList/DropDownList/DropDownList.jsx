import React, { Fragment } from "react";
import Divider from "../../../../../global/Divider/Divider";
import DropDownItem from "./DropDownItem/DropDownItem";
import styles from "./DropDownList.module.css";
import { useSelector } from "react-redux";

const DropDownList = ({ show }) => {
  const menus = useSelector((state) => state.menus);
  const categories = menus?.categories;
  // const data = [

  //     {
  //         text: "آرایشی و گریم"
  //     },
  //     {
  //         text: "مو"
  //     },
  //     {
  //         text: "پوست"
  //     },
  //     {
  //         text: "بدن"
  //     },
  //     {
  //         text: "عطر"
  //     },
  //     {
  //         text: "بهداشت شخصی"
  //     }
  // ]

  return (
      <ul className={styles.dropDownUl}>
        {categories?.length?categories.map((category) => (
          <Fragment key={category.id}>
            <DropDownItem text={category?.title} />
          </Fragment>
        )):<div>LOADING ...</div>}
      </ul>
  );
};

export default DropDownList;
