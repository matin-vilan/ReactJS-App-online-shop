import React, { lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

const MobileHeader = lazy(() => import("../components/mobile/Header/Header"));
const DesktopHeader = lazy(() => import("../components/desktop/Header/Header"));
const MobileFooter = lazy(() =>
  import("../components/mobile/StickyFooter/StickyFooter")
);
const DesktopFooter = lazy(() => import("../components/desktop/Footer/Footer"));

const Layout = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  return (
    <div>
      <div style={{ direction: "rtl!important" }}>
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </div>
      <div>
        {children}
        <Outlet />
      </div>
      <div>
        <DesktopFooter />
      </div>
      <div>{isMobile && <MobileFooter />}</div>
    </div>
  );
};

export default Layout;
