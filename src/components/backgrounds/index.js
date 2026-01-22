// Main background system exports
export { default as TechBackground } from './TechBackground';

// Individual effect components
export {
  FloatingParticles,
  DataFlowLines,
  GlowOrbs,
  AnimatedGrid,
  CircuitBoard,
  Waveform,
  DotMatrix,
  GrainTexture,
  GradientOverlay
} from './BackgroundEffects';

// Quick access to default compositions
export const BackgroundPresets = {
  // Hero Section - Premium Grid
  hero: {
    variant: 'grid',
    intensity: 'medium',
    effects: ['DataFlowLines', 'GlowOrbs', 'GrainTexture']
  },
  
  // Feature Section - Particle Network
  features: {
    variant: 'particles',
    intensity: 'low',
    effects: ['GrainTexture']
  },
  
  // About/Team - Connection Theme
  about: {
    variant: 'particles',
    intensity: 'medium',
    effects: ['CircuitBoard', 'GlowOrbs', 'GrainTexture']
  },
  
  // Tech/Documentation - Circuit Board
  technical: {
    variant: 'circuit',
    intensity: 'medium',
    effects: ['AnimatedGrid', 'DataFlowLines', 'GrainTexture']
  },
  
  // CTA/Marketing - Smooth Mesh
  cta: {
    variant: 'mesh',
    intensity: 'high',
    effects: ['GlowOrbs', 'GrainTexture']
  },
  
  // Content - Minimal Clean
  content: {
    variant: 'minimal',
    intensity: 'low',
    effects: ['DotMatrix', 'GrainTexture']
  },
  
  // Dashboard - Data Waves
  dashboard: {
    variant: 'waves',
    intensity: 'medium',
    effects: ['Waveform', 'AnimatedGrid', 'GrainTexture']
  }
};

export default {
  TechBackground,
  FloatingParticles,
  DataFlowLines,
  GlowOrbs,
  AnimatedGrid,
  CircuitBoard,
  Waveform,
  DotMatrix,
  GrainTexture,
  GradientOverlay,
  BackgroundPresets
};
