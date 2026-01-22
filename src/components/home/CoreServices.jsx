import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ShieldCheck, 
  Code2, 
  RefreshCw, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion';

const CoreServices = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure designed for performance, security, and cost optimization.',
      features: ['Migration Strategy', 'Multi-Cloud Architecture', 'Cost Optimization'],
      link: '/services/cloud-solutions',
      isFeatured: true,
      imageGradient: 'from-blue-500 to-cyan-400',
      // Unsplash: Cloud infrastructure, data centers, server rooms
      backgroundImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Compliance Management', 'Security Audits'],
      link: '/services/cybersecurity',
      imageGradient: 'from-emerald-500 to-teal-400',
      // Unsplash: Cybersecurity, digital security, locks, protection
      backgroundImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80'
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'API Development', 'System Integration'],
      link: '/services/custom-development',
      imageGradient: 'from-violet-500 to-purple-400',
      // Unsplash: Developers at work, coding, programming environment
      backgroundImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80'
    },
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'Modernize operations and enhance customer experiences through digital innovation.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management'],
      link: '/services/digital-transformation',
      imageGradient: 'from-orange-500 to-amber-400',
      // Unsplash: Digital transformation, business strategy, teamwork
      backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics and BI solutions.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization'],
      link: '/services/data-analytics',
      imageGradient: 'from-indigo-500 to-blue-400',
      // Unsplash: Data analytics, charts, business intelligence dashboards
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic guidance to align technology with business objectives and drive growth.',
      features: ['Technology Roadmap', 'Architecture Design', 'Vendor Selection'],
      link: '/services/it-consulting',
      imageGradient: 'from-slate-600 to-slate-400',
      // Unsplash: Business consulting, strategy meetings, professional environment
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80'
    }
  ];

  const numServices = services.length;

  return (
    <section 
      ref={containerRef}
      id="core-services"
      className="relative bg-gray-50 dark:bg-gray-900"
      style={{ height: `${numServices * 100}vh` }}
      aria-labelledby="core-services-heading"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Header - Always visible */}
        <div className="absolute top-6 left-0 right-0 z-20 text-center px-4">
          <h2
            id="core-services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight"
          >
            Core Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Comprehensive IT solutions designed to address your business challenges and drive sustainable growth.
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="relative w-full max-w-6xl px-4 mx-auto h-full flex items-center pt-28 md:pt-32 lg:pt-40 pb-20">
          {services.map((service, index) => {
            // Calculate scroll range for this card
            const start = index / numServices;
            const end = (index + 1) / numServices;
            const middle = (start + end) / 2;

            // Refined stacking transforms for depth perception
            // Active card: centered, full scale, full opacity
            // Previous card: moves up and scales down
            // Next card: hidden below
            const y = useTransform(
              scrollYProgress,
              [start - 0.05, start, middle, end, end + 0.05],
              prefersReducedMotion ? [0, 0, 0, 0, 0] : [100, 0, 0, -100, -200]
            );

            const scale = useTransform(
              scrollYProgress,
              [start - 0.05, start, end, end + 0.05],
              prefersReducedMotion ? [1, 1, 1, 1] : [0.9, 1, 0.96, 0.92]
            );

            const opacity = useTransform(
              scrollYProgress,
              [start - 0.05, start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 1, 0]
            );

            // Subtle blur for non-active cards (enterprise polish)
            const blur = useTransform(
              scrollYProgress,
              [start, start + 0.05, end - 0.05, end],
              prefersReducedMotion ? [0, 0, 0, 0] : [4, 0, 0, 4]
            );

            // NEW: Subtle 3D rotation for depth (very gentle)
            const rotateX = useTransform(
              scrollYProgress,
              [start, middle, end],
              prefersReducedMotion ? [0, 0, 0] : [2, 0, -2]
            );

            // NEW: Active card border glow intensity
            const borderGlow = useTransform(
              scrollYProgress,
              [start, start + 0.05, end - 0.05, end],
              [0, 1, 1, 0]
            );

            // NEW: Icon animation intensity
            const iconScale = useTransform(
              scrollYProgress,
              [start, start + 0.1, middle, end - 0.1, end],
              prefersReducedMotion ? [1, 1, 1, 1, 1] : [1, 1.05, 1, 1.05, 1]
            );

            const IconComponent = service.icon;

            return (
              <motion.article
                key={index}
                style={{
                  y,
                  scale,
                  opacity,
                  rotateX,
                  filter: useTransform(blur, (value) => `blur(${value}px)`),
                  zIndex: numServices - index,
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                  willChange: 'transform, opacity, filter'
                }}
                className="absolute inset-0 flex items-center px-4"
              >
                <motion.div 
                  className="w-full max-h-[75vh] bg-gradient-to-br from-white via-white to-gray-50/20 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900/40 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-sm transition-shadow duration-500 group relative"
                  style={{
                    boxShadow: useTransform(
                      borderGlow,
                      (value) => prefersReducedMotion ? 
                        'var(--tw-shadow)' :
                        `0 0 ${value * 40}px ${value * 8}px rgba(59, 130, 246, ${value * 0.15}), var(--tw-shadow)`
                    )
                  }}
                >
                  {/* NEW: Animated border overlay for active card */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      opacity: borderGlow,
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.3))',
                      backgroundSize: '200% 200%',
                      animation: prefersReducedMotion ? 'none' : 'gradient-shift 3s ease infinite'
                    }}
                  />
                  
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 rounded-2xl transition-colors duration-500 pointer-events-none" />
                  
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative z-10 h-full`}>
                    {/* Image/Visual (40%) - Real Unsplash imagery */}
                    <div className="lg:w-2/5 relative overflow-hidden min-h-[280px] lg:min-h-[500px]">
                      {/* Unsplash Background Image with parallax */}
                      <motion.div 
                        className="absolute inset-0"
                        style={{
                          y: useTransform(
                            scrollYProgress,
                            [start, end],
                            prefersReducedMotion ? [0, 0] : [0, -30]
                          )
                        }}
                      >
                        <img 
                          src={service.backgroundImage}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Gradient overlay for brand alignment and text contrast */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.imageGradient} opacity-20 mix-blend-multiply`} />
                        {/* Subtle darkening for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      </motion.div>
                      
                      {/* Minimal Grid Pattern Overlay - Enterprise touch */}
                      <div className="absolute inset-0 opacity-[0.015]">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                          backgroundSize: '48px 48px'
                        }} />
                      </div>
                    </div>

                    {/* Content (60%) - Clear Hierarchy */}
                    <div className="lg:w-3/5 p-8 lg:p-12 xl:p-14 flex flex-col justify-center relative">
                      {/* Subtle Divider */}
                      <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200/40 dark:via-gray-700/40 to-transparent`} />
                      
                      {/* Featured Badge - Minimal */}
                      {service.isFeatured && (
                        <motion.div 
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase rounded-full mb-4 w-fit border border-blue-600/20 dark:border-blue-500/30"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                            animate={prefersReducedMotion ? {} : {
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.7, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          Flagship Service
                        </motion.div>
                      )}

                      {/* Icon with micro-animation */}
                      <motion.div
                        className="mb-4 w-fit"
                        style={{ scale: iconScale }}
                      >
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center border border-blue-500/20 dark:border-blue-400/20 shadow-lg backdrop-blur-sm">
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                        </div>
                      </motion.div>

                      {/* Title - Dominant */}
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-[1.1]">
                        {service.title}
                      </h3>

                      {/* Description - Calmer */}
                      <p className="text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* Features - Tighter, Structured with stagger */}
                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((feature, featureIndex) => {
                          const featureOpacity = useTransform(
                            scrollYProgress,
                            [start + 0.05 + (featureIndex * 0.02), start + 0.1 + (featureIndex * 0.02)],
                            [0, 1]
                          );

                          const featureX = useTransform(
                            scrollYProgress,
                            [start + 0.05 + (featureIndex * 0.02), start + 0.1 + (featureIndex * 0.02)],
                            prefersReducedMotion ? [0, 0] : [-10, 0]
                          );

                          return (
                            <motion.li 
                              key={featureIndex} 
                              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/feature"
                              style={{
                                opacity: featureOpacity,
                                x: featureX
                              }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 group-hover/feature:from-blue-100 group-hover/feature:to-indigo-100 dark:group-hover/feature:from-gray-700 dark:group-hover/feature:to-gray-800 flex items-center justify-center transition-all duration-300 border border-blue-200/50 dark:border-gray-600/50 shadow-sm">
                                <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                              </div>
                              <span className="font-medium text-sm lg:text-base leading-tight text-gray-700 dark:text-gray-300">{feature}</span>
                            </motion.li>
                          );
                        })}
                      </ul>

                      {/* CTA - Enterprise Grade */}
                      <div>
                        <Link
                          to={service.link}
                          className="inline-flex items-center gap-2.5 px-5 py-2.5 lg:px-6 lg:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:gap-3.5 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          Explore Solution
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Scroll Progress Indicator - Minimal & Calm */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {services.map((_, index) => {
            const start = index / numServices;
            const end = (index + 1) / numServices;
            
            const dotOpacity = useTransform(
              scrollYProgress,
              [start, start + 0.01, end - 0.01, end],
              [0.3, 1, 1, 0.3]
            );

            const dotScale = useTransform(
              scrollYProgress,
              [start, start + 0.01, end - 0.01, end],
              prefersReducedMotion ? [1, 1, 1, 1] : [1, 1.5, 1.5, 1]
            );

            return (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shadow-sm"
                style={{
                  opacity: dotOpacity,
                  scale: dotScale
                }}
                aria-label={`Service ${index + 1} progress indicator`}
              />
            );
          })}
        </div>
      </div>

      {/* Global CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CoreServices;