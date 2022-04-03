import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./CategoryList.module.css";
import * as Icon from "react-bootstrap-icons";

const CategoryList = () => {
  const [hovered, setHovered] = useState(false);

  const handleMenuHoverIn = () => {
    setHovered(!hovered);
  };

  const handleMenuHoverOut = () => {
    setHovered(false);
  };

  const dropDownMenu = hovered ? "show" : "";

  return (
    <>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="dropdownMenu d-flex justify-content-start align-items-center">
          <div className={styles.icon}>
            <Icon.List />
          </div>
          <div className={styles.listTitle}>دسته بندی کالاها</div>
        </div>
        <div className={styles.dropToggleIcon}>
          <Icon.ChevronDown />
        </div>
      </div>
    </>
  );
};

export default CategoryList;
