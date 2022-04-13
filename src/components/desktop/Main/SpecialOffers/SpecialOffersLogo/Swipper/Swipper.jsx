import React, {useState , useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import "./Swipper.css";
import "swiper/css";
import "swiper/css/navigation";
import MainSpecialsTimer from "../../../../../global/MainSpecialsTimer/MainSpecialsTimer";
import { useMediaQuery } from '../../../../../../hooks/useMediaQuery';

const Swipper = () => {
  const isMobile = useMediaQuery("(max-width:577px)");
  const isTablet = useMediaQuery("(max-width:767.99px)");
  const isDesktop = useMediaQuery("(min-width:768)")
  const [slides, setSlides] = useState(0);

  useEffect(()=>{
    if (isMobile) {
      setSlides(2)
    }
    else if(isTablet){
      setSlides(3)
    }
    else{
      setSlides(4)
    }
  },[isMobile,isTablet,isDesktop]) 

  return (
      
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={slides}
      loop={true}
      navigation
      cssMode={true}
    >
      <SwiperSlide>
        <MainSpecialsTimer />
      </SwiperSlide>
      <SwiperSlide>
        <MainSpecialsTimer />
      </SwiperSlide>
      <SwiperSlide>
        <MainSpecialsTimer />
      </SwiperSlide>
      <SwiperSlide>
        <MainSpecialsTimer />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
