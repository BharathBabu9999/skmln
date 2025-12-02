import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '🏗️',
      title: 'Superior Construction Quality',
      description: 'Constructed with premium grade materials including high-quality cement, steel reinforcement, and modern construction techniques ensuring structural stability and longevity for generations'
    },
    {
      icon: '🌩️',
      title: 'Optimal Ventilation & Natural Light',
      description: 'Strategically designed east-facing apartments with cross-ventilation systems, large windows, and balconies that ensure abundant natural sunlight throughout the day and fresh air circulation'
    },
    {
      icon: '🏡',
      title: 'Family-Friendly Peaceful Environment',
      description: 'Nestled in the serene Sriram Nagar locality known for its clean surroundings, well-maintained roads, friendly neighbors, and safe community atmosphere perfect for families with children'
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure Living',
      description: 'Well-established residential area with organized community living, reliable security measures, proper street lighting, and a strong sense of neighborhood watch for your family\'s peace of mind'
    },
    {
      icon: '✨',
      title: 'Well-Maintained Modern Amenities',
      description: 'Clean and regularly maintained common areas, reliable water supply with storage tanks, modern electrical fittings, quality plumbing fixtures, and spacious well-designed interiors'
    },
    {
      icon: '🏛️',
      title: 'Strategic Prime Location',
      description: 'Conveniently located on 7th Road, Sriram Nagar with excellent connectivity to schools, hospitals, markets, banks, entertainment centers, and major transportation routes throughout Eluru city'
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Sree Kanaka Maha Lakshmi Nilayam</h2>
        <p className="section-subtitle">
          Discover the perfect blend of quality construction, modern amenities, strategic location, and peaceful living environment. 
          Our residential building offers everything your family needs for comfortable and convenient urban living in Eluru.
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
