import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Increment and get visitor count using CountAPI
    fetch('https://api.countapi.xyz/hit/skmln-residential/visits')
      .then(response => response.json())
      .then(data => {
        setCount(data.value);
      })
      .catch(error => {
        console.error('Error fetching visitor count:', error);
      });
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
