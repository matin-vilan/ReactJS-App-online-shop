import React from "react";
import styles from "./SearchBox.module.css"

const SearchBox = () => {
  return (
    <div>
      <div className="d-flex">
        <input className={styles.searchBoxInput} type="text" name="" value="" />
        <select
          className={"form-select" + styles.SearchMenuSelectBox}
          aria-label="Default select example"
        >
          <option selected>select menu</option>
          <option value="1">One</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBox;
