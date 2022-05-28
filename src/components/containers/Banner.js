import React from 'react';
import banner from '../../images/banner.png';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <img className='image' src={banner} ></img>
        </div>
    );
};

export default Banner;