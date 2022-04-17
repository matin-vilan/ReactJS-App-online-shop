import React from "react";
import Divider from "../../global/Divider/Divider";
import BottomMenu from "./BottomMenu/BottomMenu";
import SignSearch from "./SignSearch/SignSearch";
import TopMenu from "./TopMenu/TopMenu";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="row d-flex flex-column m-0 p-0">
        <TopMenu />
        <Divider />
        <SignSearch />
        <Divider />
        <BottomMenu />
        <Divider />
      </div>
    </div>
  );
};

export default Header;
