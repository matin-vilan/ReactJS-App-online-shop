import React from 'react';
import Divider from '../../../../../global/Divider/Divider';
import DropDownItem from './DropDownItem/DropDownItem';
import styles from "./DropDownList.module.css";

const DropDownList = ({ show }) => {

    const data = [

        {
            text: "آرایشی و گریم"
        },
        {
            text: "مو"
        },
        {
            text: "پوست"
        },
        {
            text: "بدن"
        },
        {
            text: "عطر"
        },
        {
            text: "بهداشت شخصی"
        }
    ]

    return (
        <div className={show ? styles.dropDownShow : styles.dropDownHide}>
            <ul className={styles.dropDownUl}>
                {data.map((item, index) => {
                    return <>
                        <DropDownItem key={index} text={item.text} />
                        {index !== (data.length - 1) && <Divider />}
                    </>
                })}
            </ul>
        </div>
    );
};

export default DropDownList;