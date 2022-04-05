import React from 'react';
import Divider from '../../../../../../global/Divider/Divider';
import MenuDropDownItem from './MenuDropDownItem/MenuDropDownItem';
import styles from "./MenuDropDownList.module.css"

const MenuDropDownList = () => {
    return (
        <ul className={styles.MenuDropDownItemContainer}>
            <MenuDropDownItem />
            <Divider />
            <MenuDropDownItem />
            <Divider />
            <MenuDropDownItem />
        </ul>
    );
};

export default MenuDropDownList;