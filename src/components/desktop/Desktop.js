import React from "react";
import Home from "../../layouts/Desktop/Home/Home";
import styles from "./Desktop.module.css";

function Desktop() {
    return ( <
        div className = { styles.desktop }
        style = {
            { direction: "rtl" } } >
        <
        Home / >
        <
        /div>
    );
}

export default Desktop;