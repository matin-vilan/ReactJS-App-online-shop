import React from "react";
import Divider from "../../global/Divider/Divider";
import BottomMenu from "./BottomMenu/BottomMenu";
import SignSearch from "./SignSearch/SignSearch";
import TopMenu from "./TopMenu/TopMenu";

const Header = () => {
  return (
    <div>
      <div className="row d-flex flex-column m-0 p-0">
        <TopMenu />
        <Divider />
        <SignSearch />
        <BottomMenu />
      </div>
    </div>
  );
};

export default Header;
