import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import styles from "./DropDownList.module.css";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const DropDownList = () => {
  const menus = useSelector((state) => state.menus);
  const categories = menus?.categories;
  return (
    <ul className={styles.dropDownUl}>
      {categories?.length ? (
        categories.map((category) => (
          <div
            key={category.id}
            className={
              styles.dropDownItemContainer +
              " d-flex justify-content-between align-items-center ps-3"
            }
          >
            <DropDownItem text={category?.title} items={category?.children} />
          </div>
        ))
      ) : (
        <div className={styles.spinner}>
          <Spinner animation="grow" variant="secondary" />
        </div>
      )}
    </ul>
  );
};

export default DropDownList;
