import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <>
          <div className="col-md-7 col-8 p-0 m-0">
            <input
              className={"form-control " + styles.searchBoxInput}
              type="text"
              // id="floatingTextarea"
              placeholder="جستجوی محصولات"
              style={{ direction: "rtl" }}
            />
            {/* <label for="floatingTextarea">جستجوی محصولات</label> */}
          </div>

          <div className="col-md-4 col-3 p-0 m-0">
            <select
              className={"form-select pointer " + styles.SearchMenuSelectBox}
              aria-label="Default select example"
            >
              <option defaultValue={"selected"}>انتخاب کنید</option>
              <option value="1">آرایشی بهداشتی</option>
              <option value="2">رژ گونه</option>
            </select>
          </div>

          <div className={"col-md-1 col-1 p-0 m-0 pointer " + styles.searchBoxIcon}>
            <i className="bi bi-search"></i>
          </div>
        

    </>
  );
};

export default SearchBox;
