# Migration Guide: Upgrading to the New Background System

This guide will help you migrate your existing pages to use the new premium background system.

## 📋 Prerequisites

Ensure these files are in place:
- `src/components/backgrounds/TechBackground.jsx`
- `src/components/backgrounds/BackgroundEffects.jsx`
- `src/components/backgrounds/index.js`
- `src/components/backgrounds/performanceUtils.js`

## 🔄 Basic Migration Pattern

### Before (Old Approach)
```jsx
<section className="relative py-32">
  {/* Multiple inline background divs */}
  <div className="absolute inset-0 opacity-[0.15]">
    <div style={{ backgroundImage: '...', backgroundSize: '64px 64px' }} />
  </div>
  <div className="absolute inset-0">
    <svg>...</svg>
  </div>
  <div className="absolute inset-0" style={{ backgroundImage: 'url(...)' }} />
  
  {/* Content */}
  <div className="container mx-auto px-6">
    ...
  </div>
</section>
```

### After (New System)
```jsx
import TechBackground from '../components/backgrounds/TechBackground';
import { GrainTexture } from '../components/backgrounds/BackgroundEffects';

<section className="relative py-32">
  <TechBackground variant="grid" intensity="medium" />
  <GrainTexture />
  
  <div className="container mx-auto px-6 relative z-10">
    ...
  </div>
</section>
```

## 🎯 Section-by-Section Guide

### Hero Section

**Old:**
```jsx
<section className="relative min-h-screen">
  {/* Grid background */}
  <div className="absolute inset-0 opacity-[0.15]">
    <div style={{ backgroundImage: 'linear-gradient(...)' }} />
  </div>
  
  {/* SVG animations */}
  <motion.div className="absolute inset-0">
    <svg>
      <motion.path ... />
    </svg>
  </motion.div>
  
  {/* Grain texture */}
  <div className="absolute inset-0 mix-blend-overlay" style={{ ... }} />
  
  <div className="container mx-auto px-6">
    <h1>Hero Title</h1>
  </div>
</section>
```

**New:**
```jsx
import TechBackground from '../components/backgrounds/TechBackground';
import { DataFlowLines, GlowOrbs, GrainTexture } from '../components/backgrounds/BackgroundEffects';

<section className="relative min-h-screen">
  <TechBackground variant="grid" intensity="medium" />
  <DataFlowLines lineCount={3} />
  <GlowOrbs orbs={[
    { color: 'blue', position: 'top-left', size: 'large' }
  ]} />
  <GrainTexture />
  
  <div className="container mx-auto px-6 relative z-10">
    <h1>Hero Title</h1>
  </div>
</section>
```

### Feature Section

**Old:**
```jsx
<section className="py-32 bg-gray-50">
  <div className="absolute inset-0">
    {/* Complex nested divs */}
  </div>
  
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-3 gap-8">
      {/* Features */}
    </div>
  </div>
</section>
```

**New:**
```jsx
import { AnimatedGrid, GrainTexture } from '../components/backgrounds/BackgroundEffects';

<section className="relative py-32 bg-gray-50 dark:bg-gray-900">
  <AnimatedGrid cellSize={80} scanLines={true} />
  <GrainTexture opacity={0.02} />
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-3 gap-8">
      {/* Features */}
    </div>
  </div>
</section>
```

### CTA Section

**Old:**
```jsx
<section className="py-48 bg-gradient-to-br from-blue-50 to-indigo-50">
  {/* Multiple background layers */}
  <div className="absolute inset-0">...</div>
  <div className="absolute inset-0">...</div>
  
  <div className="container mx-auto px-6 text-center">
    <h2>Call to Action</h2>
    <button>Get Started</button>
  </div>
</section>
```

**New:**
```jsx
import TechBackground from '../components/backgrounds/TechBackground';
import { FloatingParticles, GlowOrbs, GrainTexture } from '../components/backgrounds/BackgroundEffects';

<section className="relative py-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900">
  <TechBackground variant="mesh" intensity="high" />
  <FloatingParticles count={25} />
  <GlowOrbs orbs={[
    { color: 'cyan', position: 'center', size: 'large' }
  ]} />
  <GrainTexture />
  
  <div className="container mx-auto px-6 text-center relative z-10">
    <h2>Call to Action</h2>
    <button>Get Started</button>
  </div>
</section>
```

## 🎨 Choosing the Right Variant

| Old Background Type | Recommended New Variant |
|---------------------|------------------------|
| Technical grid | `variant="grid"` |
| Dotted pattern | `variant="particles"` + `<DotMatrix />` |
| Flowing lines | `variant="waves"` + `<DataFlowLines />` |
| Circuit-like | `variant="circuit"` + `<CircuitBoard />` |
| Gradient blobs | `variant="mesh"` + `<GlowOrbs />` |
| Simple/minimal | `variant="minimal"` |

## ⚠️ Common Issues & Solutions

### Issue 1: Content Not Visible
**Problem:** Content is hidden behind background

**Solution:** Add `relative z-10` to content container
```jsx
<div className="container mx-auto px-6 relative z-10">
  {/* Content */}
</div>
```

### Issue 2: Background Too Intense
**Problem:** Background overwhelms content

**Solution:** Reduce intensity or adjust opacity
```jsx
<TechBackground variant="grid" intensity="low" />
{/* or */}
<AnimatedGrid className="opacity-50" />
```

