import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import MenuList from "./MenuList/MenuList";

function BottomMenu() {
  return (
    <div className="row d-flex m-0">
      <div className="categories col-2 d-flex">
        <CategoryList />
        <div
          className="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>
      </div>
      <div className="col-8 d-flex align-items-center">
        <MenuList />
      </div>
    </div>
  );
}

export default BottomMenu;
