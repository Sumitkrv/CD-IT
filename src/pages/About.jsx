import React, { useState, useEffect, useRef } from 'react';
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
    { value: '15+', label: 'Leadership Experience', icon: Users },
    { value: '50+', label: 'Certified Engineers', icon: Code2 },
    { value: '30+', label: 'Industry Consultants', icon: Users },
    { value: '24/7', label: 'Global Support', icon: Clock }
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
                  'Building the digital',
                  'infrastructure that powers',
                  'tomorrow\'s enterprises'
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
              
              {/* Manifesto with tech accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-6 max-w-2xl relative"
              >
                <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-transparent to-transparent" />
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-[1.6] pl-4 border-l border-blue-500/20">
                  CD Solutions architects <span className="text-blue-600 dark:text-blue-400 font-medium">reliable, scalable</span> digital systems for global enterprises.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-[1.7] pl-4 border-l border-gray-300/20 dark:border-gray-700/20">
                  We focus on long-term solutions that deliver <span className="font-medium">sustainable business value</span>.
                </p>
              </motion.div>

              {/* CTA with tech hover effect */}
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          {/* Tech header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <CircuitBoardIcon className="w-5 h-5 text-blue-500" />
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">SYSTEM-PHILOSOPHY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1]">
              Architectural<br />Principles
            </h2>
          </motion.div>
          
          {/* Philosophy content with tech blocks */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                "Since 2011, we've engineered systems that scale with purpose, not just capacity.",
                "Every architecture begins with understanding business objectives and technical constraints.",
                "We prioritize long-term viability over short-term trends, ensuring sustainable growth."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 relative">
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {text}
                    </p>
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
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Collaborative Engineering Excellence</p>
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
              
              {/* Floating code snippet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-lg border border-gray-800"
              >
                <div className="text-xs font-mono text-gray-300 space-y-1">
                  <div className="text-green-400">// System Architecture</div>
                  <div className="text-blue-400">const architecture = {'{'}</div>
                  <div className="text-cyan-400 pl-4">scalability: <span className="text-yellow-400">'infinite'</span>,</div>
                  <div className="text-cyan-400 pl-4">reliability: <span className="text-yellow-400">'99.99%'</span>,</div>
                  <div className="text-cyan-400 pl-4">maintenance: <span className="text-yellow-400">'zero-downtime'</span></div>
                  <div className="text-blue-400">{'}'};</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionBackground>

      {/* Enhanced How We Work Section */}
      <SectionBackground 
        className="py-48 border-t border-gray-200 dark:border-gray-800"
        techIntensity="medium"
      >
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-blue-500" />
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">DEVELOPMENT-LIFECYCLE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6">
              Engineering<br />Process
            </h2>
          </motion.div>

          {/* Process visualization */}
          <div className="relative mb-20">
            {/* Animated connection line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Discovery Phase',
                  description: 'Deep dive into requirements and constraints',
                  tech: 'Requirements Analysis',
                  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                },
                {
                  icon: Shield,
                  title: 'Architecture Design',
                  description: 'Scalable system design and technology selection',
                  tech: 'System Architecture',
                  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                },
                {
                  icon: Award,
                  title: 'Delivery & Support',
                  description: 'Implementation and ongoing optimization',
                  tech: 'DevOps & Support',
                  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Step Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl aspect-video">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Step info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-blue-500">
                        STEP 0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {step.tech}
                      </span>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Enhanced CTA Section */}
      <SectionBackground 
        className="py-48 border-t border-gray-200 dark:border-gray-800"
        techIntensity="high"
      >
        <div className="absolute inset-0">
          {/* CTA Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Data center"
            className="w-full h-full object-cover opacity-10 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-gray-950 dark:via-gray-950/95 dark:to-gray-950" />
          {/* Binary matrix background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0001_1px,transparent_1px),linear-gradient(to_bottom,#0001_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
          {/* BinaryRain effect removed because it is not exported from BackgroundEffects */}
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            {/* Tech header */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Radar className="w-4 h-4 text-blue-500 animate-pulse" />
              <span className="text-sm font-mono text-blue-600 dark:text-blue-400">CONNECT_TO_TEAM</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white">
              Ready to Architect<br />
              <span className="text-blue-600 dark:text-blue-400">Your Future?</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with our enterprise architects to discuss your digital transformation.
            </p>
            
            {/* Tech-enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl overflow-hidden"
              >
                <span className="relative z-10 font-medium">Schedule Technical Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                <div className="absolute -inset-1 bg-blue-500/20 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  View Technical Documentation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
            
            {/* Tech stats footer */}
            <div className="pt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="font-mono">Enterprise-Grade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionBackground>
    </div>
  );
};

export default About;