# 🎨 Visual Design Guide

## Color Palette

### Light Mode
```
┌─────────────────────────────────────────┐
│ Background: #F8FAFC (Soft Gray)        │
│ Surface: #FFFFFF (Pure White)          │
│ Text: #0F172A (Dark Slate)             │
│ Text Secondary: #475569 (Medium Slate) │
│ Accent: #1E40AF (Deep Blue)            │
│ Accent Hover: #1E3A8A (Darker Blue)    │
└─────────────────────────────────────────┘
```

### Dark Mode
```
┌─────────────────────────────────────────┐
│ Background: #0B0F1A (Deep Navy)        │
│ Surface: #0F172A (Dark Slate)          │
│ Text: #F1F5F9 (Off White)              │
│ Text Secondary: #94A3B8 (Soft Gray)    │
│ Accent: #60A5FA (Sky Blue)             │
│ Accent Hover: #3B82F6 (Bright Blue)    │
└─────────────────────────────────────────┘
```

## Typography Scale

```
Hero Headline:    text-7xl (72px) - Ultra Bold
Page Title:       text-6xl (60px) - Bold
Section Title:    text-5xl (48px) - Bold
Subsection:       text-4xl (36px) - Bold
Card Title:       text-2xl (24px) - Bold
Body Large:       text-xl (20px) - Regular
Body:             text-lg (18px) - Regular
Body Small:       text-base (16px) - Regular
Caption:          text-sm (14px) - Medium
```

## Spacing System

```
Section Padding:  py-24 (96px vertical)
Container:        px-6 lg:px-12 (24px → 48px horizontal)
Component Gap:    gap-8 (32px)
Card Padding:     p-8 (32px)
Button Padding:   px-8 py-4 (32px × 16px)
```

## Component Styles

### Buttons

**Primary Button (Light Mode)**
```
┌────────────────────────┐
│   Get Started    →     │  ← White text
└────────────────────────┘
Background: #1E40AF (Deep Blue)
Hover: #1E3A8A
Shadow: 0 10px 25px rgba(30, 64, 175, 0.25)
```

**Secondary Button (Light Mode)**
```
┌────────────────────────┐
│   Learn More           │  ← Blue text
└────────────────────────┘
Background: Transparent
Border: 2px solid #1E40AF
Hover: Background #1E40AF with 10% opacity
```

### Cards

**Service Card**
```
┌────────────────────────────────────┐
│  [ICON]  ← Gradient background     │
│                                    │
│  Service Title                     │
│  Description text goes here and    │
│  wraps to multiple lines...        │
│                                    │
│  • Feature one                     │
│  • Feature two                     │
│  • Feature three                   │
│                                    │
│  Learn More  →                     │
└────────────────────────────────────┘
Background: White (Light) / #0F172A (Dark)
Border: 1px solid #E5E7EB (Light) / #1F2937 (Dark)
Border Radius: 16px
Hover: Lift up -8px, border accent color
```

### Navigation Bar

**Navbar (Scrolled)**
```
┌────────────────────────────────────────────────────┐
│ [CD] CD Solutions    Services  About  Contact      │
│                      [☀️/🌙]  [Get Started]        │
└────────────────────────────────────────────────────┘
Background: White/90% opacity with backdrop blur
Height: 80px
Shadow when scrolled
```

## Page Layouts

### Home Page - Hero Section
```
┌─────────────────────────────────────────────────────┐
│                   [Grid Pattern Background]         │
│                   [Floating Gradient Orb]           │
│                                                     │
│            [Trusted by Industry Leaders]           │
│                                                     │
│     Reliable IT & Digital Solutions                │
│     Built for Long-Term Growth                     │
│                                                     │
│   CD delivers smart IT and digital solutions...    │
│                                                     │
│   Technology should support your business...       │
│                                                     │
│   [Get Started]  [View Case Studies]               │
│                                                     │
│                    [↓]                              │
└─────────────────────────────────────────────────────┘
```

### Trust Metrics Section
```
┌──────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────┐│
│  │  [ICON]  │  │  [ICON]  │  │  [ICON]  │  │[ICON]││
│  │   15+    │  │   500+   │  │   200+   │  │  12  ││
│  │  Years   │  │ Systems  │  │ Clients  │  │Indus.││
│  └──────────┘  └──────────┘  └──────────┘  └──────┘│
└──────────────────────────────────────────────────────┘
```

### Services Grid
```
┌────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ [☁️]     │  │ [🔒]     │  │ [💻]     │    │
│  │  Cloud   │  │ Security │  │  Custom  │    │
│  │Solutions │  │          │  │   Dev    │    │
│  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ [📱]     │  │ [📊]     │  │ [🎯]     │    │
│  │ Digital  │  │   Data   │  │    IT    │    │
│  │Transform │  │Analytics │  │Consulting│    │
│  └──────────┘  └──────────┘  └──────────┘    │
└────────────────────────────────────────────────┘
```

