import React, { useState } from "react";
import styles from "./Tabs.module.css";
import Tabscontent from "./TabsContent/TabsContent";

function Tabs() {
  const categoryTab = [
    {
      text: "آرایشی و گریم",
    },
    {
      text: "مو",
    },
    {
      text: "پوست",
    },
    {
      text: "بدن",
    },
    {
      text: "عطر",
    },
    {
      text: "بهداشت شخصی",
    },
  ];

  const menuTab = [
    {
      text: "صفحه نخست",
    },
    {
      text: "فروشگاه",
    },
    {
      text: "علاقه مندی",
    },
    {
      text: "مقایسه",
    },
    {
      text: "ورود / ثبت نام",
    },
  ];

  const [show, setShow] = useState(true);

  const handleClick1 = () => {
    setShow(true);
  };

  const handleClick2 = () => {
    setShow(false);
  };

  return (
    <div className={styles.tabContainer + " row m-0 p-0"}>

      <div className={styles.tabsClick+" row m-0 p-0 col-12"}>
        <div className={styles.tabName + " btn col-6"} onClick={handleClick1}>
          <p>منو</p>
        </div>
        <div className={styles.tabName + " btn col-6"} onClick={handleClick2}>
          <p>دسته بندی ها</p>
        </div>
      </div>
      
      <div className={styles.tabsContent+" col-12"}>
        {show ? (
          <Tabscontent list={menuTab} />
        ) : (
          <Tabscontent list={categoryTab} />
        )}
      </div>

    </div>
  );
}

export default Tabs;
