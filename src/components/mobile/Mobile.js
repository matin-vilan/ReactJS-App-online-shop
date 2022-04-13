import React from "react";
import { Provider } from "react-redux";
import Home from "../../layouts/Mobile/Home/Home";
import { mobileStore } from './store/store/store';

function Mobile() {
  return (
    <Provider store={mobileStore}>
      <div className="mobile">
        <Home />
      </div>
    </Provider>
  );
}

export default Mobile;
