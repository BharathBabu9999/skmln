# 🏠 Sree Kanaka Maha Lakshmi Nilayam

A modern, responsive React website for Sree Kanaka Maha Lakshmi Nilayam residential building in Eluru, Andhra Pradesh.

![Property Rating](https://img.shields.io/badge/Rating-5.0%20⭐-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)

## 🌟 Features

- 🏠 **Hero Section** - Eye-catching landing page with building interior background
- ✨ **Features Section** - Showcasing key amenities and benefits
- 🖼️ **Interactive Gallery** - Beautiful image gallery with lightbox modal
- ⭐ **Reviews Section** - Display of authentic Google reviews (5.0 rating)
- 📞 **Contact Form** - Easy way for potential residents to get in touch
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Minimal Design** - Clean, professional aesthetic with subtle colors

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd /Users/bbg/code/projects/skmln
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
skmln/
├── public/
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

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

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

### Deploy Options

- **Netlify:** Drag and drop the `build` folder
- **Vercel:** Connect GitHub repo or use Vercel CLI
- **GitHub Pages:** Use `gh-pages` package
- **Traditional Hosting:** Upload `build/` folder contents

### Example: Deploy to Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to deploy
4. Done! Your site is live

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

This project is created for Sree Kanaka Maha Lakshmi Nilayam residential property.

## 🙏 Acknowledgments

- Built with React 18
- Uses Google Fonts (Poppins)
- Icons: Emoji-based for lightweight performance
- Image compression: ImageMagick

---

**Built with ❤️ for quality residential living**

For questions or support, contact: 9246789369 | 9948999394 | 9502942957
