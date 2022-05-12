import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Swipper.css";
import "swiper/css";
import "swiper/css/navigation";
import BeautyMagazineItem from "../BeautyMagazineItem/BeautyMagazineItem";
import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useSelector } from "react-redux";
import * as shamsi from "shamsi-date-converter";
import { useNavigate } from "react-router-dom";
import { Box, Skeleton } from "@chakra-ui/react";
import BeutyMagazineSwiperSkeleton from "../../../../global/Skeleton/BeutyMagazinSwiper/ BeutyMagazineSwiperSkeleton";

const Swipper = () => {
  const isMobile = useMediaQuery("(max-width:577px)");
  const isTablet = useMediaQuery("(max-width:767.99px)");
  const isDesktop = useMediaQuery("(max-width:992px)");
  const isUltraDesktop = useMediaQuery("(min-width:992.1px)");

  const navigate = useNavigate();

  const [slides, setSlides] = useState(0);
  const [isLoaing, setIsLoading] = useState(false);

  const posts = useSelector((state) => state?.posts);
  // posts ? setIsLoading(false) : setIsLoading(true);

  const setSlidesSwiper = () => {
    if (isMobile) {
      setSlides(2);
    } else if (isTablet) {
      setSlides(2);
    } else if (isDesktop) {
      setSlides(3);
    } else if (isUltraDesktop) {
      setSlides(4);
    }
  };

  useEffect(() => {
    setSlidesSwiper();
    posts ? setIsLoading(false) : setIsLoading(true);
  }, [posts, slides]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={slides}
      // loop={true}
      navigation
      cssMode={true}
    >
      {isLoaing && <BeutyMagazineSwiperSkeleton />}
      {posts?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Box
              onClick={() => navigate(`/post/${item.id}`)}
              style={{ cursor: "pointer" }}
              id="RouterNavLink"
              key={index}
              state={{ item }}
            >
              <BeautyMagazineItem
                id={item.id}
                src={"/assets/images/mainImages/beautyMagazine/1.jpg"}
                text={item?.excerpt?.rendered}
                date={shamsi.gregorianToJalali(item.date).join("/")}
                badge={"item.badge"}
                title={item?.title?.rendered}
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Swipper;
