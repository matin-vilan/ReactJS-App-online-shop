import React from "react";
import BottomMenu from "./BottomMenu/BottomMenu";
import SignSearch from "./SignSearch/SignSearch";
import TopMenu from "./TopMenu/TopMenu";

const Header = () => {
  return (
    <div>
      <div className="row d-flex flex-column">
        <TopMenu />
        <SignSearch />
        <BottomMenu />
      </div>
    </div>
  );
};

export default Header;
