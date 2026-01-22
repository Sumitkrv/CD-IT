import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Building2, Users, Shield, Target, Award, Globe, Clock, Code2, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
import TechBackground from '../components/backgrounds/TechBackground';
import { FloatingParticles, GlowOrbs, DataFlowLines, AnimatedGrid, CircuitBoard, Waveform, DotMatrix, GrainTexture } from '../components/backgrounds/BackgroundEffects';

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

  return <span ref={ref}>{value.toString().includes('+') ? `${count}+` : value.toString().includes('/') ? value : count}</span>;
};

const About = () => {
  const metrics = [
    { value: '15+', label: 'Leadership Experience', icon: Users },
    { value: '50+', label: 'Certified Engineers', icon: Code2 },
    { value: '30+', label: 'Industry Consultants', icon: Users },
    { value: '24/7', label: 'Global Support', icon: Clock }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Listen First',
      description: 'Understanding business objectives, technical constraints, and strategic goals'
    },
    {
      icon: Shield,
      title: 'Collaborate Always',
      description: 'Transparent roadmaps, regular communication, shared ownership'
    },
    {
      icon: Award,
      title: 'Deliver Excellence',
      description: 'Enterprise-grade quality, rigorous testing, long-term reliability'
    }
  ];

  const values = [
    {
      title: 'Client-Centric',
      description: 'Long-term partnerships focused on measurable business outcomes.'
    },
    {
      title: 'Innovation',
      description: 'Practical application of emerging technologies to solve enterprise challenges.'
    },
    {
      title: 'Integrity',
      description: 'Transparent engagements, honest assessments, ethical delivery.'
    },
    {
      title: 'Excellence',
      description: 'Rigorous standards in architecture, code quality, and documentation.'
    },
    {
      title: 'Collaboration',
      description: 'Working as an extension of your team with clear communication.'
    },
    {
      title: 'Sustainability',
      description: 'Systems designed for longevity, maintainability, and efficiency.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2011'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2013'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2015'
    },
    {
      name: 'James Anderson',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2014'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section - Editorial Manifesto */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
        {/* Tech Background System */}
        <TechBackground variant="grid" intensity="medium" animated={true} />
        <DataFlowLines lineCount={3} />
        <GlowOrbs 
          orbs={[
            { color: 'blue', position: 'top-left', size: 'large' },
            { color: 'violet', position: 'bottom-right', size: 'medium' }
          ]} 
        />
        <GrainTexture opacity={0.03} />
        
        {/* Vertical Rule - Spatial Anchor */}
        <div className="absolute left-12 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-40" />

        <div className="container mx-auto px-6 lg:px-20 max-w-7xl py-32 relative">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Content - Editorial Style */}
            <div className="lg:col-span-7 space-y-16">
              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 text-xs tracking-widest uppercase text-gray-500 dark:text-gray-500 font-medium"
              >
                <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />
                <Building2 className="w-3.5 h-3.5" />
                <span>Est. 2011</span>
              </motion.div>
              
              {/* Headline - Line by Line Reveal */}
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
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.02em] text-gray-900 dark:text-white leading-[1.05]"
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>
              
              {/* Manifesto Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 max-w-2xl"
              >
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-[1.6] font-light">
                  CD Solutions architects reliable, scalable digital systems for global enterprises.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-500 leading-[1.7] font-light">
                  We focus on long-term solutions that deliver sustainable business value.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ x: 2 }}
                  className="group inline-flex items-center gap-3 text-gray-900 dark:text-white font-medium text-sm tracking-wide"
                >
                  <span className="relative">
                    View Our Work
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Image - Slow Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise infrastructure architecture"
                  className="w-full h-full object-cover"
                />
                {/* Grain Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-black/20" />
                <div className="absolute inset-0 mix-blend-overlay opacity-30" 
                     style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="4" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")' }}
                />
              </div>
              
              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800"
              >
                <div className="text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-2 tabular-nums">13</div>
                <div className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-500">Years of Excellence</div>
              </motion.div>
            </motion.div>

            {/* Secondary Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="lg:col-span-7 grid grid-cols-2 gap-6 mt-12 lg:mt-0"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office environment"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/30 to-transparent" />
              </div>
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team discussion"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics - Annual Report Style */}
      <section className="py-32 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-indigo-50/30 via-gray-50/50 to-blue-50/30 dark:from-gray-900/20 dark:via-gray-900/20 dark:to-gray-900/20 relative overflow-hidden">
        {/* Tech Background System */}
        <AnimatedGrid cellSize={80} scanLines={true} />
        <CircuitBoard nodeCount={8} />
        <GlowOrbs 
          orbs={[
            { color: 'indigo', position: 'top-right', size: 'medium' },
            { color: 'blue', position: 'bottom-left', size: 'small' }
          ]} 
        />
        <GrainTexture opacity={0.025} />
        
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Divider */}
                <div className="absolute -top-8 left-0 w-12 h-px bg-gray-300 dark:bg-gray-700" />
                
                {/* Metric */}
                <div className="text-6xl md:text-7xl font-extralight tracking-tighter text-gray-900 dark:text-white mb-4 tabular-nums">
                  <CountUp value={metric.value} duration={2000 + index * 200} />
                </div>
                
                {/* Label */}
                <div className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-500 leading-relaxed max-w-[200px]">
                  {metric.label}
                </div>
                
                {/* Context Hint */}
                <div className="mt-3 text-[10px] tracking-wider uppercase text-gray-400 dark:text-gray-600">
                  Verified
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy - Scroll-Guided Narrative */}
      <section className="py-48 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden bg-white dark:bg-gray-950">
        {/* Tech Background System */}
        <TechBackground variant="minimal" intensity="low" />
        <DataFlowLines lineCount={2} />
        <DotMatrix rows={6} cols={10} />
        <GrainTexture opacity={0.025} />
        
        {/* Subtle Background Shift */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/30 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl relative">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-8">Philosophy</div>
                <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-16">
                  Our Philosophy
                </h2>
              </motion.div>
              
              <div className="space-y-12">
                {[
                  {
                    text: 'Since 2011, we\'ve maintained that technology should empower businesses, not complicate them. We believe in long-term thinking over chasing trends.',
                    emphasis: 1
                  },
                  {
                    text: 'Every engagement begins with deep understanding—of your business objectives, technical constraints, and strategic goals. Only then do we architect solutions that deliver both immediate value and future readiness.',
                    emphasis: 0.8
                  },
                  {
                    text: 'Our approach combines business acumen with technical depth, ensuring every system we build drives tangible enterprise outcomes.',
                    emphasis: 0.7
                  }
                ].map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: para.emphasis, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl md:text-2xl text-gray-900 dark:text-white leading-[1.7] font-light"
                    style={{ fontWeight: para.emphasis === 1 ? 400 : 300 }}
                  >
                    {para.text}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative space-y-4"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Infrastructure technology and systems architecture"
                  className="w-full h-full object-cover grayscale-[20%] contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-black/20 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Enterprise collaboration and strategic planning"
                    className="w-full h-full object-cover grayscale-[20%] contrast-105"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern office architecture and workspace design"
                    className="w-full h-full object-cover grayscale-[20%] contrast-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - Process as System */}
      <section className="py-48 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Tech Background System */}
        <AnimatedGrid cellSize={48} scanLines={false} />
        <CircuitBoard nodeCount={12} />
        <DataFlowLines lineCount={3} />
        <GrainTexture opacity={0.02} />
        
        {/* Blueprint corners */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-indigo-300/20 dark:border-gray-700" />
        <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-indigo-300/20 dark:border-gray-700" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-indigo-300/20 dark:border-gray-700" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-indigo-300/20 dark:border-gray-700" />
        
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-8">Methodology</div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-500 max-w-2xl font-light">
              A disciplined approach to enterprise technology delivery
            </p>
          </motion.div>

          {/* Process Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="aspect-[21/9] relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Enterprise team collaboration in modern workspace"
                className="w-full h-full object-cover grayscale-[30%] contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 dark:from-black/40 dark:via-black/20 dark:to-black/40" />
            </div>
          </motion.div>

          {/* Process Steps - Connected System */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 dark:from-gray-700 dark:via-gray-700 dark:to-gray-700 origin-left"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  {/* Step Number Node */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 mb-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-gray-400 dark:group-hover:border-gray-600"
                  >
                    <step.icon className="w-6 h-6 text-gray-400 dark:text-gray-600 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" />
                  </motion.div>
                  
                  {/* Step Number */}
                  <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-4 tabular-nums">
                    0{index + 1}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed font-light">
                    {step.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 24 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                    className="h-px bg-gray-900 dark:bg-white mt-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Editorial Principles */}
      <section className="py-48 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-tr from-blue-50/40 via-gray-50/60 to-indigo-50/40 dark:from-gray-900/20 dark:via-gray-900/20 dark:to-gray-900/20 relative overflow-hidden">
        {/* Tech Background System */}
        <TechBackground variant="waves" intensity="low" />
        <DotMatrix rows={8} cols={12} />
        <GlowOrbs 
          orbs={[
            { color: 'blue', position: 'center', size: 'large' }
          ]} 
        />
        <GrainTexture opacity={0.025} />
        
        {/* Binary pattern accent */}
        <div className="absolute right-10 bottom-20 text-xs font-mono text-indigo-200/20 dark:text-gray-800/30 select-none">
          <div className="space-y-1">
            {['01001001', '01101110', '01101110', '01101111', '01110110', '01100001', '01110100', '01100101'].map((binary, i) => (
              <div key={i}>{binary}</div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-8">Principles</div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white">
              Our Values
            </h2>
          </motion.div>

          {/* Values Visual Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="aspect-[4/3] relative overflow-hidden"
                >
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    src={img}
                    alt=""
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 dark:to-black/30" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values as Editorial Blocks */}
          <div className="space-y-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Number */}
                <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-4 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="grid md:grid-cols-12 gap-8 pb-16 border-b border-gray-200 dark:border-gray-800">
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white tracking-tight">
                      {value.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Executive Portraits */}
      <section className="py-48 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Tech Background System */}
        <AnimatedGrid cellSize={56} scanLines={false} />
        <Waveform waveCount={3} />
        <GrainTexture opacity={0.025} />
        
        {/* Hex pattern accent */}
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-96 h-24 opacity-[0.03] dark:opacity-[0.02]">
          <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, i) => (
              <polygon
                key={i}
                points="50,5 80,20 80,50 50,65 20,50 20,20"
                transform={`translate(${i * 65}, 0)`}
                fill="none"
                stroke="rgb(99 102 241)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-8">Leadership</div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
              Leadership
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-500 max-w-2xl font-light">
              Experienced leaders guiding enterprise technology transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden mb-6">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3 font-light">
                    {leader.role}
                  </p>
                  <div className="text-xs tracking-wider uppercase text-gray-400 dark:text-gray-600">
                    {leader.tenure}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Confident Conversation */}
      <section className="py-48 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Tech Background System */}
        <TechBackground variant="particles" intensity="medium" />
        <GlowOrbs 
          orbs={[
            { color: 'blue', position: 'center', size: 'large' },
            { color: 'violet', position: 'top-right', size: 'medium' }
          ]} 
        />
        <GrainTexture opacity={0.025} />
        
        {/* Crosshair accent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.04] dark:opacity-[0.02]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgb(99 102 241)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgb(99 102 241)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="rgb(99 102 241)" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="rgb(99 102 241)" strokeWidth="0.5" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgb(99 102 241)" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-12 leading-[1.1]">
              Let's discuss your<br className="hidden md:block" /> enterprise needs
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-500 mb-20 max-w-2xl mx-auto font-light">
              Schedule a consultation with our enterprise solutions team
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.button
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-3 text-gray-900 dark:text-white font-medium text-base tracking-wide"
              >
                <span className="relative">
                  Contact Enterprise Sales
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900 dark:bg-white" />
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <span className="text-gray-300 dark:text-gray-700">|</span>
              
              <motion.button
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-3 text-gray-500 dark:text-gray-500 font-medium text-base tracking-wide hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="relative">
                  View Case Studies
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;