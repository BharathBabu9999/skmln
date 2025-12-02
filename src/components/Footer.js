import React from 'react';
import './Footer.css';
import VisitorCounter from './VisitorCounter';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sree Kanaka Maha Lakshmi Nilayam</h3>
            <p>Quality residential apartments in the heart of Eluru, offering comfortable living with modern amenities.</p>
            <div className="footer-rating">
              <span className="rating-badge">⭐ 5.0 Rating</span>
              <span>8 Google Reviews</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>Home</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }}>Features</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' }); }}>Gallery</a></li>
              <li><a href="#reviews" onClick={(e) => { e.preventDefault(); document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' }); }}>Reviews</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 7th Road, Sriram Nagar, Eluru</li>
              <li>📞 <a href="tel:9246789369">9246789369</a></li>
              <li>📞 <a href="tel:9948999394">9948999394</a></li>
              <li>📞 <a href="tel:9502942957">9502942957</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p>Sriram Nagar Seventh Rd</p>
            <p>Sriram Nagar, Eluru</p>
            <p>Sanivarapupeta</p>
            <p>Andhra Pradesh 534003</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sree Kanaka Maha Lakshmi Nilayam. All rights reserved.</p>
          <VisitorCounter />
          <p>Built with care for quality living</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
