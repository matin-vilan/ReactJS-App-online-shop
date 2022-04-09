import React from 'react';
import styles from "./SeeAllButton.module.css"

function SeeAllButton() {
    return (
        <div className={styles.seeAllButton+' btn d-flex justify-content-around align-items-center'}>
            <p>مشاهده ی همه</p>
            <i className="bi bi-chevron-left d-flex"></i>
        </div>
    )
}

export default SeeAllButton
