import React from "react";
import TopMenuNav from "./TopMenuNav/TopMenuNav";
import TopMenuSocialMedia from "./TopMenuSocialMedia/TopMenuSocialMedia";
import "./TopMenu.css";

function TopMenu() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2 d-flex align-items-center position-relative">
          <div className="topMenu-title">
            <p>فروشگاه اینترنتی وودمارت</p>
          </div>
          <span className="verticalMenuDivider"></span>
        </div>

        <div className="col-md-10">
          <div className="row d-flex justify-content-between">
            <div className="TopMenuNav col-8">
              <TopMenuNav />
            </div>
            <div className="TopMenuSocialMedia col-4">
              <TopMenuSocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
