import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

// Service data with enterprise-grade content
const services = [
  {
    id: 'product-software-development',
    title: 'Product & Software Development',
    philosophy: 'Built for scale, security, and performance',
    description: 'Custom software solutions built to solve real business challenges with scalability, security, and performance at the core.',
    outcomes: [
      'Scalable architecture designed for growth',
      'Security-first development approach',
      'Performance-optimized solutions'
    ],
    image: '/CD-IT Images/service custom development.png'
  },
  {
    id: 'digital-platforms-web',
    title: 'Digital Platforms & Web Solutions',
    philosophy: 'Enterprise-grade digital experiences',
    description: 'Enterprise-grade websites and digital platforms focused on usability, speed, and long-term maintainability.',
    outcomes: [
      'Fast, responsive user experiences',
      'Built for long-term maintainability',
      'Optimized for search and performance'
    ],
    image: '/CD-IT Images/service digital transformation.png'
  },
  {
    id: 'it-infrastructure-security',
    title: 'IT Infrastructure & Security',
    philosophy: 'Reliable systems, protected data',
    description: 'Reliable infrastructure planning, deployment, and system security to protect data and ensure operational continuity.',
    outcomes: [
      'Robust infrastructure deployment',
      'Comprehensive security measures',
      'Ensured operational continuity'
    ],
    image: '/CD-IT Images/service cloud and infra.png'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Experience Design',
    philosophy: 'Designed for usability and adoption',
    description: 'User-centric interface design that improves usability, adoption, and efficiency across applications.',
    outcomes: [
      'Improved user adoption rates',
      'Enhanced application efficiency',
      'Intuitive, accessible interfaces'
    ],
    image: '/CD-IT Images/service cyber security.png',
    imagePosition: 'object-top'
  },
  {
    id: 'data-system-insights',
    title: 'Data & System Insights',
    philosophy: 'Data-driven decision making',
    description: 'Actionable data solutions that help businesses make informed decisions and optimise operations.',
    outcomes: [
      'Actionable business insights',
      'Data-driven decision support',
      'Optimized operational efficiency'
    ],
    image: '/CD-IT Images/service data analytics.png'
  }
];

const ServicesSection = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs font-semibold mb-6">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tight font-regular text-gray-900 dark:text-white mb-4 max-w-xl">
            Our Core Services
          </h2>
          <p className="text-lg max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Comprehensive IT and digital solutions designed for reliability, performance, and long-term business growth.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Card with Interactive Image Slider
const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <motion.div
      ref={cardRef}
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 40
      }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content Column */}
        <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs font-semibold mb-4">
            {service.philosophy}
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-regular text-gray-900 dark:text-white mb-4">
            {service.title}
          </h3>
          
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
            {service.description}
          </p>

          {/* Business Impact */}
          <div className="space-y-4 mb-8">
            <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Business Impact
            </p>
            <ul className="space-y-3">
              {service.outcomes.map((outcome, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0,
                    x: isInView ? 0 : -20 
                  }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {outcome}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            <span>Discuss implementation strategy</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Interactive Image Slider Column */}
        <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl select-none shadow-xl"
            onMouseMove={onMouseMove}
            onMouseUp={() => setOnMouseDown(false)}
            onMouseLeave={() => setOnMouseDown(false)}
            onTouchMove={onMouseMove}
            onTouchEnd={() => setOnMouseDown(false)}
          >
            {/* Slider Line */}
            <div
              className="absolute z-20 top-0 w-1 h-full bg-white/80 dark:bg-gray-200 -ml-0.5 select-none"
              style={{
                left: inset + "%",
              }}
            >
              {/* Slider Handle */}
              <button
                className="absolute top-1/2 -translate-y-1/2 -ml-3 z-30 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform cursor-ew-resize flex items-center justify-center border-2 border-gray-200 dark:border-gray-600"
                onTouchStart={(e) => {
                  setOnMouseDown(true);
                  onMouseMove(e);
                }}
                onMouseDown={(e) => {
                  setOnMouseDown(true);
                  onMouseMove(e);
                }}
                onTouchEnd={() => setOnMouseDown(false)}
                onMouseUp={() => setOnMouseDown(false)}
              >
                <GripVertical className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Top Image (gets clipped) */}
            <img
              src={service.image}
              alt={service.title}
              className={`absolute left-0 top-0 z-10 w-full h-full object-cover select-none rounded-2xl ${service.imagePosition || 'object-center'}`}
              style={{
                clipPath: "inset(0 0 0 " + inset + "%)",
              }}
            />

            {/* Bottom Image (dark mode version or same image with filter) */}
            <div className="absolute left-0 top-0 w-full h-full">
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover select-none rounded-2xl filter brightness-75 dark:brightness-50 ${service.imagePosition || 'object-center'}`}
              />
            </div>

        
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;