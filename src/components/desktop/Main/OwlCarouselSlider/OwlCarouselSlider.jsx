import React, { useState } from 'react';
import "./OwlCarouselSlider.css";
import SliderImage from './SliderImage/SliderImage';

const jsonSlider = [
    {
        id: '',
        src: '/assets/images/mainImages/slider/1.jpg',
        caption: '',
        alt: 'slider-image'
    },
    {
        id: '2',
        src: '/assets/images/mainImages/slider/2.jpg',
        caption: '',
        alt: 'slider-image'
    },
    {
        id: '3',
        src: '/assets/images/mainImages/slider/3.jpg',
        caption: '',
        alt: 'slider-image'
    },
    {
        id: '4',
        src: '/assets/images/mainImages/slider/4.jpg',
        caption: '',
        alt: 'slider-image'
    }
]

const OwlCarouselSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== jsonSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === jsonSlider.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(jsonSlider.length);
        }
    }

    return (
        <>
            <div className='slider w-100 align-items-stretch'>
                <div className={"sliderImages w-100"}>
                    {jsonSlider.map((item, index) => {
                        return <SliderImage src={item.src} alt={item.alt} caption={item.caption} id={item.id} key={index}
                            addClass={slideIndex === index + 1 ? " active" : ""}
                        />
                    })}
                </div>
                <div className="buttonContainer">
                    <button onClick={nextSlide} className='nextSlideButton'>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                    <button onClick={prevSlide} className='prevSlideButton'>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default OwlCarouselSlider;