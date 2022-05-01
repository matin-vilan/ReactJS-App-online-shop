import { calc } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "./OwlCarouselSlider.css";
import SliderImage from "./SliderImage/SliderImage";

const jsonSlider = [
  {
    id: "",
    src: "/assets/images/mainImages/slider/1.jpg",
    caption: "slide1",
    alt: "slider-image",
  },
  {
    id: "2",
    src: "/assets/images/mainImages/slider/2.jpg",
    caption: "slide2",
    alt: "slider-image",
  },
  {
    id: "3",
    src: "/assets/images/mainImages/slider/3.jpg",
    caption: "slide3",
    alt: "slider-image",
  },
  {
    id: "4",
    src: "/assets/images/mainImages/slider/4.jpg",
    caption: "slide4",
    alt: "slider-image",
  },
  {
    id: "5",
    src: "/assets/images/mainImages/slider/2.jpg",
    caption: "slide5",
    alt: "slider-image",
  },
];

const delay = 2500;

const OwlCarouselSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // --------------------------------------
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === jsonSlider.length -1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [slideIndex]);
  // ---------------------------------------

  const nextSlide = () => {
    if (slideIndex !== jsonSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === jsonSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(jsonSlider.length);
    }
  };

  return (
    <>
      <div className="slider w-100 align-items-stretch">
        <div className={"sliderImages w-100"}>
          {jsonSlider.map((item, index) => {
            return (
              <SliderImage
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                id={item.id}
                key={index}
                addClass={slideIndex === index ? " active" : ""}
              />
            );
          })}
        </div>
        <div className="buttonContainer" style={{ direction: "rtl" }}>
          <button onClick={prevSlide} className="nextSlideButton">
            <i className="bi bi-chevron-right"></i>
          </button>
          <button onClick={nextSlide} className="prevSlideButton">
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="slideShowDots">
          {jsonSlider.map((item, idx) => {
            return (
              <span
                key={idx}
                className={`slideShowDot${slideIndex === idx ? "Active" : ""}`}
                onClick={() => setSlideIndex(idx )}
              >{item.caption}</span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OwlCarouselSlider;
