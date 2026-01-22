import React from 'react';
import { motion } from 'framer-motion';

/**
 * Specialized background effects that can be composed together
 * These are modular building blocks for creating custom backgrounds
 */

// Floating Particles - Network-style particles with connections
export const FloatingParticles = ({ 
  count = 30, 
  connectionDistance = 150,
  animated = true,
  className = ''
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 30,
    delay: Math.random() * 5
  }));

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-violet-400/30 dark:from-blue-300/40 dark:to-violet-300/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: '0 0 8px rgba(59, 130, 246, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={animated ? {
            opacity: [0, 0.8, 0.8, 0],
            scale: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          } : { opacity: 0.8 }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Connection Lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <linearGradient id="particleConnection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {particles.slice(0, 20).map((p1, i) => {
          const p2 = particles[(i + 4) % particles.length];
          return (
            <motion.line
              key={`connection-${i}`}
              x1={`${p1.x}%`} y1={`${p1.y}%`}
              x2={`${p2.x}%`} y2={`${p2.y}%`}
              stroke="url(#particleConnection)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={animated ? { 
                pathLength: [0, 1, 0.5, 0],
                opacity: [0, 0.6, 0.3, 0]
              } : {}}
              transition={{ 
                duration: 12 + i,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

// Data Flow Lines - Animated flowing data streams
export const DataFlowLines = ({ 
  lineCount = 5,
  animated = true,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.06]">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0" />
            <stop offset="30%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="rgb(139 92 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: lineCount }).map((_, i) => {
          const yPos = (100 / (lineCount + 1)) * (i + 1);
          const isReverse = i % 2 === 1;
          
          return (
            <motion.line
              key={`flow-${i}`}
              x1={isReverse ? "100%" : "0"}
              y1={`${yPos}%`}
              x2={isReverse ? "0" : "100%"}
              y2={`${yPos}%`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={animated ? {
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.8, 0.8, 0]
              } : {}}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

// Glow Orbs - Soft ambient lighting effects
export const GlowOrbs = ({ 
  orbs = [
    { color: 'blue', position: 'top-left', size: 'large' },
    { color: 'violet', position: 'bottom-right', size: 'medium' }
  ],
  animated = true,
  className = ''
}) => {
  const positionMap = {
    'top-left': 'top-1/4 left-1/4',
    'top-right': 'top-1/4 right-1/4',
    'bottom-left': 'bottom-1/4 left-1/4',
    'bottom-right': 'bottom-1/4 right-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  const sizeMap = {
    'small': 'w-64 h-64',
    'medium': 'w-96 h-96',
    'large': 'w-[600px] h-[600px]'
  };

  const colorMap = {
    'blue': 'bg-blue-500/8 dark:bg-blue-400/12',
    'violet': 'bg-violet-500/8 dark:bg-violet-400/12',
    'indigo': 'bg-indigo-500/8 dark:bg-indigo-400/12',
    'cyan': 'bg-cyan-500/8 dark:bg-cyan-400/12'
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${positionMap[orb.position]} ${sizeMap[orb.size]} ${colorMap[orb.color]}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animated ? {
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          } : { opacity: 0.5 }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
};

// Animated Grid - Technical grid with scanning effect
export const AnimatedGrid = ({
  cellSize = 64,
  lineColor = 'rgb(99 102 241)',
  scanLines = true,
  animated = true,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`
        }}
      />
      
      {/* Scanning Lines */}
      {scanLines && animated && (
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="scanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {[15, 35, 55, 75, 90].map((y, i) => (
            <motion.line
              key={`scan-h-${i}`}
              x1="0" y1={`${y}%`}
              x2="100%" y2={`${y}%`}
              stroke="url(#scanGlow)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.8, 0.8, 0]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
};

// Circuit Board Pattern - Tech circuit aesthetic
export const CircuitBoard = ({
  nodeCount = 12,
  animated = true,
  className = ''
}) => {
  const nodes = Array.from({ length: nodeCount }, (_, i) => ({
    x: (i % 4) * 25 + 12.5,
    y: Math.floor(i / 4) * 33 + 16.5,
    connections: i < nodeCount - 1 ? [i + 1] : []
  }));

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04]">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connection paths */}
        {nodes.map((node, i) =>
          node.connections.map((targetIdx) => {
            const target = nodes[targetIdx];
            return (
              <motion.path
                key={`path-${i}-${targetIdx}`}
                d={`M ${node.x}% ${node.y}% L ${target.x}% ${target.y}%`}
                stroke="url(#circuitGrad)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={animated ? {
                  pathLength: [0, 1],
                  opacity: [0, 0.7, 0.5]
                } : {}}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            );
          })
        )}
        
        {/* Circuit nodes */}
        {nodes.map((node, i) => (
          <motion.g key={`node-group-${i}`}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="url(#circuitGrad)"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={animated ? {
                opacity: [0, 1, 0.7],
                scale: [0, 1.2, 1],
                r: [2, 3, 2]
              } : { opacity: 0.7 }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: animated ? Infinity : 0,
                repeatDelay: 5,
                ease: "easeInOut"
              }}
            />
            {/* Outer ring */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              stroke="url(#circuitGrad)"
              strokeWidth="0.5"
              fill="none"
              initial={{ opacity: 0, scale: 0 }}
              animate={animated ? {
                opacity: [0, 0.5, 0],
                scale: [0.5, 1.5, 2],
              } : {}}
              transition={{
                duration: 3,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

// Waveform Pattern - Audio/data waveform
export const Waveform = ({
  waveCount = 3,
  animated = true,
  className = ''
}) => {
  const waves = [
    { color: 'rgb(59 130 246)', offset: 0, amplitude: 5 },
    { color: 'rgb(99 102 241)', offset: 10, amplitude: 7 },
    { color: 'rgb(139 92 246)', offset: 20, amplitude: 4 }
  ].slice(0, waveCount);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04]" preserveAspectRatio="none">
        <defs>
          {waves.map((wave, i) => (
            <linearGradient key={`waveGrad-${i}`} id={`waveGrad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={wave.color} stopOpacity="0" />
              <stop offset="50%" stopColor={wave.color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={wave.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        
        {waves.map((wave, i) => {
          const baseY = 33 + wave.offset;
          return (
            <motion.path
              key={`wave-${i}`}
              d={`M 0 ${baseY} Q 25 ${baseY - wave.amplitude}, 50 ${baseY} T 100 ${baseY}`}
              stroke={`url(#waveGrad${i})`}
              strokeWidth="1.5"
              fill="none"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={animated ? {
                pathLength: [0, 1],
                d: [
                  `M 0 ${baseY} Q 25 ${baseY - wave.amplitude}, 50 ${baseY} T 100 ${baseY}`,
                  `M 0 ${baseY} Q 25 ${baseY + wave.amplitude}, 50 ${baseY} T 100 ${baseY}`,
                  `M 0 ${baseY} Q 25 ${baseY - wave.amplitude}, 50 ${baseY} T 100 ${baseY}`
                ]
              } : {}}
              transition={{
                pathLength: { duration: 2, ease: "easeInOut" },
                d: { duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i }
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

// Dot Matrix - Network of dots
export const DotMatrix = ({
  rows = 8,
  cols = 12,
  animated = true,
  className = ''
}) => {
  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push({
        x: (col / (cols - 1)) * 100,
        y: (row / (rows - 1)) * 100,
        delay: (row + col) * 0.1
      });
    }
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.08]">
        <defs>
          <radialGradient id="dotGrad">
            <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        {dots.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r="1"
            fill="url(#dotGrad)"
            initial={{ opacity: 0.3, r: 1 }}
            animate={animated ? {
              opacity: [0.3, 0.8, 0.3],
              r: [1, 1.5, 1]
            } : {}}
            transition={{
              duration: 4,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Grain Texture - Film grain effect
export const GrainTexture = ({ 
  opacity = 0.025,
  className = ''
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none mix-blend-overlay ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }}
    />
  );
};

// Gradient Overlay - Smooth color transitions
export const GradientOverlay = ({
  from = 'blue-50/50',
  via = 'transparent',
  to = 'violet-50/50',
  direction = 'br', // tl, tr, bl, br, t, b, l, r
  className = ''
}) => {
  const directionMap = {
    'tl': 'to-tl',
    'tr': 'to-tr',
    'bl': 'to-bl',
    'br': 'to-br',
    't': 'to-t',
    'b': 'to-b',
    'l': 'to-l',
    'r': 'to-r'
  };

  return (
    <div className={`absolute inset-0 bg-gradient-${directionMap[direction]} from-${from} via-${via} to-${to} ${className}`} />
  );
};

export default {
  FloatingParticles,
  DataFlowLines,
  GlowOrbs,
  AnimatedGrid,
  CircuitBoard,
  Waveform,
  DotMatrix,
  GrainTexture,
  GradientOverlay
};
