import React from 'react';
import "./SliderImage.css";

const SliderImage = ({src , caption , alt , id , addClass}) => {

    return (
        <>
            <div className={addClass + ' d-none sliderImage w-100'}>
                <img src={src} className={addClass + ' d-none w-100 img-fluid align-items-stretch'} alt={alt} />
            </div>
        </>
    );
};

export default SliderImage;