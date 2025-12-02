import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Sree Kanaka Maha Lakshmi Nilayam is a premium residential building in Sriram Nagar, Eluru, Andhra Pradesh. 
              Built with superior construction materials and expert craftsmanship, we offer quality 2BHK apartments with 
              excellent east-facing ventilation. Located on 7th Road, residents enjoy easy access to schools, hospitals, 
              shopping centers, and public transport.
            </p>
            
            <p>
              With an outstanding 5.0-star rating, our building is known for its peaceful, family-oriented atmosphere, 
              strong construction standards, and well-maintained surroundings. We're committed to providing comfortable, 
              safe, and convenient living for families in the heart of Eluru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
