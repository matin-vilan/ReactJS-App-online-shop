import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Swipper.css";
import "swiper/css";
import "swiper/css/navigation";
import BeautyMagazineItem from "../BeautyMagazineItem/BeautyMagazineItem";
import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useSelector } from "react-redux";
import * as shamsi from 'shamsi-date-converter';


const Swipper = () => {
  const isMobile = useMediaQuery("(max-width:577px)");
  const isTablet = useMediaQuery("(max-width:767.99px)");
  const isDesktop = useMediaQuery("(max-width:992px)");
  const isUltraDesktop = useMediaQuery("(min-width:992.1px)");

  const [slides, setSlides] = useState(0);

  const posts = useSelector((state) => state?.posts);
  console.log(shamsi.gregorianToJalali(1989, 1, 24).join('/'));

  useEffect(() => {
    if (isMobile) {
      setSlides(2);
    } else if (isTablet) {
      setSlides(2);
    } else if (isDesktop) {
      setSlides(3);
    } else if (isUltraDesktop) {
      setSlides(4);
    }
  }, [isMobile, isTablet, isDesktop, isUltraDesktop]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={slides}
      // loop={true}
      navigation
      cssMode={true}
    >
      {posts?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <BeautyMagazineItem
              key={index + 1}
              src={"/assets/images/mainImages/beautyMagazine/1.jpg"}
              text={item?.excerpt?.rendered}
              date={shamsi.gregorianToJalali(item.date).join("/")}
              badge={"item.badge"}
              title={item?.title?.rendered}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Swipper;
