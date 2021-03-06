import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <>
          <div className="col-md-8 col-8 p-0 m-0">
            <input
              className={styles.searchBoxInput}
              type="text"
              // id="floatingTextarea"
              placeholder="جستجوی محصولات"
              style={{ direction: "rtl" }}
            />
            {/* <label for="floatingTextarea">جستجوی محصولات</label> */}
          </div>

          <div className="col-md-3 col-3 p-0 m-0">
            <select
              className={" pointer text-muted px-1 " + styles.SearchMenuSelectBox}
              aria-label="Default select example"
            >
              <option defaultValue={"selected"}>انتخاب دسته بندی</option>
              <option value="1">آرایشی بهداشتی</option>
              <option value="2">رژ گونه</option>
            </select>
          </div>

          <div className={"col-md-1 col-1 p-0 m-0 pointer " + styles.searchBoxIcon}>
            <i className="bi bi-search "></i>
          </div>
        

    </>
  );
};

export default SearchBox;
