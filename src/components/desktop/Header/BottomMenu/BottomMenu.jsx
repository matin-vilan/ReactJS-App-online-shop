import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import Discount from "./Discount/Discount";
import MenuList from "./MenuList/MenuList";

function BottomMenu() {

  return (
    <div className="bottomMenu">
      <div
        className="bottomMenuContainer row d-flex m-0"
        style={{ height: "4rem" }}
      >
        <div className="categories col-3 d-flex position-relative justify-content-center align-items-center">
          <CategoryList />
          <div
            className="vr"
            style={{ alignSelf: "center", minHeight: "1.5em" }}
          ></div>
        </div>

        <div className="col-7 d-flex align-items-center">
          <MenuList />
        </div>
        <div className="col-2 align-items-center">
          <Discount />
        </div>
      </div>
    </div>
  );
}

export default BottomMenu;
