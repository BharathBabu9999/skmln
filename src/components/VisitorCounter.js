import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Track visit using our serverless function
    const trackVisit = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error tracking visit:', error);
        // Fallback to localStorage if API fails
        const localCount = parseInt(localStorage.getItem('skmln_visits') || '1');
        localStorage.setItem('skmln_visits', localCount + 1);
        setCount(localCount);
      }
    };

    trackVisit();
  }, []);

  return (
    <div className="visitor-counter">
      <span className="counter-icon">👁️</span>
      <span className="counter-text">
        {count !== null ? (
          <>
            <strong>{count.toLocaleString()}</strong> visits
          </>
        ) : (
          'Loading...'
        )}
      </span>
    </div>
  );
}

export default VisitorCounter;
