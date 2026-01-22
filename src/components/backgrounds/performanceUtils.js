// Performance utilities for background system
// Detects device capabilities and adjusts background settings accordingly

export const detectDeviceCapabilities = () => {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isLowPowerMode = navigator.getBattery?.then(battery => battery.level < 0.2) || false;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    isMobile,
    isTablet,
    isLowPowerMode,
    prefersReducedMotion,
    shouldReduceAnimations: isMobile || prefersReducedMotion,
    shouldReduceEffects: isMobile
  };
};

export const getOptimizedBackgroundSettings = () => {
  const capabilities = detectDeviceCapabilities();
  
  return {
    // Animations
    animated: !capabilities.shouldReduceAnimations,
    
    // Particle counts
    particleCount: capabilities.isMobile ? 15 : capabilities.isTablet ? 25 : 30,
    
    // Intensity
    intensity: capabilities.isMobile ? 'low' : 'medium',
    
    // Grid cell size (larger on mobile = fewer grid lines)
    gridCellSize: capabilities.isMobile ? 96 : 64,
    
    // Flow line count
    flowLineCount: capabilities.isMobile ? 2 : capabilities.isTablet ? 3 : 5,
    
    // Circuit nodes
    circuitNodeCount: capabilities.isMobile ? 6 : capabilities.isTablet ? 10 : 12,
    
    // Wave count
    waveCount: capabilities.isMobile ? 1 : capabilities.isTablet ? 2 : 3,
    
    // Dot matrix dimensions
    dotRows: capabilities.isMobile ? 4 : capabilities.isTablet ? 6 : 8,
    dotCols: capabilities.isMobile ? 6 : capabilities.isTablet ? 9 : 12,
    
    // Grain opacity (lighter on mobile)
    grainOpacity: capabilities.isMobile ? 0.015 : 0.025,
    
    // Glow orb count (fewer on mobile)
    maxGlowOrbs: capabilities.isMobile ? 1 : capabilities.isTablet ? 2 : 3
  };
};

// Hook for responsive background settings
import { useState, useEffect } from 'react';

export const useOptimizedBackgrounds = () => {
  const [settings, setSettings] = useState(getOptimizedBackgroundSettings());
  
  useEffect(() => {
    const handleResize = () => {
      setSettings(getOptimizedBackgroundSettings());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return settings;
};

// Preset configurations for common use cases
export const backgroundPresets = {
  hero: (optimized = false) => ({
    variant: 'grid',
    intensity: optimized ? 'low' : 'medium',
    animated: !optimized,
    effects: [
      { type: 'DataFlowLines', props: { lineCount: optimized ? 2 : 3 } },
      { type: 'GlowOrbs', props: { 
        orbs: optimized 
          ? [{ color: 'blue', position: 'center', size: 'medium' }]
          : [
              { color: 'blue', position: 'top-left', size: 'large' },
              { color: 'violet', position: 'bottom-right', size: 'medium' }
            ]
      }},
      { type: 'GrainTexture', props: { opacity: optimized ? 0.015 : 0.03 } }
    ]
  }),
  
  features: (optimized = false) => ({
    variant: 'particles',
    intensity: 'low',
    animated: !optimized,
    effects: [
      { type: 'GrainTexture', props: { opacity: 0.02 } }
    ]
  }),
  
  technical: (optimized = false) => ({
    variant: 'circuit',
    intensity: optimized ? 'low' : 'medium',
    animated: !optimized,
    effects: [
      { type: 'AnimatedGrid', props: { 
        cellSize: optimized ? 96 : 64, 
        scanLines: !optimized 
      }},
      { type: 'CircuitBoard', props: { nodeCount: optimized ? 6 : 12 } },
      { type: 'GrainTexture', props: { opacity: 0.025 } }
    ]
  }),
  
  minimal: (optimized = false) => ({
    variant: 'minimal',
    intensity: 'low',
    animated: !optimized,
    effects: [
      { type: 'DotMatrix', props: { 
        rows: optimized ? 4 : 8, 
        cols: optimized ? 6 : 12 
      }},
      { type: 'GrainTexture', props: { opacity: 0.02 } }
    ]
  })
};

// Performance monitoring
export class BackgroundPerformanceMonitor {
  constructor() {
    this.fps = 60;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.isMonitoring = false;
  }
  
  start() {
    this.isMonitoring = true;
    this.measure();
  }
  
  stop() {
    this.isMonitoring = false;
  }
  
  measure() {
    if (!this.isMonitoring) return;
    
    const currentTime = performance.now();
    this.frameCount++;
    
    if (currentTime >= this.lastTime + 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      this.frameCount = 0;
      this.lastTime = currentTime;
      
      // Log performance warnings
      if (this.fps < 30) {
        console.warn('[Background Performance] Low FPS detected:', this.fps);
      }
    }
    
    requestAnimationFrame(() => this.measure());
  }
  
  getCurrentFPS() {
    return this.fps;
  }
  
  isPerformanceGood() {
    return this.fps >= 45;
  }
}

// Lazy loading for backgrounds
export const lazyLoadBackgrounds = (backgroundsToLoad) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add('background-loaded');
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );
    
    backgroundsToLoad.forEach((element) => {
      observer.observe(element);
    });
    
    return observer;
  }
  
  // Fallback: load immediately
  backgroundsToLoad.forEach((element) => {
    element.classList.add('background-loaded');
  });
};

