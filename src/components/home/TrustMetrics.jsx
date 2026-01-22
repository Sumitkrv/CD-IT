import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import { Users, Award, Building2, Globe } from 'lucide-react';

const CountUp = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const numericValue = parseInt(value.replace('+', ''));
    const hasPlus = value.includes('+');
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * numericValue);
      
      setCount(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else if (hasPlus) {
        setTimeout(() => setCount(numericValue), 150);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{value.includes('+') && count >= parseInt(value) ? '+' : ''}
    </span>
  );
};

const TrustMetrics = () => {
  const { ref, y } = useParallax(0.3);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const metrics = [
    {
      icon: Award,
      value: '15+',
      label: 'Years in Operation',
      description: 'Continuous service delivery since 2011',
      detail: 'Est. 2011',
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      icon: Building2,
      value: '500+',
      label: 'Production Deployments',
      description: 'Enterprise systems across 200+ organizations',
      detail: '99.2% uptime SLA',
      backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Client Organizations',
      description: 'Long-term partnerships across industries',
      detail: '94% retention',
      backgroundImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80'
    },
    {
      icon: Globe,
      value: '12',
      label: 'Industry Verticals',
      description: 'Healthcare, finance, retail, manufacturing, and more',
      detail: 'Cross-sector',
      backgroundImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Minimal Background Grid */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6"
          >
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Track Record
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Proven at Scale
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 dark:text-gray-400"
          >
            Trusted by enterprises to deliver reliable, compliant IT infrastructure and solutions.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
                  <img 
                    src={metric.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />
                </div>

                {/* Icon */}
                <div className="mb-8 relative z-10">
                  <div className="inline-flex p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <metric.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
                
                {/* Metric Value */}
                <div className="mb-3 relative z-10">
                  <div className="text-5xl font-semibold text-gray-900 dark:text-white tabular-nums">
                    <CountUp value={metric.value} duration={1500 + index * 200} />
                  </div>
                </div>
                
                {/* Metric Label */}
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2 relative z-10">
                  {metric.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 relative z-10">
                  {metric.description}
                </p>
                
                {/* Detail */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 relative z-10">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                    {metric.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Metrics verified quarterly
            <span className="mx-3 text-gray-300 dark:text-gray-700">|</span>
            ISO 27001 certified
            <span className="mx-3 text-gray-300 dark:text-gray-700">|</span>
            SOC 2 Type II compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMetrics;