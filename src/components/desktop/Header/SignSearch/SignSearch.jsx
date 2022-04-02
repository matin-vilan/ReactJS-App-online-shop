import React from "react";
import VerticalDivider from "../../../global/Divider/VerticalDivider/VerticalDivider";
import Logo from "./Logo/Logo";
import SearchBox from "./SearchBox/SearchBox";
import ShoppingItems from "./ShoppingItems/ShoppingItems";

function SignSearch() {
  return (
    <div className="row d-flex align-items-center justify-content-center p-0 m-0">
       
      <div className="signUp d-flex justify-content-center col-lg-5 col-12">
        <ShoppingItems icon={<i className="bi bi-bag"></i>} text={"0 تومان"} />

        <div
          className="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>

        <ShoppingItems icon={<i className="bi bi-heart"></i>} text={"علاقه مندی"} />

        <div
          className="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>

        <ShoppingItems
          icon={<i className="bi bi-arrow-left-right"></i>}
          text={"مقایسه"}
        />

        <div
          className="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>

        <ShoppingItems
          icon={<i className="bi bi-person"></i>}
          text={"ورود / ثبت نام"}
        />
      </div>

      <div className="search d-flex justify-content-center col-lg-5 col-8 row mt-lg-0 mt-3">
        <SearchBox />
      </div>

      <div className="logo d-flex justify-content-center col-lg-2 col-12 mt-lg-0 mt-3">
        <Logo />
      </div>

    </div>
  );
}

export default SignSearch;
