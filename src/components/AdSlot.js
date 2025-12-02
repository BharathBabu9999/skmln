import React, { useEffect } from 'react';
import './AdSlot.css';

function AdSlot({ slotId, format = 'auto' }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="ad-container">
      <div className="ad-label">Advertisement</div>
      <div 
        className={`ad-slot ad-slot-${format}`}
        id={slotId}
      >
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-4590203248992711"
             data-ad-format={format === 'horizontal' ? 'horizontal' : 'auto'}
             data-full-width-responsive={format === 'auto' ? 'true' : 'false'}></ins>
      </div>
    </div>
  );
}

export default AdSlot;