### Testimonials Slider
```
┌─────────────────────────────────────────────────┐
│  "                                              │
│                                                 │
│  CD Solutions transformed our legacy            │
│  infrastructure into a modern, cloud-native     │
│  architecture. The team's expertise and         │
│  professionalism exceeded our expectations.     │
│                                                 │
│  [👤] Sarah Mitchell                            │
│       CTO, TechCorp International               │
│                                                 │
│  [←]  ● ○ ○ ○  [→]                              │
└─────────────────────────────────────────────────┘
```

## Animation Styles

### Parallax Movement
```
Background Elements:
  Speed: 0.3-0.5x scroll speed
  Direction: Vertical (up/down)
  Blur: Often 2-3xl
  Opacity: 10-20%

Decorative Shapes:
  Speed: 0.2-0.4x scroll speed
  Movement: Smooth, continuous
  No jarring effects
```

### Hover Effects
```
Cards:
  Transform: translateY(-8px)
  Border: Accent color
  Shadow: Increase intensity
  Transition: 300ms ease-out

Buttons:
  Scale: 1.05
  Background: Darken/lighten
  Transition: 200ms ease-out

Icons:
  Rotate: 5deg
  Scale: 1.1
  Transition: Spring (300ms)
```

### Scroll Triggers
```
Fade In:
  Initial: opacity 0, y +30px
  Animate: opacity 1, y 0
  Duration: 600ms
  
Stagger:
  Delay between children: 100ms
  Total stagger time: ~500ms for 5 items
```

## Mobile Layouts

### Mobile (320px - 767px)
```
┌──────────────────┐
│  [☰] CD  [☀️/🌙] │  ← Hamburger menu
├──────────────────┤
│                  │
│  Hero Content    │
│  (Centered)      │
│                  │
├──────────────────┤
│  Single Column   │
│  Stacked Cards   │
│                  │
│  [Card 1]        │
│  [Card 2]        │
│  [Card 3]        │
└──────────────────┘
```

### Tablet (768px - 1023px)
```
┌────────────────────────────┐
│  CD Solutions    Menu      │
├────────────────────────────┤
│                            │
│     Hero (Full Width)      │
│                            │
├────────────────────────────┤
│  [Card 1]    [Card 2]      │  ← 2 columns
│  [Card 3]    [Card 4]      │
└────────────────────────────┘
```

### Desktop (1024px+)
```
┌──────────────────────────────────────────────┐
│  CD Solutions    Links...    [Theme] [CTA]   │
├──────────────────────────────────────────────┤
│                                              │
│           Hero (Centered, Max Width)         │
│                                              │
├──────────────────────────────────────────────┤
│  [Card 1]  [Card 2]  [Card 3]  [Card 4]     │
│                                              │  ← 3-4 columns
└──────────────────────────────────────────────┘
```

## Visual Hierarchy

```
Page Structure:
1. Hero (Largest, most prominent)
   └── Gradient backgrounds, large text
   
2. Main Sections (Clear separation)
   └── Alternating backgrounds (white/gray)
   
3. Cards & Components (Grouped)
   └── Consistent spacing, borders
   
4. Footer (Comprehensive)
   └── Multiple columns, links, info
```

## Shadow System

```
Small:  shadow-md   (0 4px 6px -1px rgba(0,0,0,0.1))
Medium: shadow-lg   (0 10px 15px -3px rgba(0,0,0,0.1))
Large:  shadow-xl   (0 20px 25px -5px rgba(0,0,0,0.1))
Extra:  shadow-2xl  (0 25px 50px -12px rgba(0,0,0,0.25))

Colored Shadows (Accent):
  shadow-blue-500/25  (Blue with 25% opacity)
```

## Border Radius

```
Small:   rounded-lg  (8px)
Medium:  rounded-xl  (12px)
Large:   rounded-2xl (16px)
XLarge:  rounded-3xl (24px)
Full:    rounded-full (9999px for circles)
```

## Icon Sizes

```
Small:   w-5 h-5   (20px)
Medium:  w-6 h-6   (24px)
Large:   w-8 h-8   (32px)
XLarge:  w-12 h-12 (48px)
Hero:    w-16 h-16 (64px)
```

## Grid Patterns

```
Default Layout:
  grid grid-cols-1        (Mobile)
  md:grid-cols-2         (Tablet)
  lg:grid-cols-3         (Desktop)
  lg:grid-cols-4         (Large screens)
  
Gap:
  gap-6   (24px)
  gap-8   (32px)
  gap-12  (48px)
```

## Visual Indicators

### Loading States
```
Skeleton: Pulsing gray background
Spinner: Rotating circle
Progress: Bar with percentage
```

### Success/Error States
```
Success: Green border + checkmark icon
Error: Red border + X icon
Warning: Yellow border + alert icon
Info: Blue border + info icon
```

---

This guide shows the visual language of the CD Solutions website.
All measurements, colors, and styles are implemented in the codebase.
