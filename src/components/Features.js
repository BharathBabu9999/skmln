import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '🏗️',
      title: 'Quality Construction',
      description: 'Built with excellent construction quality and strong materials for long-lasting durability'
    },
    {
      icon: '🌩️',
      title: 'Perfect Ventilation',
      description: 'Well-ventilated spaces with east-facing orientation ensuring natural light and fresh air'
    },
    {
      icon: '🏡',
      title: 'Peaceful Neighborhood',
      description: 'Located in a clean, family-friendly area with decent and peaceful surroundings'
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      description: 'Secure living environment in a well-established residential area'
    },
    {
      icon: '✨',
      title: 'Neat & Clean',
      description: 'Well-maintained premises with modern amenities and clean spaces'
    },
    {
      icon: '🏛️',
      title: 'Prime Location',
      description: 'Conveniently located on 7th Road, Sriram Nagar, Eluru - Easy access to all amenities'
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Experience comfortable living with modern amenities and quality infrastructure
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
