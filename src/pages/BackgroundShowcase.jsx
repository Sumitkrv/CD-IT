import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechBackground from '../components/backgrounds/TechBackground';
import { 
  FloatingParticles, 
  DataFlowLines, 
  GlowOrbs, 
  AnimatedGrid,
  CircuitBoard,
  Waveform,
  DotMatrix,
  GrainTexture 
} from '../components/backgrounds/BackgroundEffects';

const BackgroundShowcase = () => {
  const [activeVariant, setActiveVariant] = useState('grid');
  const [intensity, setIntensity] = useState('medium');
  const [animated, setAnimated] = useState(true);

  const variants = [
    { 
      id: 'grid', 
      name: 'Grid', 
      description: 'Technical grid with animated scanning lines',
      use: 'Hero sections, feature showcases'
    },
    { 
      id: 'particles', 
      name: 'Particles', 
      description: 'Floating nodes with network connections',
      use: 'About pages, team sections'
    },
    { 
      id: 'waves', 
      name: 'Waves', 
      description: 'Flowing data wave patterns',
      use: 'Data dashboards, analytics'
    },
    { 
      id: 'circuit', 
      name: 'Circuit', 
      description: 'Circuit board aesthetic with nodes and paths',
      use: 'Technical documentation, developer tools'
    },
    { 
      id: 'mesh', 
      name: 'Mesh', 
      description: 'Glassmorphic gradient mesh with blur',
      use: 'Landing pages, marketing'
    },
    { 
      id: 'minimal', 
      name: 'Minimal', 
      description: 'Ultra-clean with subtle diagonal accents',
      use: 'Content-heavy pages, blogs'
    }
  ];

  const compositions = [
    {
      id: 'hero',
      name: 'Hero Premium',
      description: 'Grid + Data Flow + Glows',
      component: (
        <>
          <TechBackground variant="grid" intensity={intensity} animated={animated} />
          <DataFlowLines lineCount={3} animated={animated} />
          <GlowOrbs 
            orbs={[
              { color: 'blue', position: 'top-left', size: 'large' },
              { color: 'violet', position: 'bottom-right', size: 'medium' }
            ]}
            animated={animated}
          />
          <GrainTexture opacity={0.03} />
        </>
      )
    },
    {
      id: 'technical',
      name: 'Technical Hub',
      description: 'Circuit + Grid + Flow',
      component: (
        <>
          <AnimatedGrid cellSize={64} scanLines={true} animated={animated} />
          <CircuitBoard nodeCount={12} animated={animated} />
          <DataFlowLines lineCount={4} animated={animated} />
          <GrainTexture opacity={0.025} />
        </>
      )
    },
    {
      id: 'minimal',
      name: 'Minimal Pro',
      description: 'Dots + Single Glow',
      component: (
        <>
          <DotMatrix rows={8} cols={12} animated={animated} />
          <GlowOrbs 
            orbs={[{ color: 'cyan', position: 'center', size: 'large' }]}
            animated={animated}
          />
          <GrainTexture opacity={0.02} />
        </>
      )
    },
    {
      id: 'data',
      name: 'Data Flow',
      description: 'Waves + Particles + Grid',
      component: (
        <>
          <Waveform waveCount={3} animated={animated} />
          <FloatingParticles count={25} animated={animated} />
          <AnimatedGrid cellSize={80} scanLines={false} animated={animated} />
          <GrainTexture opacity={0.025} />
        </>
      )
    }
  ];

  const [activeComposition, setActiveComposition] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-2">
            Background System Showcase
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Premium tech backgrounds for modern web applications
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            {/* Animation Controls */}
            <div className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Controls
              </h3>
              
              {/* Animated Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Animations</span>
                  <button
                    onClick={() => setAnimated(!animated)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      animated ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      animated ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </label>
              </div>

              {/* Intensity Selector */}
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Intensity
                </label>
                <div className="space-y-2">
                  {['low', 'medium', 'high'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setIntensity(level)}
                      className={`w-full px-4 py-2 text-sm text-left border transition-colors ${
                        intensity === level
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Variant List */}
            <div className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Single Variants
              </h3>
              <div className="space-y-2">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => {
                      setActiveVariant(variant.id);
                      setActiveComposition(null);
                    }}
                    className={`w-full px-4 py-3 text-left border transition-colors ${
                      activeVariant === variant.id && !activeComposition
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className={`text-sm font-medium ${
                      activeVariant === variant.id && !activeComposition
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {variant.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {variant.use}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Composition List */}
            <div className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Compositions
              </h3>
              <div className="space-y-2">
                {compositions.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setActiveComposition(comp.id)}
                    className={`w-full px-4 py-3 text-left border transition-colors ${
                      activeComposition === comp.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className={`text-sm font-medium ${
                      activeComposition === comp.id
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {comp.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {comp.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-9">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Info Bar */}
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {activeComposition 
                        ? compositions.find(c => c.id === activeComposition)?.name
                        : variants.find(v => v.id === activeVariant)?.name
                      }
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {activeComposition 
                        ? compositions.find(c => c.id === activeComposition)?.description
                        : variants.find(v => v.id === activeVariant)?.description
                      }
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                    {intensity} · {animated ? 'animated' : 'static'}
                  </div>
                </div>
              </div>

              {/* Preview Canvas */}
              <div className="relative h-[600px] bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
                {activeComposition ? (
                  compositions.find(c => c.id === activeComposition)?.component
                ) : (
                  <>
                    <TechBackground 
                      variant={activeVariant} 
                      intensity={intensity} 
                      animated={animated}
                    />
                    <GrainTexture opacity={0.025} />
                  </>
                )}

                {/* Content Overlay to Test Readability */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center max-w-2xl px-6">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6"
                    >
                      Premium Background
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-xl text-gray-600 dark:text-gray-400 font-light"
                    >
                      Test text readability and visual hierarchy with various background effects
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="mt-8 flex gap-4 justify-center"
                    >
                      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
                        Primary CTA
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-600 font-medium transition-colors">
                        Secondary
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Code Sample */}
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                <details className="cursor-pointer">
                  <summary className="text-sm font-medium text-gray-900 dark:text-white">
                    View Code
                  </summary>
                  <pre className="mt-4 p-4 bg-gray-900 dark:bg-gray-950 text-gray-100 text-xs rounded overflow-x-auto">
                    <code>
{activeComposition ? `// ${compositions.find(c => c.id === activeComposition)?.name}
${compositions.find(c => c.id === activeComposition)?.description}

<section className="relative">
  ${compositions.find(c => c.id === activeComposition)?.id === 'hero' ? `<TechBackground variant="grid" intensity="${intensity}" animated={${animated}} />
  <DataFlowLines lineCount={3} animated={${animated}} />
  <GlowOrbs orbs={[...]} animated={${animated}} />
  <GrainTexture opacity={0.03} />` : ''}
  ${compositions.find(c => c.id === activeComposition)?.id === 'technical' ? `<AnimatedGrid cellSize={64} scanLines={true} animated={${animated}} />
  <CircuitBoard nodeCount={12} animated={${animated}} />
  <DataFlowLines lineCount={4} animated={${animated}} />
  <GrainTexture opacity={0.025} />` : ''}
  ${compositions.find(c => c.id === activeComposition)?.id === 'minimal' ? `<DotMatrix rows={8} cols={12} animated={${animated}} />
  <GlowOrbs orbs={[{ color: 'cyan', position: 'center', size: 'large' }]} />
  <GrainTexture opacity={0.02} />` : ''}
  ${compositions.find(c => c.id === activeComposition)?.id === 'data' ? `<Waveform waveCount={3} animated={${animated}} />
  <FloatingParticles count={25} animated={${animated}} />
  <AnimatedGrid cellSize={80} scanLines={false} />
  <GrainTexture opacity={0.025} />` : ''}
  
  {/* Your content here */}
</section>` : `// ${variants.find(v => v.id === activeVariant)?.name} Variant
// ${variants.find(v => v.id === activeVariant)?.description}

<section className="relative">
  <TechBackground 
    variant="${activeVariant}" 
    intensity="${intensity}" 
    animated={${animated}}
  />
  <GrainTexture opacity={0.025} />
  
  {/* Your content here */}
</section>`}
                    </code>
                  </pre>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundShowcase;
