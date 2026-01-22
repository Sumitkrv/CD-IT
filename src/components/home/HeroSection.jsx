import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  Cloud, 
  Shield, 
  BarChart3,
  Database,
  Server,
  Lock,
  Zap,
  Cpu,
  Pause,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const contentStates = [
  {
    id: 1,
    theme: 'Cloud Infrastructure',
    headline: 'Built for Scale',
    description: 'Deploy mission-critical infrastructure with 99.99% uptime. Auto-scaling architecture that handles exponential growth without configuration.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'View Case Studies',
    stats: [
      { value: '99.99%', label: 'Uptime' },
      { value: '<50ms', label: 'Latency' },
      { value: 'Auto', label: 'Scaling' }
    ],
    visualType: 'cloud',
    icon: <Cloud className="w-6 h-6" />,
    color: 'blue',
    backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80'
  },
  {
    id: 2,
    theme: 'Enterprise Security',
    headline: 'Security by Design',
    description: 'Zero-trust architecture with real-time threat detection. Enterprise-grade encryption and 24/7 monitoring built into every layer.',
    ctaPrimary: 'Request Audit',
    ctaSecondary: 'Security Docs',
    stats: [
      { value: '256-bit', label: 'Encryption' },
      { value: '24/7', label: 'Monitoring' },
      { value: 'SOC2', label: 'Certified' }
    ],
    visualType: 'security',
    icon: <Shield className="w-6 h-6" />,
    color: 'emerald',
    backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80'
  },
  {
    id: 3,
    theme: 'Data Intelligence',
    headline: 'Real-Time Intelligence',
    description: 'Transform data into decisions with predictive ML models. Sub-second queries across petabyte-scale datasets.',
    ctaPrimary: 'Explore Platform',
    ctaSecondary: 'Watch Demo',
    stats: [
      { value: '<200ms', label: 'Query Time' },
      { value: '95%', label: 'Accuracy' },
      { value: 'Live', label: 'Processing' }
    ],
    visualType: 'analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'violet',
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80'
  },
  {
    id: 4,
    theme: 'Digital Platforms',
    headline: 'Performance at Any Scale',
    description: 'Production-grade architecture supporting millions of concurrent users. Consistent performance from day one to IPO.',
    ctaPrimary: 'Schedule Call',
    ctaSecondary: 'Documentation',
    stats: [
      { value: '10M+', label: 'Users' },
      { value: 'Global', label: 'CDN' },
      { value: '99.95%', label: 'Uptime' }
    ],
    visualType: 'platform',
    icon: <Server className="w-6 h-6" />,
    color: 'amber',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80'
  }
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.98,
    clipPath: 'inset(0 100% 0 0)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      scale: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  },
  exit: {
    opacity: 0,
    clipPath: 'inset(0 0 0 100%)',
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const stateTransitionVariants = {
  enter: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0
    }
  },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const HeroSection = () => {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const currentState = contentStates[currentStateIndex];

  const nextState = useCallback(() => {
    setCurrentStateIndex((prev) => (prev + 1) % contentStates.length);
  }, []);

  const prevState = useCallback(() => {
    setCurrentStateIndex((prev) => (prev - 1 + contentStates.length) % contentStates.length);
  }, []);

  const goToState = useCallback((index) => {
    setCurrentStateIndex(index);
  }, []);

  // Color mapping
  const colorClasses = {
    blue: {
      gradient: 'from-blue-600 to-cyan-500',
      light: 'from-blue-50/50 to-cyan-50/30',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700'
    },
    emerald: {
      gradient: 'from-emerald-600 to-green-500',
      light: 'from-emerald-50/50 to-green-50/30',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700'
    },
    violet: {
      gradient: 'from-violet-600 to-purple-500',
      light: 'from-violet-50/50 to-purple-50/30',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-700'
    },
    amber: {
      gradient: 'from-amber-600 to-orange-500',
      light: 'from-amber-50/50 to-orange-50/30',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700'
    }
  };

  const colors = colorClasses[currentState.color];

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} transition-all duration-1000`} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px),
                               linear-gradient(180deg, #000 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
            }}
          />
        </div>
        
        {/* Thin horizontal divider lines */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentState.id}
                variants={stateTransitionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-8"
              >
                {/* Theme badge */}
                <motion.div
                  variants={textVariants}
                  className="inline-flex items-center gap-3"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                  <span className={`text-sm font-medium ${colors.text} tracking-wide`}>
                    {currentState.theme}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={textVariants}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight"
                >
                  {currentState.headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
                >
                  {currentState.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-6 pt-4"
                >
                  {currentState.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={textVariants}
                      className="pr-6 border-r border-gray-200 last:border-r-0 last:pr-0"
                    >
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-col sm:flex-row gap-3 pt-6"
                >
                  <Link to="/contact">
                    <motion.button
                      variants={textVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative px-8 py-3.5 rounded-xl overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}`} />
                      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-2.5 text-white font-medium">
                        <span>{currentState.ctaPrimary}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </motion.button>
                  </Link>

                  <Link to="/learn">
                    <motion.button
                      variants={textVariants}
                      whileHover={{ x: 2 }}
                      className="group px-8 py-3.5 bg-white border border-gray-300 hover:border-gray-400 rounded-xl text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2.5 transition-all duration-300"
                    >
                      <span>{currentState.ctaSecondary}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* State controls */}
            <div className="flex items-center gap-4 mt-12">
              <div className="flex items-center gap-2">
                {contentStates.map((state, index) => (
                  <button
                    key={state.id}
                    onClick={() => goToState(index)}
                    className="relative group"
                    aria-label={`Go to ${state.theme}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gray-500 transition-colors" />
                    {index === currentStateIndex && (
                      <motion.div
                        layoutId="activeState"
                        className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-gray-900"
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 text-gray-700" />
                ) : (
                  <Pause className="w-3.5 h-3.5 text-gray-700" />
                )}
              </button>

              <div className="text-sm text-gray-500 font-light">
                <span className="font-medium text-gray-700">{currentStateIndex + 1}</span>
                <span className="mx-1.5">/</span>
                <span>{contentStates.length}</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentState.id}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative"
              >
                {/* Visual container */}
                <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl">
                  {/* Visual header */}
                  <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                          {currentState.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {currentState.theme}
                          </div>
                          <div className="text-xs text-gray-500">
                            Production Dashboard
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-xs text-gray-600">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual content with Unsplash background */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0">
                      <img 
                        src={currentState.backgroundImage} 
                        alt={currentState.theme}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} mix-blend-multiply opacity-50`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    <div className="absolute inset-0 opacity-[0.015]">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                      }} />
                    </div>
                  </div>
                </div>

                {/* Background glow */}
                <div className={`absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-3xl blur-3xl -z-10`} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
        {!isPaused && !isHovering && (
          <motion.div
            key={currentState.id}
            className={`h-full bg-gradient-to-r ${colors.gradient}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 6, 
              ease: "linear"
            }}
            onAnimationComplete={() => {
              setCurrentStateIndex((prev) => (prev + 1) % contentStates.length);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;