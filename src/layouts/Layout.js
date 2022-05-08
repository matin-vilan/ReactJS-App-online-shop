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
  const isMobile = useMediaQuery("(max-width:992px)");
  useEffect(() => {}, [isMobile]);
  return (
    <div style={{ direction: "rtl" }}>
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
      <>{isMobile && <MobileFooter />}</>
    </div>
  );
};

export default Layout;
