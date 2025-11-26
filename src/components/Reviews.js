import React from 'react';
import './Reviews.css';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Bharath Babu',
      rating: 5,
      review: 'Perfect vastu with good ventilation',
      time: 'Recent'
    },
    {
      id: 2,
      name: 'S M',
      rating: 5,
      review: 'Excellent construction quality with thoughtful vastu design and great ventilation. The neighborhood is peaceful, clean, and family-friendly, perfect for a comfortable and secure lifestyle.',
      time: '7 months ago'
    },
    {
      id: 3,
      name: 'Sarveswararao Vasa',
      rating: 5,
      review: 'Perfect vastu with good ventilation. Very decent area',
      time: '2 years ago'
    },
    {
      id: 4,
      name: 'Siddardha sam',
      rating: 5,
      review: 'Quality construction and good place.',
      time: 'A year ago'
    },
    {
      id: 5,
      name: 'Sameer Khan',
      rating: 5,
      review: 'Decent and peaceful neighbourhood',
      time: 'A year ago'
    },
    {
      id: 6,
      name: 'Leela Sai Satish Vadlapatla',
      rating: 5,
      review: 'Pleasant and safe neighborhood',
      time: 'A year ago'
    },
    {
      id: 7,
      name: 'Jagadish Koneru',
      rating: 5,
      review: 'Very strong construction',
      time: '2 years ago'
    },
    {
      id: 8,
      name: 'VenkataNaresh Chilukurthi',
      rating: 5,
      review: 'Neat and clean',
      time: '2 years ago'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Residents Say</h2>
        <p className="section-subtitle">
          Rated 5.0 ⭐ based on 8 Google reviews
        </p>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="reviewer-name">{review.name}</h4>
                    <p className="review-time">{review.time}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="reviews-summary">
          <div className="summary-card">
            <div className="summary-number">5.0</div>
            <div className="summary-stars">⭐⭐⭐⭐⭐</div>
            <div className="summary-text">Perfect Rating</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">8</div>
            <div className="summary-icon">💬</div>
            <div className="summary-text">Total Reviews</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">100%</div>
            <div className="summary-icon">👍</div>
            <div className="summary-text">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
