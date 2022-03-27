import React, { lazy, Suspense } from "react";
import { isMobile } from "react-device-detect";
import LiteCircular from "./components/global/Spinner/LiteCircular.jsx";

const AppComponent = isMobile?lazy(() => import("./components/mobile/Mobile.js")):lazy(() => import("./components/desktop/Desktop.js"));

function App() {
  return (
    <>
        <Suspense fallback={<LiteCircular />}>
          <AppComponent />
        </Suspense>
    </>
  );
}

export default App;
