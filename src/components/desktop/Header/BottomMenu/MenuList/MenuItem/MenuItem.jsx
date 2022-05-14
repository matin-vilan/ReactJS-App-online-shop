import React from "react";
import MenuDropDownList from "./MenuDropDownList/MenuDropDownList";
import styles from "./MenuItem.module.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { makeLocalUrl } from "../../../../../../hooks/useString";

const MenuItem = ({ url, text, items, mainMenu }) => {

  const urlProp = url;
  const link = makeLocalUrl(urlProp);

  return (
    <>
      <div className={styles.menuContainer + " pointer"}>
        <Link to={`${link}`}>
          <div className={styles.menuTitle}>
            <p className="p-0 m-0">{mainMenu ? text : "loading"}</p>
            {items ? <Icon.ChevronDown /> : ""}
          </div>
        </Link>

        <div className={styles.menuDropDownList}>
          <MenuDropDownList items={items} />
        </div>
      </div>
    </>
  );
};

export default MenuItem;
