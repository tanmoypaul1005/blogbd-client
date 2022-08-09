import React from 'react';
import banner from '../../images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="body">
      <div className="showcase">
        <img
          src="https://images.unsplash.com/photo-1505410603994-c3ac6269711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Picture"
        />
          <div className="overlay">
          <h2>BlogBd</h2>
          <p>
            Put a Good description hare and make sure it matches the information you want to convey
          </p>
        </div>
      </div>
    </div>
    );
};

export default Banner;