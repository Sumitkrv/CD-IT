# 🚀 Quick Start Guide - CD IT Solutions Website

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Open Terminal in Project Directory

Navigate to the project folder:
```bash
cd "/Users/Sumit/Desktop/IT bhai"
```

### 2. Install Dependencies

Run the following command to install all required packages:
```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- React Router (navigation)
- Lucide React (icons)

### 3. Start Development Server

Launch the development server:
```bash
npm run dev
```

The website will open at: **http://localhost:3000**

### 4. Build for Production

When ready to deploy:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization Guide

### Changing Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  light: {
    accent: '#YOUR_COLOR', // Change primary color
  },
  dark: {
    accent: '#YOUR_COLOR', // Change dark mode color
  }
}
```

### Modifying Content

**Homepage:** Edit `/src/pages/Home.jsx` and components in `/src/components/home/`

**About Page:** Edit `/src/pages/About.jsx`

**Services:** Edit `/src/pages/Services.jsx`

**Contact Info:** Edit `/src/components/Footer.jsx` and `/src/pages/Contact.jsx`

### Adding New Pages

1. Create page component in `/src/pages/`
2. Add route in `/src/App.jsx`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `/src/components/Navbar.jsx`

## 🌗 Theme System

The website includes a dark/light mode toggle that:
- Respects system preferences by default
- Saves user preference in localStorage
- Provides smooth transitions between modes

Toggle is located in the navigation bar (top right).

## 🌀 Parallax Animations

Parallax effects are built using Framer Motion. To modify:

**Existing parallax elements:**
- Adjust in respective component files
- Use `useParallax` hook for custom parallax

**Creating new parallax:**
```javascript
import { useParallax } from '../hooks/useParallax';

const { ref, y } = useParallax(0.5); // 0.5 = speed multiplier

<motion.div ref={ref} style={{ y }}>
  Your content
</motion.div>
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## ♿ Accessibility Features

- Reduced motion support for users who prefer minimal animations
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast in both light and dark modes

## 🎯 Performance Optimization

The website includes:
- Code splitting with React Router
- Optimized animations using GPU transforms
- Lazy loading ready (add as needed)
- Efficient re-renders with React best practices

## 📦 Project Structure

```
IT bhai/
├── src/
│   ├── components/       # Reusable components
│   │   ├── home/        # Home page sections
│   │   ├── Layout.jsx   # Main layout wrapper
│   │   ├── Navbar.jsx   # Navigation
│   │   ├── Footer.jsx   # Footer
│   │   └── ThemeToggle.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Insights.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── hooks/           # Custom hooks
│   │   ├── useParallax.js
│   │   └── useReducedMotion.js
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## 🔧 Troubleshooting

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use?
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001  // Change to any available port
}
```

### Dark mode not working?
Clear browser localStorage and refresh.

### Animations not smooth?
Check if hardware acceleration is enabled in your browser.

## 📞 Support

For questions or issues:
- Check the README.md
- Review component comments
- Contact: contact@cdsolutions.com

## 🎉 Next Steps

1. **Customize Content** - Update text, images, and contact information
2. **Adjust Colors** - Match your brand colors in Tailwind config
3. **Add Features** - Extend functionality as needed
4. **Deploy** - Host on Vercel, Netlify, or your preferred platform

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server for SPA routing

---

**Enjoy building with CD Solutions!** 🎨✨
