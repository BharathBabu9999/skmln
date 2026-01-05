import React, { useEffect, useRef } from 'react';
import './AdSlot.css';

function AdSlot({ slotId, slot, format = 'auto' }) {
  const adRef = useRef(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    // Only push ad if it hasn't been pushed yet and slot ID is provided
    if (!isAdPushed.current && adRef.current && slot) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdPushed.current = true;
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [slot]);

  return (
    <div className="ad-container">
      <div className="ad-label">Advertisement</div>
      <div 
        className={`ad-slot ad-slot-${format}`}
        id={slotId}
        ref={adRef}
      >
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-4590203248992711"
             {...(slot && { 'data-ad-slot': slot })}
             data-ad-format={format === 'horizontal' ? 'horizontal' : 'auto'}
             data-full-width-responsive={format === 'auto' ? 'true' : 'false'}></ins>
      </div>
    </div>
  );
}

export default AdSlot;
