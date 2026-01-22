import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from 'framer-motion';
import { AnimatedGrid, CircuitBoard, GrainTexture } from '../components/backgrounds/BackgroundEffects';

// Service data with enterprise-grade content
const services = [
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    philosophy: 'Reliable foundations for digital transformation',
    description: 'Enterprise-grade infrastructure designed for resilience and strategic growth. We architect systems that evolve with your business.',
    outcomes: [
      '99.999% platform availability',
      '40% lower total cost of ownership',
      'Global deployment in minutes'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'cybersecurity-compliance',
    title: 'Cybersecurity',
    philosophy: 'Proactive protection as a business enabler',
    description: 'Comprehensive security frameworks that protect assets while enabling innovation. Enterprise-grade compliance integrated into operations.',
    outcomes: [
      'Zero-trust architecture implementation',
      'Real-time threat intelligence',
      'Automated compliance reporting'
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w-800&auto=format&fit=crop&q=80'
  },
  {
    id: 'software-development',
    title: 'Custom Development',
    philosophy: 'Purpose-built solutions, engineered for scale',
    description: 'Strategic software development that solves complex business challenges with maintainable, enterprise-ready code.',
    outcomes: [
      'Reduced technical debt accumulation',
      'Accelerated feature delivery cycles',
      'Seamless legacy system integration'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    philosophy: 'Measured evolution, strategic outcomes',
    description: 'Guiding enterprises through technology modernization with minimal disruption and maximum business impact.',
    outcomes: [
      '60% operational efficiency improvement',
      'Enhanced customer experience metrics',
      'Future-ready technology stack'
    ],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    philosophy: 'Turning information into strategic advantage',
    description: 'Enterprise data platforms that deliver actionable intelligence, predictive insights, and automated decision-making.',
    outcomes: [
      'Unified data governance framework',
      'Real-time business intelligence',
      'Predictive analytics implementation'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'support-optimization',
    title: 'Support & Optimization',
    philosophy: 'Continuous improvement as standard',
    description: 'Proactive management and optimization of enterprise systems to ensure peak performance and strategic alignment.',
    outcomes: [
      '95%+ issue resolution in first contact',
      'Proactive performance optimization',
      'Strategic roadmap alignment'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
  }
];

const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create spring-based transform for smoother motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate active service index based on scroll
  const activeIndex = useTransform(
    smoothProgress,
    [0, 1],
    [0, services.length - 1]
  );

  const [currentService, setCurrentService] = useState(0);

  // Update active service on scroll
  useEffect(() => {
    const unsubscribe = activeIndex.on("change", (latest) => {
      const index = Math.min(Math.floor(latest), services.length - 1);
      setCurrentService(index);
    });
    return () => unsubscribe();
  }, [activeIndex]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[300vh] bg-gray-50 dark:bg-gray-900 py-32 overflow-hidden"
    >
      {/* Tech Background */}
      <AnimatedGrid cellSize={80} scanLines={true} />
      <CircuitBoard nodeCount={10} />
      <GrainTexture opacity={0.02} />
      {/* Container with generous white space */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Sticky Column - Service Titles & Philosophy */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Services
              </p>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                Two decades of strategic technology partnerships with global enterprises.
              </p>
            </motion.div>

            {/* Service Navigation */}
            <div className="space-y-2">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => {
                    const scrollTarget = (index / services.length) * window.innerHeight * 3;
                    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                  }}
                  className="block w-full text-left"
                  whileHover={{ x: 4 }}
                >
                  <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-normal transition-colors duration-300 ${
                        index === currentService 
                          ? 'text-gray-900 dark:text-white' 
                          : 'text-gray-400 dark:text-gray-500'
                      }`}>
                        {service.title}
                      </span>
                      {index === currentService && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                        />
                      )}
                    </div>
                    {index === currentService && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-light"
                      >
                        {service.philosophy}
                      </motion.p>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Stacked Service Panels */}
          <div className="lg:col-span-8 space-y-32">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                index={index}
                isActive={index === currentService}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center space-x-2 text-sm text-gray-400 dark:text-gray-500">
          <motion.div
            animate={{ 
              y: [0, 4, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-px h-6 bg-gray-300 dark:bg-gray-600"
          />
          <span className="tracking-wider">SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
};

// Separate ServiceCard component for better performance
const ServiceCard = ({ service, index, isActive }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-20%" });

  return (
    <motion.div
      ref={cardRef}
      id={service.id}
      initial={{ opacity: 0, y: 60 }}
      animate={{ 
        opacity: isInView ? 1 : 0.3,
        y: isInView ? 0 : 60,
        scale: isInView ? 1 : 0.95
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {/* Service Panel */}
      <motion.div 
        className={`w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-shadow duration-500 ${
          isActive
            ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]' 
            : 'shadow-md dark:shadow-lg'
        }`}
        whileHover={{
          boxShadow: "0 25px 70px -15px rgba(0,0,0,0.15)"
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 lg:p-12">
          
          {/* Image Column */}
          <div className="lg:col-span-1 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-700">
            <div className="aspect-[4/5] relative">
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Business Outcomes */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Business Impact
              </p>
              <ul className="space-y-3">
                {service.outcomes.map((outcome, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : -10 
                    }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-light">
                      {outcome}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Subtle CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700"
            >
              <button className="group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-light tracking-wide transition-colors">
                <span className="inline-block border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 pb-1">
                  Discuss implementation strategy
                </span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;