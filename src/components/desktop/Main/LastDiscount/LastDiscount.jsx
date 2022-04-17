import React from "react";
import styles from "./LastDiscount.module.css";

const LastDiscount = () => {
  return (
    <div className={styles.lastDiscount}>
      <div className={styles.lastDiscountContainer}>
        <div className={styles.text}>
          <p className="text-muted">
            همیشه اولین نفر باشید! برای اطلاع از آخرین تخفیف‌ها و جدیدترین
            کالاها در خبرنامه ثبت‌نام کنید.
          </p>
        </div>
        <div className={styles.input + " row m-0 p-0 my-4"}>
          <div className="col-7 m-0 p-0">
            <input type="text" />
          </div>
          <div className="col-3 m-0 p-0">
            <button>عضویت</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastDiscount;
