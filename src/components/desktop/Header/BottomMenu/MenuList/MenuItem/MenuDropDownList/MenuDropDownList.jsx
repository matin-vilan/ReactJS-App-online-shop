import React from 'react';
import MenuDropDownItem from './MenuDropDownItem/MenuDropDownItem';
import styles from "./MenuDropDownList.module.css"

const MenuDropDownList = () => {
    return (
        <ul className={styles.MenuDropDownItemContainer}>
            <MenuDropDownItem />
        </ul>
    );
};

export default MenuDropDownList;