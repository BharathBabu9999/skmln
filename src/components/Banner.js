import React from 'react';
import { trackFeature } from '../lib/analytics';
import './Banner.css';

function Banner() {
  const handlePhoneClick = (phone) => {
    trackFeature('Banner', `Called ${phone}`);
  };
  return (
    <div className="sticky-banner">
      <div className="banner-content">
        <span className="banner-text">
          <span className="banner-icon">🏠</span>
          <strong>Book Your Visit Today!</strong>{' '}
          <span className="contact-numbers">
            <a href="tel:9246789369" onClick={() => handlePhoneClick('9246789369')}><span className="phone-icon">📞</span> 9246789369</a>
            <a href="tel:9948999394" onClick={() => handlePhoneClick('9948999394')}><span className="phone-icon">📞</span> 9948999394</a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Banner;
