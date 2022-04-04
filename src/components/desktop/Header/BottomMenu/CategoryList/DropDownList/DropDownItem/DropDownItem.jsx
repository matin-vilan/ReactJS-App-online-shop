import React from 'react';
import styles from "./DropDownItem.module.css"

const DropDownItem = ({text}) => {
    return (
        <>
          <li className={styles.dropDownItem}>{text}</li>  
        </>
    );
};

export default DropDownItem;