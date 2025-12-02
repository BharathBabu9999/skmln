import React, { useState } from 'react';
import { trackFeature } from '../lib/analytics';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: "Building Exterior",
      description: "Modern architecture with excellent design",
      src: "/images/building-exterior-1.jpg",
    },
    {
      id: 2,
      title: "Building Front View",
      description: "Well-maintained facade with modern styling",
      src: "/images/building-exterior-2.jpg",
    },
    {
      id: 3,
      title: "Spacious Living Room",
      description: "Well-decorated and ventilated living spaces",
      src: "/images/living-room-1.jpg",
    },
    {
      id: 4,
      title: "Dining Hall",
      description: "Dining Hall with ample ventilation",
      src: "/images/dining-hall.jpg",
    },
    {
      id: 5,
      title: "Master Bedroom",
      description: "Spacious rooms with ample ventilation",
      src: "/images/bedroom-3.jpg",
    },
    {
      id: 6,
      title: "Bright Bedroom",
      description: "Natural lighting with modern furnishings",
      src: "/images/bedroom-2.jpg",
    },
    
    {
      id: 7,
      title: "Living Area",
      description: "Open and airy living spaces",
      src: "/images/living-area.jpg",
    },
    {
      id: 8,
      title: "Building Entrance",
      description: "Welcoming entrance with landscaping",
      src: "/images/building-entrance.jpg",
    },
    {
      id: 9,
      title: "Rooftop Terrace",
      description: "Spacious terrace with city views",
      src: "/images/rooftop-1.jpg",
    },
    {
      id: 10,
      title: "Aerial View",
      description: "Overview of the property",
      src: "/images/rooftop-2.jpg",
    },
    {
      id: 11,
      title: "Ready to move In",
      description: "Ready to move In",
      src: "/images/ready-to-move-in.jpg",
    },
    {
      id: 12,
      title: "Close to Main Road",
      description: "Close to Main Road",
      src: "/images/close-to-main-road.jpg",
    },
  ];

  const openImage = (image) => {
    setSelectedImage(image);
    trackFeature('Gallery', `Viewed ${image.title}`);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Take a virtual tour of our beautiful residential apartments
        </p>

        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="gallery-placeholder" style={{ display: "none" }}>
                <span className="gallery-icon">🏠</span>
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
              <div className="gallery-overlay">
                <span className="view-icon">👁️ View</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={closeImage}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImage}>
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="modal-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="modal-image-placeholder"
                style={{ display: "none" }}
              >
                <span className="modal-icon">🏠</span>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
              <div className="modal-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
