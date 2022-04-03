import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from "./MenuList.module.css";

const MenuList = () => {
    return (
        <div className='d-flex justify-content-start'>
            <MenuItem text={"صفحه نخست"} />
            <MenuItem text={"فروشگاه"} />
        </div>
    );
};

export default MenuList;
