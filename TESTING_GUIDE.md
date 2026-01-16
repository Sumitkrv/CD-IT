# ✅ Installation & Testing Guide

## 📋 Pre-Installation Checklist

Before starting, ensure you have:
- ✅ Node.js version 18 or higher
- ✅ npm (comes with Node.js) or yarn
- ✅ A code editor (VS Code recommended)
- ✅ A modern web browser (Chrome, Firefox, Safari, or Edge)
- ✅ Terminal access

### Check Node.js Version
```bash
node --version
# Should show v18.0.0 or higher
```

### Check npm Version
```bash
npm --version
# Should show 8.0.0 or higher
```

## 🚀 Step-by-Step Installation

### Step 1: Navigate to Project Directory
```bash
cd "/Users/Sumit/Desktop/IT bhai"
```

### Step 2: Install Dependencies
```bash
npm install
```

**Expected output:**
```
added 234 packages in 45s
```

**If you see errors:**
```bash
# Try cleaning and reinstalling
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Verify Installation
```bash
# Check if node_modules exists
ls node_modules
```

You should see folders like: `react`, `react-dom`, `vite`, `tailwindcss`, `framer-motion`, etc.

### Step 4: Start Development Server
```bash
npm run dev
```

**Expected output:**
```
  VITE v5.1.4  ready in 324 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 5: Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

## 🧪 Testing Checklist

### ✅ Visual Testing

#### Home Page
- [ ] Hero section loads with animated background
- [ ] All text is readable
- [ ] CTA buttons are visible and styled correctly
- [ ] Trust metrics show 4 stat cards
- [ ] Service cards display in grid (6 cards)
- [ ] Industries grid shows 12 cards
- [ ] Why Choose CD section has 4 stats
- [ ] Security section displays
- [ ] Timeline shows 5 steps
- [ ] Case studies preview shows 3 cards
- [ ] Tech stack shows categorized technologies
- [ ] Testimonials slider works
- [ ] Final CTA has gradient background

#### Navigation
- [ ] Logo appears in top-left
- [ ] Navigation links are visible
- [ ] Theme toggle switch appears (top-right)
- [ ] "Get Started" button is visible
- [ ] Mobile menu button appears on mobile
- [ ] Navbar background changes on scroll

#### About Page
- [ ] Hero section loads
- [ ] Philosophy section displays
- [ ] Team stats show 4 cards
- [ ] How We Work shows 3 cards
- [ ] Values grid shows 6 cards

#### Services Page
- [ ] Hero with gradient background
- [ ] 6 services displayed
- [ ] Each service has capabilities list
- [ ] Engagement models show 4 cards
- [ ] All links work

#### Case Studies Page
- [ ] Sticky sidebar navigation works
- [ ] 3 case studies display
- [ ] Clicking sidebar switches case
- [ ] Metrics cards display correctly
- [ ] Technologies list shows

#### Insights Page
- [ ] Search bar appears
- [ ] Category filter shows 7 categories
- [ ] Blog grid shows 6 articles
- [ ] Filtering works
- [ ] Article cards have images

#### Careers Page
- [ ] Hero with stats displays
- [ ] Culture values show 4 cards
- [ ] Benefits show 4 cards
- [ ] 6 job listings display
- [ ] Apply buttons present

#### Contact Page
- [ ] Contact form displays
- [ ] All form fields present
- [ ] Contact information visible
- [ ] Business hours shown

#### Footer
- [ ] Logo and description
- [ ] 3 columns of links
- [ ] Contact information
- [ ] Social media links
- [ ] Copyright notice

### ✅ Functionality Testing

#### Theme Toggle
- [ ] Click theme toggle (sun/moon icon)
- [ ] Page switches to dark mode
- [ ] All colors change appropriately
- [ ] Text remains readable
- [ ] Toggle icon switches
- [ ] Refresh page - theme persists

#### Navigation
- [ ] Click each nav link
- [ ] Page changes correctly
- [ ] URL updates
- [ ] Browser back button works
- [ ] Logo click returns to home

#### Scroll Animations
- [ ] Scroll down home page slowly
- [ ] Parallax backgrounds move
- [ ] Cards fade in on scroll
- [ ] Timeline activates
- [ ] No jittery motion
- [ ] Smooth performance

#### Hover Effects
- [ ] Hover over service cards - they lift
- [ ] Hover over buttons - they scale
- [ ] Hover over nav links - color changes
- [ ] All hover states smooth

#### Mobile Menu
- [ ] Resize browser to mobile (<768px)
- [ ] Hamburger menu appears
- [ ] Click to open menu
- [ ] Menu slides open
- [ ] Links visible
- [ ] Click link - menu closes
- [ ] Navigation works

#### Forms
- [ ] Try submitting empty contact form
- [ ] Required fields show validation
- [ ] Fill form completely
- [ ] Submit - success message shows
- [ ] Message disappears after 5s

### ✅ Responsive Testing

#### Mobile (320px - 767px)
- [ ] Resize browser to 375px width
- [ ] All content visible
- [ ] No horizontal scroll
- [ ] Text readable
- [ ] Buttons tap-friendly
- [ ] Cards stack vertically
- [ ] Navigation menu works

