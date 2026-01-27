import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * TechBackground - Premium background system for modern web applications
 * 
 * Variants:
 * - grid: Subtle grid pattern with animated lines
 * - particles: Floating particles with connections
 * - waves: Flowing wave patterns
 * - circuit: Circuit-board inspired lines
 * - mesh: Gradient mesh with blur
 * - minimal: Ultra-clean with subtle accents
 */

const TechBackground = ({ 
  variant = 'grid',
  intensity = 'medium', // low, medium, high
  animated = true,
  className = ''
}) => {
  const intensityMap = {
    low: { opacity: 0.03, blur: 40 },
    medium: { opacity: 0.06, blur: 30 },
    high: { opacity: 0.1, blur: 20 }
  };

  const settings = intensityMap[intensity];

  // Memoize the variant component to prevent unnecessary re-renders
  const variantComponent = useMemo(() => {
    switch (variant) {
      case 'grid':
        return <GridBackground animated={animated} settings={settings} />;
      case 'particles':
        return <ParticlesBackground animated={animated} settings={settings} />;
      case 'waves':
        return <WavesBackground animated={animated} settings={settings} />;
      case 'circuit':
        return <CircuitBackground animated={animated} settings={settings} />;
      case 'mesh':
        return <MeshBackground animated={animated} settings={settings} />;
      case 'minimal':
        return <MinimalBackground animated={animated} settings={settings} />;
      default:
        return <GridBackground animated={animated} settings={settings} />;
    }
  }, [variant, animated, settings]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variantComponent}
    </div>
  );
};

