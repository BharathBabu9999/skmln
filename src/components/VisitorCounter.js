import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Track visit using our serverless API
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        setCount(data.count || 0);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setCount(0);
      }
    };

    fetchCount();
  }, []);

  if (count === null) {
    return null; // Hide while loading
  }

  return (
    <div className="visitor-counter">
      <span className="counter-icon">👁️</span>
      <span className="counter-text">
        {count > 0 ? (
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
