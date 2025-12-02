# 🏠 Sree Kanaka Maha Lakshmi Nilayam

A modern, responsive React website for Sree Kanaka Maha Lakshmi Nilayam residential building in Eluru, Andhra Pradesh. Features integrated analytics tracking, email notifications, and an admin dashboard.

![Property Rating](https://img.shields.io/badge/Rating-5.0%20⭐-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Analytics-3ECF8E?logo=supabase)

## 🌟 Features

### Frontend
- 🏠 **Hero Section** - Eye-catching landing page with building interior background
- ✨ **Features Section** - Showcasing key amenities and benefits
- 🖼️ **Interactive Gallery** - Beautiful image gallery with lightbox modal and click tracking
- ⭐ **Reviews Section** - Display of authentic Google reviews (5.0 rating)
- 📞 **Contact Form** - EmailJS integration for instant email notifications
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Minimal Design** - Clean, professional aesthetic with subtle colors
- 📊 **Live Visitor Stats** - Footer displays real-time visitor count and page views

### Analytics & Tracking (Supabase)
- 👥 **Visitor Tracking** - Unique visitor identification and counting
- 🌍 **Location Intelligence** - Country, city, region, timezone, and IP tracking
- 📱 **Device Detection** - Mobile vs desktop tracking
- 👁️ **Page View Analytics** - Track all page visits with metadata
- 📧 **Inquiry Conversion** - Form submission tracking with customer details
- 🖱️ **Feature Interactions** - Track gallery views and phone clicks
- 🗣️ **Language Preferences** - Automatic browser language detection

### Admin Dashboard (`/admin`)
- 📊 **Real-time Stats** - Total visitors, page views, inquiries, conversion rate
- 🔥 **Top Pages** - Most viewed pages with percentage bars
- ⭐ **Popular Features** - Most clicked features and interactions
- 🌍 **Visitor Locations** - Geographic breakdown by country, city, and device
- 📝 **Recent Inquiries** - Latest form submissions with contact details
- 🔄 **Auto-refresh** - Updates every 30 seconds + manual refresh button

### Email Integration (EmailJS)
- ✉️ **Instant Notifications** - Contact form submissions sent via email
- ✅ **Required Fields** - Name, Phone (10 digits), Message (min 10 chars)
- 🔒 **Environment Variables** - Secure credential management

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account (free tier works)
- EmailJS account (free tier works)

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd /Users/bbg/code/projects/skmln
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Set up Supabase database:**
   
   Run the SQL schema (see Database Setup section below)

5. **Start the development server:**
   ```bash
   npm start
   ```

6. **Open your browser:**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Admin Dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

## 🗄️ Database Setup

Run this SQL in your Supabase SQL Editor to create the required tables:

```sql
-- Create visitors table
CREATE TABLE IF NOT EXISTS visitors (
  id BIGSERIAL PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  referrer TEXT,
  country TEXT,
  city TEXT,
  region TEXT,
  timezone TEXT,
  ip_address TEXT,
  device_type TEXT,
  language TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create page_views table
CREATE TABLE IF NOT EXISTS page_views (
  id BIGSERIAL PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  page_name TEXT NOT NULL,
  page_path TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  device_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id BIGSERIAL PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create feature_interactions table
CREATE TABLE IF NOT EXISTS feature_interactions (
  id BIGSERIAL PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  feature_name TEXT NOT NULL,
  action_detail TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_visitors_visitor_id ON visitors(visitor_id);
CREATE INDEX IF NOT EXISTS idx_visitors_country ON visitors(country);
CREATE INDEX IF NOT EXISTS idx_visitors_city ON visitors(city);
CREATE INDEX IF NOT EXISTS idx_visitors_device_type ON visitors(device_type);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor_id ON page_views(visitor_id);
CREATE INDEX IF NOT EXISTS idx_page_views_page_name ON page_views(page_name);
CREATE INDEX IF NOT EXISTS idx_inquiries_visitor_id ON inquiries(visitor_id);
CREATE INDEX IF NOT EXISTS idx_feature_interactions_visitor_id ON feature_interactions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_feature_interactions_feature_name ON feature_interactions(feature_name);
```

## 📁 Project Structure

```
skmln/
├── public/
│   ├── images/          # Property images (compressed)
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── Banner.js    # Sticky contact banner
│   │   ├── Header.js    # Navigation header
│   │   ├── Hero.js      # Landing section
│   │   ├── About.js     # About section
│   │   ├── Features.js  # Features grid
│   │   ├── Gallery.js   # Image gallery with tracking
│   │   ├── Reviews.js   # Google reviews
│   │   ├── Contact.js   # Contact form with EmailJS
│   │   ├── Footer.js    # Footer with live stats
│   │   ├── Dashboard.js # Admin analytics dashboard
│   │   └── AdSlot.js    # AdSense placeholders
│   ├── lib/
│   │   ├── supabase.js  # Supabase client
│   │   └── analytics.js # Analytics tracking functions
│   ├── App.js           # Main app with routing
│   ├── App.css          # Global styles
│   └── index.js         # Entry point
├── .env                 # Environment variables (gitignored)
├── .env.example         # Example env template
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
├── EMAILJS_SETUP.md     # EmailJS configuration guide
└── README.md            # This file
```
│   ├── index.html
│   └── images/              # Property images
│       ├── compress-images.sh
│       ├── rename-images.sh
│       └── *.jpg
├── src/
│   ├── components/
│   │   ├── Header.js/css    # Navigation bar
│   │   ├── Hero.js/css      # Landing section
│   │   ├── Features.js/css  # Amenities showcase
│   │   ├── Gallery.js/css   # Image gallery
│   │   ├── Reviews.js/css   # Customer reviews
│   │   ├── Contact.js/css   # Contact form
│   │   └── Footer.js/css    # Footer section
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🖼️ Managing Images

### Adding Images

Place your images in `/public/images/` folder. The gallery expects these files:

- `building-exterior-1.jpg` - Building exterior (yellow/cream view)
- `building-exterior-2.jpg` - Building exterior (white front)
- `building-entrance.jpg` - Entrance with landscaping
- `living-room-1.jpg` - Living room with decorations
- `dining-hall.jpg` - Dining area
- `bedroom-2.jpg` - Bedroom with green walls
- `bedroom-3.jpg` - Master bedroom
- `living-area.jpg` - Living area (also used as hero background)
- `rooftop-1.jpg` - Rooftop terrace
- `rooftop-2.jpg` - Aerial view
- `ready-to-move-in.jpg` - Ready to move in poster
- `close-to-main-road.jpg` - Location image

### Compressing Images

Reduce image file sizes from MBs to KBs:

1. **Install ImageMagick:**
   ```bash
   brew install imagemagick
   ```

2. **Run compression script:**
   ```bash
   cd public/images
   bash compress-images.sh
   ```

Original images are backed up in `public/images/originals/` folder.

### Renaming Images

If you have images with different names:

```bash
cd public/images
bash rename-images.sh
```

## 🏢 Property Details

- **Name:** Sree Kanaka Maha Lakshmi Nilayam
- **Location:** 7th Road, Sriram Nagar, Eluru, Andhra Pradesh 534003
- **Type:** 2BHK Apartments
- **Rating:** 5.0 ⭐ (8 Google Reviews)

### Key Features
- ✅ Excellent ventilation
- ✅ East facing apartments
- ✅ Quality construction
- ✅ Peaceful, family-friendly neighborhood
- ✅ Prime location near main road

## 📞 Contact Information

- **Phone:** 
  - 9246789369
  - 9948999394
  - 9502942957
- **Address:** Sriram Nagar Seventh Rd, Eluru, Sanivarapupeta, Andhra Pradesh 534003

## 🛠️ Technologies Used

- **Frontend:** React 18.2.0, React Router DOM
- **Styling:** Custom CSS with responsive design
- **Analytics:** Supabase (PostgreSQL)
- **Email:** EmailJS
- **Geolocation:** ipapi.co API (free tier)
- **Hosting:** Ready for Vercel/Netlify deployment

## 📊 Analytics Features

### Tracked Metrics
- Unique visitors (daily deduplication)
- Page views with full metadata
- Geographic location (country, city, region)
- Device types (mobile/desktop)
- User language preferences
- Feature interactions (gallery, phone clicks)
- Form submissions with customer data
- Conversion rates

### Privacy
- No cookies used
- Session-based tracking (clears on browser close)
- IP addresses stored for location only
- GDPR-friendly anonymous tracking
- No third-party tracking scripts

## 📧 EmailJS Setup

See `EMAILJS_SETUP.md` for detailed configuration instructions.

Quick setup:
1. Create EmailJS account
2. Set up email service (Gmail, etc.)
3. Create email template
4. Copy credentials to `.env` file

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

- Main site: http://localhost:3000
- Admin dashboard: http://localhost:3000/admin

### `npm run build`
Builds the app for production to the `build` folder. Optimized and minified.

### `npm test`
Launches the test runner in interactive watch mode.

## 🎨 Color Scheme

The website uses a minimal color palette:

- **Background:** White (#ffffff) and Light Gray (#f9fafb)
- **Text:** Dark Gray (#1f2937) and Medium Gray (#6b7280)
- **Accent:** Blue (#2563eb)
- **Shadows:** Subtle with low opacity

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard.

### Deploy Options

- **Netlify:** Drag and drop the `build` folder or connect GitHub repo
- **Vercel:** Connect GitHub repo or use Vercel CLI
- **GitHub Pages:** Use `gh-pages` package
- **Traditional Hosting:** Upload `build/` folder contents

**Important:** Don't forget to add environment variables in your deployment platform!

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |
| `REACT_APP_SUPABASE_URL` | Supabase project URL | Yes |
| `REACT_APP_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |

## 🔒 Security

- Environment variables gitignored
- Supabase Row Level Security (RLS) recommended
- EmailJS credentials secured
- No sensitive data in frontend code
- Session-based tracking (no persistent cookies)

## 📝 Customization

### Update Content

- **Property Info:** Edit `src/components/Hero.js` and `src/components/Features.js`
- **Reviews:** Modify `src/components/Reviews.js`
- **Contact Details:** Update `src/components/Contact.js` and `src/components/Footer.js`

### Change Colors

All colors are defined in component CSS files. Search for color codes (e.g., `#2563eb`) and replace.

### Add More Images

1. Add images to `/public/images/`
2. Update the `images` array in `src/components/Gallery.js`

## 🐛 Troubleshooting

### Images not loading?
- Ensure images are in `/public/images/` folder
- Check file names match exactly (case-sensitive)
- Verify file extensions are `.jpg` or `.jpeg`

### Port already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
```

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

Built with ❤️ for quality residential living

---

**Repository:** https://github.com/BharathBabu9999/skmln

**Built with ❤️ for quality residential living**

For questions or support, contact: 9246789369 | 9948999394 | 9502942957
