import React from 'react';
import styles from './TopMainSquareImage.module.css'

const TopMainSquareImage = ({src , alt}) => {
    return (
        <div className={styles.topMainSquareImage}>
            <img src={src} alt={alt} className="img-fluid" />
        </div>
    );
};

export default TopMainSquareImage;