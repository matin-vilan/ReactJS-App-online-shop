import React, { lazy, Suspense } from "react";
import { BrowserView, MobileView } from "react-device-detect";

const Mobile = lazy(() => import("./components/mobile/Mobile.js"));
const Desktop = lazy(() => import("./components/desktop/Desktop.js"));

function App() {
  return (
    <>
      <BrowserView>
        <Suspense fallback={<div>please waite ... </div>}>
          <Desktop />
        </Suspense>
      </BrowserView>
      <MobileView>
        <Suspense fallback={<div>please waite ... </div>}>
          <Mobile />
        </Suspense>
      </MobileView>
    </>
  );
}

export default App;
