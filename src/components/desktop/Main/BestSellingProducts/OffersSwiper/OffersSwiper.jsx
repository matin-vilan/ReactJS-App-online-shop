import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OffersSwiper.css";
import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import OffersItem from '../../Offers/OffersItem/OffersItem';

const OffersSwiper = () => {
  const [items, setItems] = useState(null);
  const isMini = useMediaQuery("(max-width:576px)");
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:976.9px)");
  const isDesktop = useMediaQuery("(min-width:977px)");

  useEffect(() => {
    if (isMini) {
      setItems(2);
    }else if (isMobile) {
      setItems(3);
    } else if (isTablet) {
      setItems(4);
    } else if (isDesktop) {
      setItems(6);
    } 
  }, [isMobile, isTablet, isDesktop, isMini]);

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
      <div className="swiperContinerOffers position-relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={isTablet ? 20 : 10}
          slidesPerView={items}
          navigation
          pagination={{ clickable: true }}
          slidesPerGroup={2}
        >
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
