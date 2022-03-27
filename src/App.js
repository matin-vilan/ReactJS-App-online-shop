import React, { lazy, Suspense } from "react";
import { isMobile } from "react-device-detect";
import LiteCircular from "./components/global/Spinner/LiteCircular.jsx";
import "bootstrap/dist/css/bootstrap.min.css"

const AppComponent = isMobile?lazy(() => import("./components/desktop/Desktop.js")):lazy(() => import("./components/desktop/Desktop.js"));

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
