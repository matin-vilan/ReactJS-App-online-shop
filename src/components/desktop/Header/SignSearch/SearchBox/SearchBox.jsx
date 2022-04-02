import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <input
            className={"form-control " + styles.searchBoxInput}
            type="text"
            // id="floatingTextarea"
            placeholder="جستجوی محصولات"
            style={{ direction: "rtl" }}
          />
          {/* <label for="floatingTextarea">جستجوی محصولات</label> */}

          <select
            className={"form-select " + styles.SearchMenuSelectBox}
            aria-label="Default select example"
          >
            <option defaultValue={"selected"}>انتخاب کنید</option>
            <option value="1">آرایشی بهداشتی</option>
            <option value="2">رژ گونه</option>
          </select>

          <div className={styles.searchBoxIcon}>
            <i className="bi bi-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
