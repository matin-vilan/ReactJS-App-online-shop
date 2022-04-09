import React from 'react';
import "./SliderImage.css";

const SliderImage = ({src , caption , alt , id , addClass}) => {

    return (
        <>
            <div className={addClass + ' d-none sliderImage w-100'}>
                <img src={src} className={addClass + ' d-none img-fluid'} alt={alt} />
            </div>
        </>
    );
};

export default SliderImage;