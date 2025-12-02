import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <img src="/images/living-area.jpg" alt="Building Interior" className="hero-bg-image" />
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Sree Kanaka Maha Lakshmi Nilayam</h1>
        <p className="hero-subtitle">Premium 2BHK Residential Apartments in Sriram Nagar, Eluru - Where Quality Meets Comfort</p>
        <div className="hero-features">
          <div className="hero-feature">
            <span className="feature-icon">⭐</span>
            <span>5.0 Rating</span>
          </div>
          <div className="hero-feature">
            <span className="feature-icon">🏠</span>
            <span>2BHK Apartments</span>
          </div>
          <div className="hero-feature">
            <span className="feature-icon">🌩️</span>
            <span>Excellent Ventilation</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
          </button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
