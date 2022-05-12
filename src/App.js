import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./layouts/Desktop/PostDetails/PostDetails.jsx";
// import { isMobile } from "react-device-detect";
import LiteCircular from "./components/global/Spinner/LiteCircular.jsx";
import { useMediaQuery } from "./hooks/useMediaQuery";
import ShoppingStore from "./layouts/Desktop/ShoppingStore/ShoppingStore.jsx";
import Layout from "./layouts/Layout.js";
import { ReactQueryDevtools } from "react-query/devtools";

const Mobile = lazy(() => import("./components/mobile/Mobile.js"));
const Desktop = lazy(() => import("./components/desktop/Desktop.js"));
const General = lazy(() => import("./General"));

function App() {
  const isMobile = useMediaQuery("(max-width:992px)");

  return (
    <BrowserRouter>
      <Suspense fallback={<LiteCircular />}>
        <General>
          <Routes>
            <Route element={<Layout />}>
              <Route path="post/:id" element={<PostDetails />} />
              <Route path="/shop" element={<ShoppingStore />} />
              {isMobile ? (
                <Route path="/" element={<Mobile />} />
              ) : (
                <Route path="/" element={<Desktop />} />
              )}
            </Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </General>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
