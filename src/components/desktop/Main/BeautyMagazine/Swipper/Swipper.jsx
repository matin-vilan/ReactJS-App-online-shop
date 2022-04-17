import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Swipper.css";
import "swiper/css";
import "swiper/css/navigation";
import BeautyMagazineItem from "../BeautyMagazineItem/BeautyMagazineItem";
import { useMediaQuery } from "../../../../../hooks/useMediaQuery";

const beutyItemsJson = [
  {
    src: "/assets/images/mainImages/beautyMagazine/1.jpg",
    date: "۰۸ بهمن",
    badge: "سبک زندگی",
    title: "انواع کادو برای روز دختر",
    text: "نمی‌توانید پیدا کنید که از هدیه گرفتن خوشحال نشود! هدیه گرفتن در هر مناسبتی، چه تولد باشد و",
  },
  {
    src: "/assets/images/mainImages/beautyMagazine/2.jpg",
    date: "۰۹ بهمن",
    badge: "سبک زندگی",
    title: "راهنمای خرید کادو شب یلدا",
    text: "نمی‌توانید پیدا کنید که از هدیه گرفتن خوشحال نشود! هدیه گرفتن در هر مناسبتی، چه تولد باشد و",
  },
  {
    src: "/assets/images/mainImages/beautyMagazine/3.jpg",
    date: "۱۰ بهمن",
    badge: "مراقبت و سلامتی",
    title: "راهنمای خرید بهترین کادو برای دختر",
    text: "نمی‌توانید پیدا کنید که از هدیه گرفتن خوشحال نشود! هدیه گرفتن در هر مناسبتی، چه تولد باشد و",
  },
  {
    src: "/assets/images/mainImages/beautyMagazine/4.png",
    date: "۱۱ بهمن",
    badge: "محصولات بهداشتی",
    title: "تاثیرات هورمونی بر روی پوست انسان",
    text: "نمی‌توانید پیدا کنید که از هدیه گرفتن خوشحال نشود! هدیه گرفتن در هر مناسبتی، چه تولد باشد و",
  },
  {
    src: "/assets/images/mainImages/beautyMagazine/1.jpg",
    date: "۱۲ بهمن",
    badge: "مراقبت و زیبایی",
    title: "راهنمای خرید بهترین کادو برای دختر",
    text: "نمی‌توانید پیدا کنید که از هدیه گرفتن خوشحال نشود! هدیه گرفتن در هر مناسبتی، چه تولد باشد و",
  },
  {
    src: "/assets/images/mainImages/beautyMagazine/2.jpg",
    date: "۱۳ بهمن",
    badge: "آرایشی و بهداشتی",
    title: "تاثیر انواع ژل بر روی موی سر",
    text: "نمی‌توانید پیدا کنید که از هدیه گرفتن خوشحال نشود! هدیه گرفتن در هر مناسبتی، چه تولد باشد و",
  },
];

const Swipper = () => {
  const isMobile = useMediaQuery("(max-width:577px)");
  const isTablet = useMediaQuery("(max-width:767.99px)");
  const isDesktop = useMediaQuery("(max-width:992px)");
  const isUltraDesktop = useMediaQuery("(min-width:992.1px)");

  const [slides, setSlides] = useState(0);

  useEffect(() => {
    if (isMobile) {
      setSlides(2);
    } else if (isTablet) {
      setSlides(2);
    } else if (isDesktop) {
      setSlides(3);
    } else if(isUltraDesktop){
      setSlides(4);
    }
  }, [isMobile, isTablet, isDesktop,isUltraDesktop]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={slides}
      loop={true}
      navigation
      cssMode={true}
    >
      {beutyItemsJson.map((item, index) => {
        return (
          <SwiperSlide>
            <BeautyMagazineItem
              src={item.src}
              text={item.text}
              date={item.date}
              badge={item.badge}
              title={item.title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Swipper;
