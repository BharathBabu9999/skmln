import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Increment and get visitor count using CountAPI
    const fetchCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/skmln.vercel.app/visits');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setError(true);
        // Fallback: show a default message instead of loading forever
        setCount(0);
      }
    };

    fetchCount();
  }, []);

  if (error && count === 0) {
    return null; // Hide counter if there's an error
  }

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
