import React, { lazy, Suspense } from "react";
// import { isMobile } from "react-device-detect";
import LiteCircular from "./components/global/Spinner/LiteCircular.jsx";
import {useMediaQuery} from "./hooks/useMediaQuery"

const Mobile = lazy(() => import("./components/mobile/Mobile.js"));
const Desktop = lazy(() => import("./components/desktop/Desktop.js"));

function App() {
  const isMobile = useMediaQuery('(max-width:768px)')
  return (
        <Suspense fallback={<LiteCircular />}>
          {isMobile?<Mobile />:<Desktop />}
        </Suspense>
  );
}

export default App;
