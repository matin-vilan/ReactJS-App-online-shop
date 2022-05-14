import { Text } from "@chakra-ui/react";
import React from "react";
import styles from "./LastDiscount.module.css";

const LastDiscount = () => {
  return (
    <div className={styles.lastDiscount}>
      <div className={styles.lastDiscountContainer}>
        <div className={styles.text}>
          <Text textAlign={"center"} className="text-muted">
            همیشه اولین نفر باشید! برای اطلاع از آخرین تخفیف‌ها و جدیدترین
            کالاها در خبرنامه ثبت‌نام کنید.
          </Text>
        </div>
        <div className={styles.input + " row m-0 p-0 my-4"}>
          <div className="col-7 m-0 p-0">
            <input type="text" placeholder="آدرس ایمیل خود را وارد کنید ..." />
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