// Utility to calculate optimal settings based on viewport
export const calculateOptimalSettings = (width, height) => {
  const area = width * height;
  const pixelDensity = window.devicePixelRatio || 1;
  
  // Calculate complexity score
  const complexityScore = area * pixelDensity;
  
  // Adjust settings based on complexity
  if (complexityScore < 1000000) {
    // Small/mobile screens
    return {
      particleCount: 10,
      gridSize: 120,
      animationSpeed: 0.5,
      intensity: 'low'
    };
  } else if (complexityScore < 3000000) {
    // Medium screens
    return {
      particleCount: 20,
      gridSize: 80,
      animationSpeed: 0.75,
      intensity: 'medium'
    };
  } else {
    // Large screens
    return {
      particleCount: 30,
      gridSize: 64,
      animationSpeed: 1,
      intensity: 'medium'
    };
  }
};

// Memory-efficient particle management
export class ParticlePool {
  constructor(maxParticles = 50) {
    this.maxParticles = maxParticles;
    this.activeParticles = [];
    this.inactiveParticles = [];
    
    // Pre-allocate particles
    for (let i = 0; i < maxParticles; i++) {
      this.inactiveParticles.push(this.createParticle(i));
    }
  }
  
  createParticle(id) {
    return {
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * 5,
      active: false
    };
  }
  
  activateParticle() {
    if (this.inactiveParticles.length === 0) return null;
    
    const particle = this.inactiveParticles.pop();
    particle.active = true;
    this.activeParticles.push(particle);
    return particle;
  }
  
  deactivateParticle(particleId) {
    const index = this.activeParticles.findIndex(p => p.id === particleId);
    if (index === -1) return;
    
    const particle = this.activeParticles.splice(index, 1)[0];
    particle.active = false;
    this.inactiveParticles.push(particle);
  }
  
  getActiveParticles() {
    return this.activeParticles;
  }
  
  reset() {
    this.activeParticles.forEach(p => {
      p.active = false;
      this.inactiveParticles.push(p);
    });
    this.activeParticles = [];
  }
}

export default {
  detectDeviceCapabilities,
  getOptimizedBackgroundSettings,
  useOptimizedBackgrounds,
  backgroundPresets,
  BackgroundPerformanceMonitor,
  lazyLoadBackgrounds,
  calculateOptimalSettings,
  ParticlePool
};
