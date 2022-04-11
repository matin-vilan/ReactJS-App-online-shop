import React from "react";
import TopMenuNav from "./TopMenuNav/TopMenuNav";
import TopMenuSocialMedia from "./TopMenuSocialMedia/TopMenuSocialMedia";
import "./TopMenu.css";
import VerticalDivider from "../../../global/Divider/VerticalDivider/VerticalDivider";

function TopMenu() {
  return (
    <>
      <div className="row p-0 m-0 ">
        <div className="menuContainer col-md-2 d-flex justify-content-center align-items-center position-relative">
          <div className="topMenu-title">
            <p className="pointer">فروشگاه اینترنتی وودمارت</p>
          </div>
          <div
            className="vr me-4"
            style={{ alignSelf: "center", minHeight: "1.5em" }}
          ></div>
        </div>

        <div className="col-10">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="TopMenuNav col-8">
              <TopMenuNav />
            </div>
            <div className="TopMenuSocialMedia col-4">
              <TopMenuSocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMenu;
