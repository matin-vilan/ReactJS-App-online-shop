import React from 'react';
import "./SliderImage.css";

const SliderImage = ({src , caption , alt , id , addClass}) => {

    return (
        <>
            <div className={'sliderImage position-absolute'}>
                <img src={src} className={addClass + '  img-fluid'} alt={alt} />
            </div>
        </>
    );
};

export default SliderImage;