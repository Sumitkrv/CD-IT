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

// Content states data
const contentStates = [
  {
    id: 1,
    theme: 'Reliable Cloud Infrastructure',
    headline: 'Enterprise Cloud, Engineered for Scale',
    description: 'Architect, deploy, and manage mission-critical cloud infrastructure with zero-tradeoff reliability. Our platform ensures consistent performance at any scale, backed by 99.99% uptime SLAs.',
    ctaPrimary: 'Start Architecture Review',
    ctaSecondary: 'View Case Studies',
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '<50ms', label: 'Global Latency' },
      { value: '10s+', label: 'Deployments/Day' }
    ],
    visualType: 'cloud',
    icon: <Cloud className="w-6 h-6" />,
    color: 'blue',
    // Unsplash: Modern server room, data center infrastructure, cloud computing visuals
    backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80'
  },
  {
    id: 2,
    theme: 'Secure Enterprise Systems',
    headline: 'Security That Never Sleeps',
    description: 'End-to-end zero-trust security architecture with real-time threat intelligence. Protect your most sensitive assets with enterprise-grade encryption and continuous monitoring.',
    ctaPrimary: 'Request Security Audit',
    ctaSecondary: 'Compliance Guide',
    stats: [
      { value: '256-bit', label: 'Encryption' },
      { value: '24/7', label: 'SOC Monitoring' },
      { value: 'SOC2', label: 'Compliant' }
    ],
    visualType: 'security',
    icon: <Shield className="w-6 h-6" />,
    color: 'emerald',
    // Unsplash: Cybersecurity, digital security, network protection visuals
    backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80'
  },
  {
    id: 3,
    theme: 'AI-Driven Business Intelligence',
    headline: 'Intelligence That Powers Decisions',
    description: 'Transform raw data into actionable insights with machine learning models that adapt to your business logic. Real-time analytics with predictive forecasting.',
    ctaPrimary: 'Explore Platform',
    ctaSecondary: 'Watch Demo',
    stats: [
      { value: '200ms', label: 'Query Response' },
      { value: '95%', label: 'Forecast Accuracy' },
      { value: 'Real-time', label: 'Data Processing' }
    ],
    visualType: 'analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'violet',
    // Unsplash: Data analytics, business intelligence, dashboard visualizations
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80'
  },
  {
    id: 4,
    theme: 'Scalable Digital Platforms',
    headline: 'Platforms That Grow With You',
    description: 'Build and operate digital products that scale seamlessly with user demand. Our architecture patterns ensure performance remains consistent through exponential growth.',
    ctaPrimary: 'Schedule Architecture Call',
    ctaSecondary: 'Technical Documentation',
    stats: [
      { value: '10M+', label: 'Concurrent Users' },
      { value: 'Auto-scale', label: 'Infrastructure' },
      { value: '99.95%', label: 'Reliability' }
    ],
    visualType: 'platform',
    icon: <Server className="w-6 h-6" />,
    color: 'amber',
    // Unsplash: Modern architecture, scalable infrastructure, tech platforms
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

  // Auto-advance logic
  useEffect(() => {
    // Don't set timer if paused or hovering - progress bar handles the transition
    return;
  }, [isPaused, isHovering, currentStateIndex]);

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
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight tracking-tight"
                >
                  {currentState.headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl"
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
                  className="flex flex-col sm:flex-row gap-4 pt-8"
                >
                  <Link to="/contact">
                    <motion.button
                      variants={textVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative px-8 py-4 rounded-xl overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}`} />
                      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-3 text-white font-medium">
                        <span>{currentState.ctaPrimary}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.button>
                  </Link>

                  <Link to="/learn">
                    <motion.button
                      variants={textVariants}
                      whileHover={{ x: 4 }}
                      className="group px-8 py-4 bg-white border border-gray-300 hover:border-gray-400 rounded-xl text-gray-700 hover:text-gray-900 font-medium flex items-center gap-3 transition-all duration-300"
                    >
                      <span>{currentState.ctaSecondary}</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* State controls */}
            <div className="flex items-center gap-6 mt-12">
              <div className="flex items-center gap-2">
                {contentStates.map((state, index) => (
                  <button
                    key={state.id}
                    onClick={() => goToState(index)}
                    className="relative group"
                    aria-label={`Go to ${state.theme}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors" />
                    {index === currentStateIndex && (
                      <motion.div
                        layoutId="activeState"
                        className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-gray-800"
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all"
                aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isPaused ? (
                  <Play className="w-4 h-4 text-gray-700" />
                ) : (
                  <Pause className="w-4 h-4 text-gray-700" />
                )}
              </button>

              <div className="text-sm text-gray-500 font-light">
                <span className="font-medium text-gray-700">{currentStateIndex + 1}</span>
                <span className="mx-2">/</span>
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
                            Enterprise Dashboard
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs text-gray-600">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual content with Unsplash background */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {/* Unsplash Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={currentState.backgroundImage} 
                        alt={currentState.theme}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Dark overlay for better contrast with animated elements */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} mix-blend-multiply opacity-60`} />
                      {/* Additional subtle gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Background pattern - now more subtle */}
                    <div className="absolute inset-0 opacity-[0.02]">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                      }} />
                    </div>
                  </div>
                </div>

                {/* Background glow */}
                <div className={`absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-3xl blur-3xl -z-10`} />
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