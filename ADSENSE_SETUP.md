# Google AdSense Setup Guide

## Current Ad Slots

The website has **4 strategic ad placement slots**:

1. **Ad Slot 1** (After Hero) - Horizontal Banner (728x90)
2. **Ad Slot 2** (After Features) - Responsive Auto (970x250)
3. **Ad Slot 3** (After Gallery) - Horizontal Banner (728x90)
4. **Ad Slot 4** (After Reviews) - Responsive Auto (970x250)

## How to Add Google AdSense

### Step 1: Get Your AdSense Code

1. Sign up for Google AdSense at https://www.google.com/adsense
2. Add your website and get approval
3. Create ad units for each slot

### Step 2: Add AdSense Script to HTML

Edit `public/index.html` and add this in the `<head>` section:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX"
     crossorigin="anonymous"></script>
```

Replace `XXXXXXXXX` with your AdSense publisher ID.

### Step 3: Replace Ad Placeholders

Edit `src/components/AdSlot.js` and replace the placeholder div with actual AdSense code:

**Before:**
```jsx
<div className="ad-placeholder">
  <p>Ad Space</p>
  <span>{format === 'horizontal' ? '728x90' : 'Responsive'}</span>
</div>
```

**After:**
```jsx
<ins className="adsbygoogle"
     style={{display: 'block'}}
     data-ad-client="ca-pub-XXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format={format === 'horizontal' ? 'horizontal' : 'auto'}
     data-full-width-responsive={format === 'auto' ? 'true' : 'false'}></ins>
```

### Step 4: Initialize Ads

Add this useEffect in `AdSlot.js`:

```jsx
import React, { useEffect } from 'react';

function AdSlot({ slotId, format = 'auto' }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    // ... rest of component
  );
}
```

### Step 5: Test Your Ads

1. Run `npm run build` to create production build
2. Deploy to Vercel or your hosting
3. Wait 24-48 hours for ads to appear (AdSense review period)

## Best Practices

✅ **Do:**
- Keep ad density reasonable (currently 4 ads is good)
- Use responsive ad formats for mobile
- Place ads between natural content breaks
- Wait for full approval before going live

❌ **Don't:**
- Click your own ads (risks account ban)
- Place too many ads (current 4 is optimal)
- Hide or modify ad appearance
- Place ads in pop-ups or overlays

## Revenue Optimization Tips

1. **Use Auto Ads**: Let Google automatically place ads
2. **Enable Anchor Ads**: Mobile-optimized bottom sticky ads
3. **Match Content**: Use in-feed ads in gallery/reviews
4. **A/B Test**: Try different ad placements after approval

## Ad Slot Recommendations by Format

- **Horizontal (728x90)**: Desktop banners, good for above-the-fold
- **Auto/Responsive**: Best for mixed traffic, adapts to screen size
- **Vertical (300x250/300x600)**: Sidebar ads (not currently used)

## Expected Revenue

Revenue depends on:
- Traffic volume (visitors per month)
- Geographic location of visitors
- Niche (real estate typically: $1-5 RPM)
- Click-through rate (CTR)

**Example:** 10,000 monthly visitors × $2 RPM = $20/month

## Support

- AdSense Help: https://support.google.com/adsense
- Policy Center: https://support.google.com/adsense/answer/48182
