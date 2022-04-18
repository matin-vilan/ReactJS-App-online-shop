import React, { useEffect } from "react";
import Home from "../../layouts/Desktop/Home/Home";
import styles from "./Desktop.module.css";
import { useMenu } from '../../hooks/useMenu';

function Desktop() {
  return (
    <div className={styles.desktop} style={{ direction: "rtl" }}>
      <Home />
    </div>
  );
}

export default Desktop;
