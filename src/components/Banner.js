import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="sticky-banner">
      <div className="banner-content">
        <span className="banner-text">
          <span className="banner-icon">🏠</span>
          <strong>Book Your Visit Today!</strong>{' '}
          <span className="contact-numbers">
            <a href="tel:9246789369"><span className="phone-icon">📞</span> 9246789369</a>
            <a href="tel:9948999394"><span className="phone-icon">📞</span> 9948999394</a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Banner;
