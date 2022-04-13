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

  const tabsContentStyle = {
    opacity: "1!important",
  };

  const [show, setShow] = useState(true);
  const [active, setActive] = useState(true);

  const handleClick1 = () => {
    setShow(true);
    setActive(true);
  };

  const handleClick2 = () => {
    setShow(false);
    setActive(false);
  };

  return (
    <div className={styles.tabContainer + " row m-0 p-0"}>
      <div className={styles.tabsClick + " row m-0 p-0 col-12"}>
        <div
          className={
            active
              ? styles.tabName + " btn col-6 " + styles.active
              : styles.tabName + " btn col-6 "
          }
          onClick={handleClick1}
        >
          <p>منو</p>
        </div>
        <div
          className={
            active
              ? styles.tabName + " btn col-6 "
              : styles.tabName + " btn col-6 " + styles.active
          }
          onClick={handleClick2}
        >
          <p>دسته بندی ها</p>
        </div>
      </div>

      <div className={styles.tabsContent + " col-12"}>
        {show ? (
          <>
            <Tabscontent list={menuTab} />
          </>
        ) : (
          <Tabscontent
            list={categoryTab}
          />
        )}
      </div>
    </div>
  );
}

export default Tabs;
