import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import OffersItem from "../OffersItem/OffersItem";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OffersSwiper.css";
import "./OffersSwiper.css";
import { useMediaQuery } from "../../../../../hooks/useMediaQuery";

const OffersSwiper = () => {
  const [items, setItems] = useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:977px)");

  useEffect(() => {
      if (isMobile) {
      setItems(2);
    } else if (isTablet) {
      setItems(3);
    } else if (isDesktop) {
      setItems(4);
    }
  }, [isMobile, isTablet, isDesktop]);

  const swiperCategories = [
    {
      text: "مراقبت پوست",
    },
    {
      text: "آرایشی",
    },
    {
      text: "مراقبت مو",
    },
    {
      text: "عطر",
    },
  ];

  const swiperSkinCare = [
    {
      src: "/assets/images/mainImages/dayOffers/comeon-cream-foot.jpg",
      text: "شوینده صورت کامان",
      small: "مناسب پوست خشک",
      price: "۳۵۰۰۰",
    },
    {
      src: "/assets/images/mainImages/dayOffers/comoen-sensetive-water-bomb.jpg",
      text: "شوینده صورت کامان",
      small: "مناسب پوست خشک",
      price: "۳۵۰۰۰",
    },
    {
      src: "/assets/images/mainImages/dayOffers/comoen-water-bomb-.jpg",
      text: "شوینده صورت کامان",
      small: "مناسب پوست خشک",
      price: "۳۵۰۰۰",
    },
    {
      src: "/assets/images/mainImages/dayOffers/comeon-cream-foot.jpg",
      text: "شوینده صورت کامان",
      small: "مناسب پوست خشک",
      price: "۳۵۰۰۰",
    },
    {
      src: "/assets/images/mainImages/dayOffers/comoen-sensetive-water-bomb.jpg",
      text: "شوینده صورت کامان",
      small: "مناسب پوست خشک",
      price: "۳۵۰۰۰",
    },
  ];

  const swiperBeuty = [
    {
      src: "/assets/images/mainImages/dayOffers/comeon-cream-foot.jpg",
      text: "کرم ضد ترک پا کامان",
      small: "مناسب پوست خشک",
      price: "۳۵۰۰۰",
    },
  ];

  const [data, setData] = useState(swiperSkinCare);

  const handleClick = (index) => {
    switch (index + 1) {
      case 1:
        setData(swiperSkinCare);
        break;
      case 2:
        setData(swiperBeuty);
        break;
      default:
        setData(swiperSkinCare);
        break;
    }
  };

  return (
    <>
      <div className={"offerscategory"}>
        {swiperCategories.map((item, index) => {
          return (
            <p
              className=" mx-md-5 mx-2"
              key={index}
              onClick={() => handleClick(index)}
            >
              {item.text}
            </p>
          );
        })}
      </div>
      <div className="swiperContinerOffers">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={items}
          navigation
          pagination={{ clickable: true }}
          slidesPerGroup={2}
        >
          {/* <div>
          <i onClick={swiper.slideNext(100,Navigation)} className="bi bi-chevron-right swiper-button-next"></i>
          <i onClick={swiper.slidePrev(100,Navigation)} className="bi bi-chevron-left swiper-button-prev"></i>
        </div> */}
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <OffersItem
                  key={index}
                  src={item.src}
                  text={item.text}
                  small={item.small}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default OffersSwiper;
