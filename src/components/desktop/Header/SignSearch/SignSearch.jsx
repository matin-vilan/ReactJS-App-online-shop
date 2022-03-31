import React from "react";
import VerticalDivider from "../../../global/Divider/VerticalDivider/VerticalDivider";
import SearchBox from "./SearchBox/SearchBox";
import ShoppingItems from "./ShoppingItems/ShoppingItems";

function SignSearch() {
  return (
    <div className="d-flex align-items-center">
       
      <div className="signUp d-flex">
        <ShoppingItems icon={<i class="bi bi-bag"></i>} text={"0 تومان"} />

        <div
          class="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>

        <ShoppingItems icon={<i class="bi bi-heart"></i>} text={"علاقه مندی"} />

        <div
          class="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>

        <ShoppingItems
          icon={<i class="bi bi-arrow-left-right"></i>}
          text={"مقایسه"}
        />

        <div
          class="vr"
          style={{ alignSelf: "center", minHeight: "1.5em" }}
        ></div>

        <ShoppingItems
          icon={<i class="bi bi-person"></i>}
          text={"ورود / ثبت نام"}
        />
      </div>

      <div className="search">
        <SearchBox />
      </div>

    </div>
  );
}

export default SignSearch;
