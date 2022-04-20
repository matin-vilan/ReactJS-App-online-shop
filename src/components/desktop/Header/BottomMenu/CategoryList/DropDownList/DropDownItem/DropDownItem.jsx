import React, { Fragment } from "react";
import styles from "./DropDownItem.module.css";
import * as Icon from "react-bootstrap-icons";

const DropDownItem = ({ text, items }) => {
  return (
    <div className={styles.dropDownItemcont+" position-relative w-100"}>
      <li className={styles.dropDownItem} >{text}</li>
      {items && <Icon.ChevronLeft className="position-absolute" style={{right:"85%",  top:"30%"}} />}
      <div className={styles.test + " position-absolute"} >
        <ul>
          {items?.map((item)=>{
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDownItem;
