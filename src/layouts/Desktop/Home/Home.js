import React from "react";
import Main from "../../../components/desktop/Main/Main";
import { useEffect } from "react";
import axios from "../../../utils/axios";

function Home() {
  const fecthCat = async () => {
    const res = await axios
      .post("/wp-json/wc/v3/products/categories")
      .then((res) => res.data);
    console.log(res);
    return res;
  };
  useEffect(() => {
    fecthCat();
    console.log("hi");
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
