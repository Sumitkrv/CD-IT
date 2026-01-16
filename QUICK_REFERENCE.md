# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# First time setup
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean reinstall
rm -rf node_modules package-lock.json && npm install
```

## 📂 Key Files & Locations

| What | Where |
|------|-------|
| Main app | `/src/App.jsx` |
| Home page | `/src/pages/Home.jsx` |
| Theme colors | `/tailwind.config.js` |
| Global styles | `/src/index.css` |
| Navigation | `/src/components/Navbar.jsx` |
| Footer | `/src/components/Footer.jsx` |
| Theme toggle | `/src/components/ThemeToggle.jsx` |
| Contact info | `/src/components/Footer.jsx` + `/src/pages/Contact.jsx` |

## 🎨 Quick Customizations

### Change Primary Color
**File:** `tailwind.config.js`
```javascript
light: { accent: '#YOUR_COLOR' }
dark: { accent: '#YOUR_COLOR' }
```

### Update Company Info
**Files:**
- `/src/components/Footer.jsx` (email, phone, address)
- `/src/pages/Contact.jsx` (contact details)
- `/src/components/Navbar.jsx` (logo text)

### Modify Homepage Hero
**File:** `/src/components/home/HeroSection.jsx`
- Change headline
- Update subtext
- Modify CTA buttons

### Add/Remove Services
**File:** `/src/components/home/CoreServices.jsx`
- Edit `services` array
- Add/remove service objects

### Update Testimonials
**File:** `/src/components/home/Testimonials.jsx`
- Edit `testimonials` array

## 🌗 Theme System

```javascript
// Use in any component
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  // theme: 'light' | 'dark'
  // isDark: boolean
  // toggleTheme: function
}
```

## 🌀 Animation Hooks

```javascript
// Parallax effect
import { useParallax } from '../hooks/useParallax';
const { ref, y } = useParallax(0.5); // speed multiplier
<motion.div ref={ref} style={{ y }}>Content</motion.div>

// Fade in on scroll
import { useFadeInOnScroll } from '../hooks/useParallax';
const { ref, opacity, scale } = useFadeInOnScroll();
<motion.div ref={ref} style={{ opacity, scale }}>Content</motion.div>
```

## 🎯 Common Tasks

### Add a New Page

1. Create component in `/src/pages/NewPage.jsx`
2. Add route in `/src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in `/src/components/Navbar.jsx`

### Add a Section to Homepage

1. Create component in `/src/components/home/NewSection.jsx`
2. Import in `/src/pages/Home.jsx`
3. Add to render: `<NewSection />`

### Change Font

**File:** `index.html`
```html
<!-- Update Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@..." rel="stylesheet">
```

**File:** `tailwind.config.js`
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 🎨 Tailwind CSS Classes - Quick Guide

```css
/* Colors */
bg-light-bg dark:bg-dark-bg          /* Background */
text-light-text dark:text-dark-text  /* Text */
text-light-accent dark:text-dark-accent /* Accent */

/* Spacing */
p-6    /* Padding all sides */
py-24  /* Padding top/bottom */
px-6   /* Padding left/right */
gap-8  /* Grid/flex gap */

/* Layout */
container mx-auto  /* Centered container */
grid grid-cols-3   /* 3 column grid */
flex items-center  /* Flex center */

/* Responsive */
md:grid-cols-2  /* 2 cols on tablet+ */
lg:grid-cols-4  /* 4 cols on desktop+ */

/* Borders & Shadows */
rounded-xl      /* Rounded corners */
border border-gray-200 dark:border-gray-800
shadow-lg       /* Drop shadow */
```

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Dark mode not working | Clear browser localStorage |
| Port in use | Change port in `vite.config.js` |
| Dependencies error | Run clean install |
| Animations slow | Check browser hardware acceleration |
| Build fails | Check for syntax errors, run `npm run build` |

## 📱 Responsive Breakpoints

| Size | Screen | Classes |
|------|--------|---------|
| Default | Mobile (320px+) | No prefix |
| md: | Tablet (768px+) | `md:class` |
| lg: | Desktop (1024px+) | `lg:class` |
| xl: | Large (1280px+) | `xl:class` |

## 🎨 Framer Motion - Common Patterns

```javascript
// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
/>

// Slide up
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>

// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>

// Stagger children
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

## 🚀 Deployment

### Vercel (Easiest)
1. Push to GitHub
2. Import project on Vercel
3. Deploy (auto-configured)

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder
3. Configure SPA routing (301 redirects)

## 📊 Performance Tips

✅ Images: Use WebP format, add loading="lazy"  
✅ Fonts: Only load weights you use  
✅ Bundle: Keep dependencies minimal  
✅ Code: Remove unused imports  
✅ Animations: Use transform/opacity only  

## 🔗 Useful Links

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

## 💡 Pro Tips

1. **Theme Testing:** Toggle dark mode frequently while developing
2. **Mobile First:** Test mobile view regularly
3. **Accessibility:** Use semantic HTML and ARIA labels
4. **Performance:** Check Chrome DevTools Performance tab
5. **Git:** Commit frequently with clear messages

## 📞 Need Help?

- Check `SETUP_GUIDE.md` for detailed setup
- See `SITE_STRUCTURE.md` for architecture
- Review `COMPONENT_MAP.md` for component relationships
- Read inline code comments

---

**Keep this card handy while developing!** 🎯