// Grid Background - Animated technical grid
const GridBackground = React.memo(({ animated, settings }) => {
  // Reduce number of animated lines on mobile
  const horizontalLines = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? [30, 70] : [20, 40, 60, 80];
  }, []);

  const verticalLines = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? [50] : [25, 50, 75];
  }, []);

  return (
    <>
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(99 102 241 / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(99 102 241 / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          willChange: 'auto'
        }}
      />
      
      {/* Animated Grid Lines */}
      {animated && (
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gridGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Horizontal scanning lines */}
            {horizontalLines.map((y, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0" y1={`${y}%`}
                x2="100%" y2={`${y}%`}
                stroke="url(#gridGlow)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{ 
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* Vertical scanning lines */}
            {verticalLines.map((x, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${x}%`} y1="0"
                x2={`${x}%`} y2="100%"
                stroke="url(#gridGlow)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{ 
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: 1 + i * 2.5,
                  ease: "linear"
                }}
              />
            ))}
          </svg>
        </motion.div>
      )}
      
      {/* Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          willChange: 'auto'
        }}
      />
    </>
  );
});

// Particles Background - Floating nodes with connections
const ParticlesBackground = React.memo(({ animated, settings }) => {
  // Reduce particle count on mobile
  const particleCount = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? 15 : 30;
  }, []);

  const particles = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * 5
    })), [particleCount]);

  const connectionCount = Math.min(15, Math.floor(particleCount / 2));

  return (
    <>
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04]">
        <defs>
          <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {particles.slice(0, connectionCount).map((p1, i) => {
          const p2 = particles[(i + 3) % particles.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${p1.x}%`} y1={`${p1.y}%`}
              x2={`${p2.x}%`} y2={`${p2.y}%`}
              stroke="url(#connectionGrad)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={animated ? { 
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0]
              } : {}}
              transition={{ 
                duration: 15 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </svg>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-blue-400/30 dark:to-violet-400/30 blur-[1px]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={animated ? {
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            } : { opacity: 0.6 }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-400/10 blur-3xl"
        animate={animated ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/5 dark:bg-violet-400/10 blur-3xl"
        animate={animated ? {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </>
  );
});

// Waves Background - Flowing data waves
const WavesBackground = React.memo(({ animated, settings }) => {
  const waveCount = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? 2 : 3;
  }, []);

  return (
    <>
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.04]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(139 92 246)" stopOpacity="0" />
          <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <motion.path
        d="M 0 30 Q 25 25, 50 30 T 100 30"
        stroke="url(#waveGrad1)"
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={animated ? { 
          pathLength: [0, 1],
          d: [
            "M 0 30 Q 25 25, 50 30 T 100 30",
            "M 0 30 Q 25 35, 50 30 T 100 30",
            "M 0 30 Q 25 25, 50 30 T 100 30"
          ]
        } : {}}
        transition={{ 
          pathLength: { duration: 3, ease: "easeInOut" },
          d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.path
        d="M 0 50 Q 25 55, 50 50 T 100 50"
        stroke="url(#waveGrad2)"
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={animated ? { 
          pathLength: [0, 1],
          d: [
            "M 0 50 Q 25 55, 50 50 T 100 50",
            "M 0 50 Q 25 45, 50 50 T 100 50",
            "M 0 50 Q 25 55, 50 50 T 100 50"
          ]
        } : {}}
        transition={{ 
          pathLength: { duration: 3, ease: "easeInOut", delay: 1 },
          d: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />
      
      <motion.path
        d="M 0 70 Q 25 65, 50 70 T 100 70"
        stroke="url(#waveGrad1)"
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={animated ? { 
          pathLength: [0, 1],
          d: [
            "M 0 70 Q 25 65, 50 70 T 100 70",
            "M 0 70 Q 25 75, 50 70 T 100 70",
            "M 0 70 Q 25 65, 50 70 T 100 70"
          ]
        } : {}}
        transition={{ 
          pathLength: { duration: 3, ease: "easeInOut", delay: 2 },
          d: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      />
    </svg>
    
    {/* Gradient Mesh */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-violet-950/20" />
  </>
  );
});

// Circuit Background - Tech circuit patterns
const CircuitBackground = React.memo(({ animated, settings }) => (
  <>
    <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04]">
      <defs>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Circuit nodes */}
      {[
        { x: 20, y: 20 }, { x: 40, y: 30 }, { x: 60, y: 25 }, { x: 80, y: 35 },
        { x: 25, y: 50 }, { x: 50, y: 55 }, { x: 75, y: 50 },
        { x: 30, y: 75 }, { x: 55, y: 80 }, { x: 70, y: 70 }
      ].map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="2"
          fill="url(#circuitGrad)"
          initial={{ opacity: 0 }}
          animate={animated ? {
            opacity: [0.3, 0.8, 0.3],
            r: [2, 3, 2]
          } : { opacity: 0.5 }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Circuit paths */}
      <motion.path
        d="M 20% 20% L 40% 30% L 60% 25% L 80% 35%"
        stroke="url(#circuitGrad)"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.6, 0.4]
        } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M 25% 50% L 50% 55% L 75% 50%"
        stroke="url(#circuitGrad)"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.6, 0.4]
        } : {}}
        transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M 30% 75% L 55% 80% L 70% 70%"
        stroke="url(#circuitGrad)"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.6, 0.4]
        } : {}}
        transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
      />
      
      {/* Vertical connections */}
      <motion.path
        d="M 40% 30% L 25% 50%"
        stroke="url(#circuitGrad)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={animated ? { pathLength: [0, 1] } : {}}
        transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M 60% 25% L 50% 55%"
        stroke="url(#circuitGrad)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={animated ? { pathLength: [0, 1] } : {}}
        transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
      />
    </svg>
    
    {/* Grid overlay */}
    <div 
      className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(99 102 241 / 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(99 102 241 / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}
    />
  </>
));

// Mesh Background - Glassmorphic gradient mesh
const MeshBackground = React.memo(({ animated, settings }) => (
  <>
    {/* Gradient blobs */}
    <motion.div
      className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        filter: `blur(${settings.blur}px)`
      }}
      animate={animated ? {
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.1, 1]
      } : {}}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <motion.div
      className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        filter: `blur(${settings.blur}px)`
      }}
      animate={animated ? {
        x: [0, -80, 0],
        y: [0, 80, 0],
        scale: [1, 1.15, 1]
      } : {}}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
    />
    
    <motion.div
      className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
        filter: `blur(${settings.blur}px)`
      }}
      animate={animated ? {
        x: [0, 60, 0],
        y: [0, -60, 0],
        scale: [1, 1.2, 1]
      } : {}}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
    />
    
    {/* Subtle grid */}
    <div 
      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(99 102 241 / 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(99 102 241 / 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }}
    />
  </>
));

// Minimal Background - Ultra-clean with accents
const MinimalBackground = React.memo(({ animated, settings }) => (
  <>
    {/* Subtle diagonal lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]">
      <defs>
        <linearGradient id="minimalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0" />
          <stop offset="50%" stopColor="rgb(99 102 241)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <motion.line
        x1="0" y1="0"
        x2="100%" y2="100%"
        stroke="url(#minimalGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.4, 0]
        } : {}}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.line
        x1="100%" y1="0"
        x2="0" y2="100%"
        stroke="url(#minimalGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animated ? {
          pathLength: [0, 1],
          opacity: [0, 0.4, 0]
        } : {}}
        transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: 10 }}
      />
    </svg>
    
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-200/20 dark:border-blue-800/20" />
    <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-violet-200/20 dark:border-violet-800/20" />
    <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-indigo-200/20 dark:border-indigo-800/20" />
    <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-200/20 dark:border-blue-800/20" />
    
    {/* Single glow orb */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-400/8 blur-3xl"
      animate={animated ? {
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      } : {}}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
));

export default React.memo(TechBackground);
