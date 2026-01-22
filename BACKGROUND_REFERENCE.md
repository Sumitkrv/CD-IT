# Tech Background System - Quick Reference

## 🚀 Quick Start

```jsx
import TechBackground from '../components/backgrounds/TechBackground';
import { GlowOrbs, GrainTexture } from '../components/backgrounds/BackgroundEffects';

// Minimal usage
<section className="relative">
  <TechBackground variant="grid" />
  {/* Your content */}
</section>
```

## 📦 All Imports

```jsx
// Single import
import TechBackground from '../components/backgrounds/TechBackground';

// Multiple effects
import { 
  FloatingParticles,
  DataFlowLines,
  GlowOrbs,
  AnimatedGrid,
  CircuitBoard,
  Waveform,
  DotMatrix,
  GrainTexture,
  GradientOverlay
} from '../components/backgrounds/BackgroundEffects';

// Or import everything
import * as Backgrounds from '../components/backgrounds';
```

## 🎨 Variants Cheat Sheet

| Variant | Use Case | Intensity | Animation |
|---------|----------|-----------|-----------|
| `grid` | Hero, Features | medium | ✅ Scanning lines |
| `particles` | About, Team | medium | ✅ Floating nodes |
| `waves` | Dashboard, Data | medium | ✅ Wave motion |
| `circuit` | Tech, Docs | medium | ✅ Circuit paths |
| `mesh` | Landing, CTA | high | ✅ Blob movement |
| `minimal` | Content, Blog | low | ✅ Subtle lines |

## ⚡ Common Patterns

### Hero Section
```jsx
<TechBackground variant="grid" intensity="medium" />
<DataFlowLines lineCount={3} />
<GlowOrbs orbs={[
  { color: 'blue', position: 'top-left', size: 'large' }
]} />
<GrainTexture />
```

### Feature Grid
```jsx
<AnimatedGrid cellSize={80} scanLines={true} />
<GrainTexture opacity={0.02} />
```

### CTA/Marketing
```jsx
<TechBackground variant="mesh" intensity="high" />
<FloatingParticles count={20} />
<GlowOrbs orbs={[
  { color: 'violet', position: 'center', size: 'large' }
]} />
<GrainTexture />
```

### Minimal Content
```jsx
<TechBackground variant="minimal" intensity="low" />
<DotMatrix rows={6} cols={10} />
<GrainTexture opacity={0.015} />
```

## 🎯 Component Props

### TechBackground
```jsx
variant:   'grid' | 'particles' | 'waves' | 'circuit' | 'mesh' | 'minimal'
intensity: 'low' | 'medium' | 'high'
animated:  boolean (default: true)
className: string
```

### GlowOrbs
```jsx
orbs: [{
  color:    'blue' | 'violet' | 'indigo' | 'cyan'
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  size:     'small' | 'medium' | 'large'
}]
animated: boolean
```

### FloatingParticles
```jsx
count:              number (default: 30)
connectionDistance: number (default: 150)
animated:           boolean
```

### AnimatedGrid
```jsx
cellSize:  number (default: 64)
lineColor: string (default: 'rgb(99 102 241)')
scanLines: boolean (default: true)
animated:  boolean
```

### DataFlowLines
```jsx
lineCount: number (default: 5)
animated:  boolean
```

### CircuitBoard
```jsx
nodeCount: number (default: 12)
animated:  boolean
```

### Waveform
```jsx
waveCount: number (default: 3)
animated:  boolean
```

### DotMatrix
```jsx
rows:     number (default: 8)
cols:     number (default: 12)
animated: boolean
```

### GrainTexture
```jsx
opacity:   number (default: 0.025)
className: string
```

## 🎨 Color Reference

```js
// Primary colors (use in orbs)
'blue'    // rgb(59 130 246)
'violet'  // rgb(139 92 246)
'indigo'  // rgb(99 102 241)
'cyan'    // rgb(6 182 212)

// Positions
'top-left'
'top-right'
'bottom-left'
'bottom-right'
'center'

// Sizes
'small'   // 256px
'medium'  // 384px
'large'   // 600px
```

## 📐 Layout Best Practices

