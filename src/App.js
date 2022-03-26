import React, { Suspense } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Mobile = React.lazy(() => {
  import ("./components/mobile/Mobile.js");
});
const Desktop = React.lazy(() => {
  import ("./components/desktop/Desktop.js");
});

function App() {
  return (
    <Suspense fallback={<h1>please waite ... </h1>}>
      <BrowserView>
        <Desktop />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Suspense>
  );
}

export default App;