#### Tablet (768px - 1023px)
- [ ] Resize to 768px width
- [ ] 2-column grids display
- [ ] Navigation full menu visible
- [ ] Spacing appropriate
- [ ] Images scale correctly

#### Desktop (1024px+)
- [ ] Resize to 1280px width
- [ ] 3-4 column grids display
- [ ] Container max-width respected
- [ ] No excessive whitespace
- [ ] All features accessible

### ✅ Performance Testing

#### Load Time
- [ ] Hard refresh (Cmd/Ctrl + Shift + R)
- [ ] Page loads within 2 seconds
- [ ] No layout shift during load
- [ ] Fonts load properly

#### Scroll Performance
- [ ] Scroll rapidly up/down
- [ ] Animations smooth (60fps)
- [ ] No lag or stuttering
- [ ] Page remains responsive

#### Browser DevTools Check
Open Chrome DevTools (F12):
- [ ] No console errors
- [ ] No 404 errors in Network tab
- [ ] No warnings in Console

### ✅ Browser Compatibility

Test in each browser:

**Chrome**
- [ ] All features work
- [ ] Animations smooth
- [ ] Theme toggle works
- [ ] Forms function

**Firefox**
- [ ] All features work
- [ ] Animations smooth
- [ ] Theme toggle works
- [ ] Forms function

**Safari**
- [ ] All features work
- [ ] Animations smooth
- [ ] Theme toggle works
- [ ] Forms function

**Edge**
- [ ] All features work
- [ ] Animations smooth
- [ ] Theme toggle works
- [ ] Forms function

### ✅ Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus states visible
- [ ] Can navigate without mouse
- [ ] Enter/Space activate buttons
- [ ] Escape closes mobile menu

#### Screen Reader (Optional)
- [ ] Turn on screen reader (VoiceOver/NVDA)
- [ ] Navigate through page
- [ ] All elements announced
- [ ] Proper heading structure

#### Reduced Motion
- [ ] Open System Preferences
- [ ] Enable "Reduce Motion"
- [ ] Refresh website
- [ ] Animations minimal/removed
- [ ] Site still functional

### ✅ Dark Mode Testing

#### Visual Check
- [ ] All text readable in dark mode
- [ ] No white flashes
- [ ] Borders visible
- [ ] Cards have proper contrast
- [ ] Gradients look good
- [ ] Icons visible

#### Components
- [ ] Navbar in dark mode
- [ ] Footer in dark mode
- [ ] Cards in dark mode
- [ ] Forms in dark mode
- [ ] Buttons in dark mode
- [ ] All pages in dark mode

## 🐛 Common Issues & Solutions

### Issue: npm install fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete package-lock.json
rm package-lock.json

# Try again
npm install
```

### Issue: Port 3000 already in use
**Solution:**
Edit `vite.config.js`:
```javascript
server: {
  port: 3001  // Change to any available port
}
```

### Issue: Dark mode doesn't persist
**Solution:**
```bash
# Clear browser localStorage
# In DevTools Console:
localStorage.clear()
# Then refresh
```

### Issue: Animations are laggy
**Solutions:**
1. Close other browser tabs
2. Enable hardware acceleration in browser
3. Update graphics drivers
4. Test in different browser

### Issue: Module not found errors
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Issue: Blank page after build
**Solution:**
Check browser console for errors. Often caused by:
- Missing base path in vite.config.js
- Router configuration issues

## 📊 Build Testing

### Production Build
```bash
# Build for production
npm run build

# Expected output:
# vite v5.1.4 building for production...
# ✓ 234 modules transformed.
# dist/index.html                    0.54 kB
# dist/assets/index-abc123.css      25.32 kB
# dist/assets/index-xyz789.js      256.78 kB
```

### Preview Production Build
```bash
npm run preview

# Opens at http://localhost:4173
```

### Check Build Output
- [ ] Open preview in browser
- [ ] Test all functionality
- [ ] Check performance
- [ ] Verify minification

## ✅ Final Checklist Before Launch

- [ ] All content updated (no placeholder text)
- [ ] Contact information correct
- [ ] Forms connected to backend (or email service)
- [ ] Google Analytics added (optional)
- [ ] Favicon updated
- [ ] Meta tags added for SEO
- [ ] OpenGraph images for social sharing
- [ ] All links working
- [ ] 404 page handled
- [ ] Production build tested
- [ ] Performance optimized
- [ ] Accessibility validated
- [ ] Browser testing complete
- [ ] Mobile testing complete

## 🎉 Success Criteria

Your installation is successful if:
✅ Development server starts without errors  
✅ Home page loads in browser  
✅ All 7 pages accessible  
✅ Theme toggle works  
✅ Animations are smooth  
✅ Mobile menu functions  
✅ No console errors  
✅ Responsive at all sizes  

## 📞 Getting Help

If you encounter issues:
1. Check this guide's troubleshooting section
2. Review SETUP_GUIDE.md
3. Check browser console for errors
4. Verify Node.js version
5. Try clean reinstall

## 🚀 Next Steps After Testing

Once all tests pass:
1. Customize content
2. Add your branding
3. Connect backend services
4. Optimize images
5. Deploy to production

---

**Happy Testing! 🎯**

All tests should pass for a production-ready website.