```jsx
// Section structure
<section className="relative overflow-hidden py-32">
  {/* Background layer */}
  <TechBackground variant="grid" />
  <GlowOrbs orbs={[...]} />
  <GrainTexture />
  
  {/* Content layer */}
  <div className="container mx-auto px-6 relative z-10">
    {/* Your content */}
  </div>
</section>
```

## ⚙️ Performance Tips

```jsx
// Disable animations on mobile
const isMobile = window.innerWidth < 768;

<TechBackground variant="grid" animated={!isMobile} />

// Use lower intensity on mobile
<TechBackground 
  variant="grid" 
  intensity={isMobile ? 'low' : 'medium'} 
/>

// Fewer particles on mobile
<FloatingParticles count={isMobile ? 15 : 30} />
```

## 🌓 Dark Mode

All components automatically adapt:
```jsx
// No special configuration needed
<TechBackground variant="grid" />

// Opacity automatically adjusts based on theme
// Light mode: subtle, bright accents
// Dark mode: deeper tones, higher contrast
```

## 🔧 Customization Examples

### Custom Glow Pattern
```jsx
<GlowOrbs 
  orbs={[
    { color: 'blue', position: 'top-left', size: 'large' },
    { color: 'violet', position: 'top-right', size: 'medium' },
    { color: 'cyan', position: 'bottom-left', size: 'small' },
    { color: 'indigo', position: 'bottom-right', size: 'medium' }
  ]}
/>
```

### Multi-Layer Composition
```jsx
{/* Base layer */}
<AnimatedGrid cellSize={96} scanLines={false} />

{/* Mid layer */}
<CircuitBoard nodeCount={16} />
<DataFlowLines lineCount={5} />

{/* Top layer */}
<GlowOrbs orbs={[...]} />
<GrainTexture opacity={0.03} />
```

### Asymmetric Design
```jsx
<TechBackground variant="minimal" />
<GlowOrbs 
  orbs={[
    { color: 'blue', position: 'top-left', size: 'large' }
  ]}
/>
<div className="absolute right-0 top-0 w-1/2 h-full">
  <FloatingParticles count={40} />
</div>
```

## 📊 Intensity Settings

```js
// Internal opacity & blur values
low:    { opacity: 0.03, blur: 40 }
medium: { opacity: 0.06, blur: 30 }
high:   { opacity: 0.1,  blur: 20 }

// Recommendations by section
Hero:       'medium'
Features:   'low' to 'medium'
About:      'medium'
CTA:        'medium' to 'high'
Content:    'low'
Footer:     'low'
```

## 🎬 Animation Speeds

```js
// Fast (2-4s): Micro-interactions
<FloatingParticles />  // Individual particles

// Medium (8-15s): Active elements
<DataFlowLines />      // Scanning lines
<Waveform />          // Wave motion

// Slow (30-60s): Ambient
<GlowOrbs />          // Breathing effect
<TechBackground />    // Background shifts
```

## ✅ Testing Checklist

- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Check text readability
- [ ] Verify on mobile (< 768px)
- [ ] Verify on tablet (768-1023px)
- [ ] Verify on desktop (> 1024px)
- [ ] Test with animations disabled
- [ ] Check performance (< 60fps)
- [ ] Validate accessibility (contrast ratios)
- [ ] Test with browser DevTools throttling

## 🐛 Common Issues

### Text Not Readable
```jsx
// Increase content z-index
<div className="relative z-10">Content</div>

// Reduce background intensity
<TechBackground intensity="low" />

// Add gradient overlay
<div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60" />
```

### Performance Issues
```jsx
// Reduce particle count
<FloatingParticles count={15} />  // Instead of 30

// Disable animations
<TechBackground animated={false} />

// Use simpler variant
<TechBackground variant="minimal" />
```

### Overlapping Effects
```jsx
// Layer properly with proper spacing
<TechBackground />           {/* Base */}
<AnimatedGrid />            {/* Layer 1 */}
<GlowOrbs />               {/* Layer 2 */}
<GrainTexture />           {/* Top overlay */}
```

---

**Pro Tip**: Always add `<GrainTexture />` as the final layer for a premium, polished feel!
