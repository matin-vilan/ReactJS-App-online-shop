import React from "react";
import { useState } from "react";
import styles from "./CategoryList.module.css";
import * as Icon from "react-bootstrap-icons";
import DropDownList from "./DropDownList/DropDownList";

const CategoryList = () => {
  return (
    <div
      className={
        styles.mainCategories +
        " w-100 d-flex pointer align-items-center justify-content-between w-100"
      }
    >
      <div className="dropdownMenu d-flex justify-content-start align-items-center">
        <div className={styles.icon}>
          <Icon.List />
        </div>
        <div className={styles.listTitle}>دسته بندی کالاها</div>
      </div>
      <div className={styles.dropToggleIcon}>
        <Icon.ChevronDown />
      </div>

      <div className={styles.dropDownList}>
        <DropDownList />
      </div>
    </div>
  );
};

export default CategoryList;
