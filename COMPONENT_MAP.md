# 🗺️ Component Map & Relationships

## App Architecture

```
App.jsx (Root)
└── ThemeProvider (Context)
    └── Router (React Router)
        └── Layout
            ├── Navbar
            │   ├── ThemeToggle
            │   └── Mobile Menu (conditional)
            │
            ├── Routes (Pages)
            │   ├── Home
            │   │   ├── HeroSection
            │   │   │   └── Parallax backgrounds
            │   │   ├── TrustMetrics
            │   │   │   └── Stat cards
            │   │   ├── CoreServices
            │   │   │   └── Service cards (6)
            │   │   ├── IndustriesWeServe
            │   │   │   └── Industry cards (12)
            │   │   ├── WhyChooseCD
            │   │   │   ├── Reasons (4)
            │   │   │   └── Stats (4)
            │   │   ├── SecurityCompliance
            │   │   │   ├── Parallax shield
            │   │   │   └── Feature cards (6)
            │   │   ├── OurApproach
            │   │   │   └── Timeline steps (5)
            │   │   ├── CaseStudiesPreview
            │   │   │   └── Case cards (3)
            │   │   ├── TechStack
            │   │   │   └── Tech categories (4)
            │   │   ├── Testimonials
            │   │   │   └── Slider (4 testimonials)
            │   │   └── FinalCTA
            │   │       └── Gradient background
            │   │
            │   ├── About
            │   │   ├── Hero
            │   │   ├── Philosophy
            │   │   ├── How We Work
            │   │   └── Values Grid
            │   │
            │   ├── Services
            │   │   ├── Hero
            │   │   ├── Service Details (6)
            │   │   └── Engagement Models (4)
            │   │
            │   ├── CaseStudies
            │   │   ├── Hero
            │   │   ├── Sidebar (Sticky)
            │   │   └── Case Details (3)
            │   │
            │   ├── Insights
            │   │   ├── Hero + Search
            │   │   ├── Category Filter
            │   │   └── Blog Grid (6)
            │   │
            │   ├── Careers
            │   │   ├── Hero + Stats
            │   │   ├── Culture
            │   │   ├── Benefits (4)
            │   │   └── Open Positions (6)
            │   │
            │   └── Contact
            │       ├── Hero
            │       ├── Contact Form
            │       └── Contact Info
            │
            └── Footer
                ├── Brand section
                ├── Footer links (3 columns)
                └── Social links
```

## Data Flow

```
User Interaction
      ↓
Theme Toggle → ThemeContext → All Components (theme prop)
      ↓
Scroll Event → Parallax Hooks → Motion Components
      ↓
Route Change → React Router → Page Component
      ↓
Form Submit → Form Handler → (Backend - to be connected)
```

## Hook Dependencies

```
Custom Hooks:
├── useParallax
│   └── Uses: useScroll, useTransform (Framer Motion)
│
├── useFadeInOnScroll
│   └── Uses: useScroll, useTransform
│
├── useScaleOnScroll
│   └── Uses: useScroll, useTransform
│
├── useRotateOnScroll
│   └── Uses: useScroll, useTransform
│
├── useHorizontalParallax
│   └── Uses: useScroll, useTransform
│
├── useGradientShift
│   └── Uses: useScroll, useTransform
│
└── usePrefersReducedMotion
    └── Uses: useEffect, useState
```

## Context Structure

```
ThemeContext
├── State: theme ('light' | 'dark')
├── Methods:
│   ├── toggleTheme()
│   └── isDark (computed)
└── Storage: localStorage('cd-theme')
```

## Animation Hierarchy

```
Scroll-Triggered Animations:
├── Page Level
│   └── Hero parallax backgrounds
│
├── Section Level
│   ├── Fade in on viewport enter
│   ├── Slide in from sides
│   └── Stagger children
│
└── Component Level
    ├── Hover effects (scale, color)
    ├── Click feedback (tap scale)
    └── Focus states
```

## Responsive Breakpoints

```
CSS Classes:
├── Default (Mobile First)
│   └── Base styles apply to all
│
├── md: (768px+)
│   └── Tablet layouts, 2 columns
│
├── lg: (1024px+)
│   └── Desktop layouts, 3-4 columns
│
└── xl: (1280px+)
    └── Large screens, max widths
```

## File Size Estimates

```
Component Sizes (approx):
├── Pages: 100-300 lines each
├── Home Sections: 50-150 lines each
├── Layout Components: 50-200 lines
├── Hooks: 20-80 lines
├── Context: 30-50 lines
└── Config Files: 30-100 lines
```

## Import Graph (Key Dependencies)

```
App.jsx imports:
├── react-router-dom
├── ThemeContext
├── Layout
└── All Pages

Pages import:
├── framer-motion
├── lucide-react
├── Custom hooks
└── React Router (Link)

Components import:
├── framer-motion
├── lucide-react
├── Custom hooks (parallax)
└── Context (useTheme)
```

## State Management

```
Global State:
└── ThemeContext (theme preference)

Local State:
├── Navbar (scroll state, mobile menu)
├── Testimonials (current slide)
├── Contact (form data, submitted)
├── Insights (selected category)
└── CaseStudies (active study)
```

## Performance Optimizations

```
Applied Optimizations:
├── Component Level
│   ├── Proper useEffect cleanup
│   ├── Event listener cleanup
│   └── Ref management
│
├── Animation Level
│   ├── GPU transforms (translate, scale)
│   ├── will-change hints
│   └── RequestAnimationFrame
│
└── Build Level
    ├── Code splitting (React Router)
    ├── Tree shaking (Vite)
    └── Minification
```

## Accessibility Tree

```
Semantic Structure:
<body>
  <nav> (Navbar)
  <main> (Page Content)
    <section> (Hero)
    <section> (Content sections)
  </main>
  <footer> (Footer)
</body>

ARIA:
├── aria-label on buttons
├── role="navigation"
└── Semantic HTML (header, nav, main, footer, section)
```

## Color Token System

```
Tailwind Custom Colors:
├── light.bg       → #F8FAFC
├── light.surface  → #FFFFFF
├── light.text     → #0F172A
├── light.textSecondary → #475569
├── light.accent   → #1E40AF
│
├── dark.bg        → #0B0F1A
├── dark.surface   → #0F172A
├── dark.text      → #F1F5F9
├── dark.textSecondary → #94A3B8
└── dark.accent    → #60A5FA
```

## Build Output

```
Production Build:
dist/
├── index.html (Entry)
├── assets/
│   ├── index-[hash].js (App bundle)
│   ├── index-[hash].css (Styles)
│   └── [chunk]-[hash].js (Code splits)
└── vite.svg (Favicon)

Estimated Sizes:
├── JS Bundle: ~200-300KB (gzipped)
├── CSS: ~20-30KB (gzipped)
└── Total: ~250KB (first load)
```

## Testing Checklist

```
Manual Tests:
✓ All pages load
✓ Navigation works
✓ Theme toggle functions
✓ Scroll animations trigger
✓ Forms validate
✓ Mobile menu operates
✓ Responsive at all breakpoints
✓ Dark mode looks good
✓ Links work
✓ Accessibility features work

Browser Tests:
✓ Chrome
✓ Firefox
✓ Safari
✓ Edge

Device Tests:
✓ Mobile (320px+)
✓ Tablet (768px+)
✓ Desktop (1024px+)
✓ Large screens (1920px+)
```

---

This map shows the complete component architecture and relationships in the CD IT Solutions website.
