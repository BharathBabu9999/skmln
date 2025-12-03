import React from 'react';
import { trackFeature } from '../lib/analytics';
import { PHONE_1, PHONE_2 } from '../config/constants';
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
            <a href={`tel:${PHONE_1}`} onClick={() => handlePhoneClick(PHONE_1)}><span className="phone-icon">📞</span> {PHONE_1}</a>
            <a href={`tel:${PHONE_2}`} onClick={() => handlePhoneClick(PHONE_2)}><span className="phone-icon">📞</span> {PHONE_2}</a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Banner;
