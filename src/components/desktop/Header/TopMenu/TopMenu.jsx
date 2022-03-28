import React from "react";
import TopMenuNav from "./TopMenuNav/TopMenuNav";
import TopMenuSocialMedia from "./TopMenuSocialMedia/TopMenuSocialMedia";

function TopMenu() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div>
            <p>فروشگاه اینترنتی وودمارک</p>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
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