### Issue 3: Performance Issues on Mobile
**Problem:** Animations causing lag

**Solution:** Use performance utilities
```jsx
import { useOptimizedBackgrounds } from '../components/backgrounds/performanceUtils';

const MyComponent = () => {
  const settings = useOptimizedBackgrounds();
  
  return (
    <TechBackground 
      variant="grid" 
      intensity={settings.intensity}
      animated={settings.animated}
    />
  );
};
```

### Issue 4: Text Hard to Read
**Problem:** Insufficient contrast

**Solution:** Add gradient overlay or adjust background
```jsx
<TechBackground variant="grid" intensity="low" />
<div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40 dark:from-black/40 dark:to-black/20" />
<GrainTexture />
```

## 📝 Step-by-Step Migration Checklist

### For Each Page:

1. **Import Components**
   ```jsx
   import TechBackground from '../components/backgrounds/TechBackground';
   import { GlowOrbs, GrainTexture, ... } from '../components/backgrounds/BackgroundEffects';
   ```

2. **Identify Background Sections**
   - Find all `<section>` or `<div>` elements with background effects
   - Note what type of background each has

3. **Replace Background Code**
   - Remove old inline background divs
   - Add new background components
   - Ensure `relative` class on section
   - Add `relative z-10` to content

4. **Add GrainTexture**
   ```jsx
   <GrainTexture />
   ```
   Always add this as the final layer!

5. **Test Responsiveness**
   - Check on mobile (< 768px)
   - Check on tablet (768-1023px)
   - Check on desktop (> 1024px)

6. **Test Theme Switching**
   - Verify in light mode
   - Verify in dark mode
   - Check text contrast

7. **Optimize Performance**
   - Monitor FPS (aim for 60fps)
   - Reduce particle counts if needed
   - Consider disabling animations on mobile

## 🎯 Real Example: Home.jsx

### Before
```jsx
const Home = () => {
  return (
    <div>
      <section className="relative min-h-screen">
        <div className="absolute inset-0 opacity-[0.15]">
          <div style={{ 
            backgroundImage: 'linear-gradient(to right, rgb(99 102 241 / 0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px' 
          }} />
        </div>
        <motion.div className="absolute inset-0">
          <svg>
            <motion.path d="M..." stroke="..." />
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6">
          <h1>Welcome</h1>
        </div>
      </section>
      
      <section className="py-32 bg-gray-50">
        {/* More background divs */}
        <div className="container mx-auto px-6">
          <div className="grid">...</div>
        </div>
      </section>
    </div>
  );
};
```

### After
```jsx
import TechBackground from '../components/backgrounds/TechBackground';
import { 
  DataFlowLines, 
  GlowOrbs, 
  AnimatedGrid,
  GrainTexture 
} from '../components/backgrounds/BackgroundEffects';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <TechBackground variant="grid" intensity="medium" />
        <DataFlowLines lineCount={3} />
        <GlowOrbs orbs={[
          { color: 'blue', position: 'top-left', size: 'large' }
        ]} />
        <GrainTexture />
        
        <div className="container mx-auto px-6 relative z-10">
          <h1>Welcome</h1>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="relative py-32 bg-gray-50 dark:bg-gray-900">
        <AnimatedGrid cellSize={80} scanLines={true} />
        <GrainTexture opacity={0.02} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid">...</div>
        </div>
      </section>
    </div>
  );
};
```

## 🚀 Quick Migration Script

For bulk updates, you can use this pattern:

```bash
# 1. Backup your files
cp src/pages/Home.jsx src/pages/Home.jsx.backup

# 2. Add imports at the top of each file
# (Do this manually or with a script)

# 3. Replace common patterns
# Find: <div className="absolute inset-0 opacity-\[.*\]">
# Replace with: <TechBackground variant="grid" />

# 4. Add GrainTexture before closing section
# Find: </section>
# Replace: <GrainTexture /></section>

# 5. Add z-10 to content containers
# Find: <div className="container
# Replace: <div className="container ... relative z-10
```

## 📚 Additional Resources

- **Full Documentation**: `src/components/backgrounds/README.md`
- **Quick Reference**: `BACKGROUND_REFERENCE.md`
- **Live Examples**: `src/pages/About.jsx`
- **Interactive Demo**: `src/pages/BackgroundShowcase.jsx`

## 💡 Best Practices During Migration

1. **Migrate One Section at a Time**
   - Don't try to do everything at once
   - Test after each section

2. **Start with Simpler Sections**
   - Begin with content sections (minimal backgrounds)
   - Move to hero/CTA sections last

3. **Keep Old Code Commented**
   ```jsx
   {/* OLD CODE
   <div className="absolute inset-0">...</div>
   */}
   
   {/* NEW CODE */}
   <TechBackground variant="grid" />
   ```

4. **Test Incrementally**
   - After each section, test in browser
   - Check console for errors
   - Verify visual appearance

5. **Document Changes**
   - Note which variant you used for each section
   - Document any custom settings
   - Keep track of performance impacts

## ✅ Migration Complete Checklist

- [ ] All imports added
- [ ] All sections updated
- [ ] GrainTexture added everywhere
- [ ] Content has `relative z-10`
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Performance is good (60fps)
- [ ] Text is readable
- [ ] Old code removed
- [ ] Committed to git

---

Need help? Check the demo page or refer to the comprehensive documentation!
