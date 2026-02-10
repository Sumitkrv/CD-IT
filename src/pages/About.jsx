import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Building2, Users, Shield, Target, Award, Globe, Clock, Code2, CheckCircle, ChevronRight, ArrowRight, Cpu, Database, Cloud, Server, Network, Terminal, Cctv, Binary, CircuitBoardIcon, Radar } from 'lucide-react';
import TechBackground from '../components/backgrounds/TechBackground';
import { FloatingParticles, GlowOrbs, DataFlowLines, AnimatedGrid, CircuitBoard, Waveform, DotMatrix, GrainTexture } from '../components/backgrounds/BackgroundEffects';

// Enhanced CountUp component with tech pulses
const CountUp = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * numericValue);
      setCount(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <div className="relative inline-block">
      <span ref={ref} className="relative">
        {value.toString().includes('+') ? `${count}+` : value.toString().includes('/') ? value : count}
      </span>
      {/* Pulsing tech effect on complete */}
      {count > 0 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-full bg-blue-500/20"
        />
      )}
    </div>
  );
};

// New Tech Background Layer Component
const TechLayer = ({ intensity = 'medium', opacity = 0.1 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" style={{ opacity }}>
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,50 H80 M50,20 V80 M20,20 L80,80 M80,20 L20,80" 
                  stroke="rgb(99 102 241)" 
                  strokeWidth="0.5" 
                  fill="none" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      
      {/* Floating binary */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: ['0%', '100%'],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
            className="absolute text-xs font-mono text-blue-400/30 select-none"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Hex Grid Background
const HexGrid = ({ size = 50, color = 'rgb(99 102 241 / 0.05)' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-10">
        <defs>
          <pattern
            id="hexGrid"
            x="0"
            y="0"
            width={size}
            height={size * Math.sqrt(3)}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <polygon
              points={`
                ${size/2},0
                ${size},${size * Math.sqrt(3)/4}
                ${size},${size * 3 * Math.sqrt(3)/4}
                ${size/2},${size * Math.sqrt(3)}
                0,${size * 3 * Math.sqrt(3)/4}
                0,${size * Math.sqrt(3)/4}
              `}
              fill="none"
              stroke={color}
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
};

// Radar Sweep Effect
const RadarSweep = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh]"
      >
        <div className="w-full h-full relative">
          {/* Sweep line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-1/2">
            <div className="w-full h-full bg-gradient-to-t from-transparent via-blue-500/30 to-blue-500/10" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Data Stream Effect
const DataStream = ({ count = 8 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const left = (i * 100) / (count - 1);
        const delay = i * 0.3;
        const duration = 4 + Math.random() * 2;
        
        return (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
            className="absolute left-[calc(var(--left)*1%)] w-px h-20"
            style={{ '--left': left }}
          >
            <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
          </motion.div>
        );
      })}
    </div>
  );
};

// Tech Icons Float
const FloatingTechIcons = () => {
  const icons = [Cpu, Database, Cloud, Server, Network, Terminal, Cctv, Binary];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, i) => {
        const size = 16 + Math.random() * 32;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 20 + Math.random() * 20;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: -size,
              y: Math.random() * 100,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              x: '100vw',
              y: Math.random() * 100,
              opacity: [0, 0.3, 0],
              rotate: 360
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
            className="absolute"
            style={{ left: `${left}%` }}
          >
            <Icon 
              size={size} 
              className="text-blue-400/20"
              strokeWidth={0.5}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const About = () => {
  const metrics = [
    { value: '10+', label: 'Years in Business', icon: Building2 },
    { value: '100+', label: 'Projects Delivered', icon: Code2 },
    { value: 'Multi', label: 'Industry Sectors', icon: Globe },
    { value: '24/7', label: 'Client Support', icon: Clock }
  ];

  // Enhanced Hero Section with Tech Background
  const HeroBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      
      {/* Neural network effect */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-[0.15] dark:opacity-[0.1]">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <circle 
                cx={`${10 + i * 12}%`} 
                cy={`${30 + Math.sin(i) * 20}%`}
                r="4" 
                fill="none" 
                stroke="rgb(99 102 241)" 
                strokeWidth="0.5"
              />
              {[...Array(3)].map((_, j) => (
                <line 
                  key={j}
                  x1={`${10 + i * 12}%`} 
                  y1={`${30 + Math.sin(i) * 20}%`}
                  x2={`${15 + j * 10}%`} 
                  y2={`${60 + Math.cos(j) * 15}%`}
                  stroke="rgb(99 102 241 / 0.3)" 
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                />
              ))}
            </g>
          ))}
        </svg>
      </div>
      
      {/* Floating tech elements */}
      <FloatingTechIcons />
      
      {/* Data streams */}
      <DataStream count={6} />
      
      {/* Hex grid */}
      <HexGrid size={80} color="rgb(99 102 241 / 0.08)" />
      
      {/* Radar sweep */}
      <RadarSweep />
      
      {/* Grain texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noise)%22%20opacity=%220.02%22/%3E%3C/svg%3E')]" />
    </div>
  );

  // Enhanced section backgrounds
  const SectionBackground = ({ children, className = '', techIntensity = 'medium' }) => (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Tech overlay */}
      <div className="absolute inset-0">
        <TechLayer intensity={techIntensity} />
      </div>
      {children}
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-950 relative">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroBackground />
        
        {/* Vertical Rule with tech effect */}
        <div className="absolute left-12 top-24 bottom-24 w-px">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/40 to-transparent"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-20 max-w-7xl py-32 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-16">
              {/* Tech badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full"
              >
                <Cpu className="w-3 h-3 text-blue-500" />
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">ENTERPRISE-TECH</span>
              </motion.div>
              
              {/* Headline */}
              <div className="space-y-2">
                {[
                  "At CD, we don't just build",
                  'technology —',
                  'we build systems',
                  'businesses can trust'
                ].map((line, i) => (
                  <motion.h1
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.05]"
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-6 max-w-2xl relative"
              >
                
              </motion.div>

              {/* CTA with tech hover effect */}
              <div className="mt-8">
                <div className="ml-8">
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <motion.button
                      whileHover={{ x: 8 }}
                      className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg overflow-hidden"
                    >
                      <span className="relative z-10">View Our Work</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                      {/* Tech pulse effect */}
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image with tech overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
                <img
                  src="/CD-IT Images/about hero section 2.png"
                  alt="Enterprise infrastructure"
                  className="w-full h-full object-cover"
                />
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
                <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
              </div>
              
              {/* Floating tech stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl"
              >
                <div className="text-5xl font-light text-gray-900 dark:text-white mb-2 tabular-nums flex items-center gap-2">
                  13
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="text-xs font-mono text-gray-500 dark:text-gray-400">YEARS OF EXCELLENCE</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Metrics Section */}
      <SectionBackground 
        className="py-32 border-t border-gray-200 dark:border-gray-800"
        techIntensity="high"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Digital network background"
            className="w-full h-full object-cover opacity-5 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-gray-950 dark:via-transparent dark:to-gray-950" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-16"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Animated border */}
                <div className="absolute -inset-2 sm:-inset-4 border border-blue-500/10 rounded-2xl group-hover:border-blue-500/30 transition-colors duration-500" />
                
                <div className="relative p-4 sm:p-6">
                  {/* Icon with glow */}
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl" />
                    <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 relative z-10" />
                  </div>
                  
                  {/* Metric value */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-2 sm:mb-4 tabular-nums">
                    <CountUp value={metric.value} duration={2000 + index * 200} />
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {metric.label}
                  </div>
                  
                  {/* Tech indicator */}
                  <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 dark:text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    LIVE METRIC
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionBackground>

      {/* Enhanced Philosophy Section */}
      <SectionBackground className="py-48 border-t border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0">
          {/* Circuit diagram */}
          <svg className="w-full h-full opacity-[0.1] dark:opacity-[0.05]">
            <path
              d="M20,100 C100,20 300,180 400,100 S600,20 700,100"
              fill="none"
              stroke="rgb(99 102 241)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <CircuitBoardIcon className="w-5 h-5 text-blue-500" />
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">WORK-METHODOLOGY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1]">
              How We Work
            </h2>
          </motion.div>
          
          {/* Philosophy content with tech blocks */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  title: "Clarity Before Code",
                  description: "We begin by understanding your business goals, workflows, and challenges. This ensures every solution we design is practical, relevant, and aligned with real-world operations.",
                  tagline: "Great solutions begin with understanding, not assumptions."
                },
                {
                  title: "Architecture Before Execution",
                  description: "Scalability, security, and performance are built into our systems from day one. Strong architecture reduces risk and supports sustainable growth.",
                  tagline: "Strong foundations create scalable systems."
                },
                {
                  title: "Build With Purpose",
                  description: "We use proven technologies and clean engineering practices to deliver stable, efficient, and maintainable solutions.",
                  tagline: "Code is not just written — it's engineered."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group space-y-3"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 relative">
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional image card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 relative overflow-hidden rounded-xl"
              >
                <img 
                  src="/CD-IT Images/about architectural principles 1 1.avif"
                  alt="How we work in practice"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Our Methodology in Action</p>
                </div>
              </motion.div>
            </div>
            
            {/* Tech visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="System architecture"
                  className="w-full h-full object-cover"
                />
                {/* Tech overlay grid */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(59,130,246,0.1)_100%)] bg-[length:40px_40px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </SectionBackground>

      {/* Our Way of Thinking Section */}
      <SectionBackground 
        className="py-24 border-t border-gray-200 dark:border-gray-800"
        techIntensity="medium"
      >
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-8">
              Our Way of Thinking
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe technology should be clear, reliable, and purposeful.<br />
              Every decision we make is guided by business impact, system stability, and future scalability —<br />
              not trends or shortcuts.
            </p>
          </motion.div>

          {/* Content Grid with Images */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - Principles List */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 mb-12"
              >
                {[
                  'Business-first mindset',
                  'Thoughtful system design',
                  'Clean and maintainable development',
                  'Continuous improvement approach'
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 text-lg text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{principle}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Closing statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-2xl font-light text-gray-900 dark:text-white italic">
                  Smart technology is simple, stable, and scalable.
                </p>
              </motion.div>
            </div>

            {/* Right side - Images */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-xl aspect-video"
              >
                <img
                  src="/CD-IT Images/about discovery phase.png"
                  alt="Discovery and planning phase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Strategic Planning & Execution</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative overflow-hidden rounded-xl aspect-video"
              >
                <img
                  src="/CD-IT Images/about architecture design.png"
                  alt="Architecture and system design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Engineering Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
};

export default About;