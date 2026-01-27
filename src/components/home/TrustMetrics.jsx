import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Globe, Shield, Users } from 'lucide-react';


const TrustMetrics = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const metrics = [
    {
      icon: Building2,
      value: '15',
      unit: 'Years',
      label: 'Operational History',
      description: 'Continuous service delivery since 2011'
    },
    {
      icon: Globe,
      value: '23',
      unit: 'Countries',
      label: 'Geographic Presence',
      description: 'Multi-region deployment and support infrastructure'
    },
    {
      icon: Shield,
      value: '12',
      unit: 'Industries',
      label: 'Sectors Served',
      description: 'Specialized domain expertise across regulated markets'
    },
    {
      icon: Users,
      value: '200',
      unit: 'Enterprises',
      label: 'Active Partnerships',
      description: 'Long-term engagements with institutional clients'
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white dark:bg-gray-950"
    >
      {/* Minimal background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-3 sm:mb-4"
          >
            <span className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em]">
              Organizational Profile
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight px-4"
          >
            Established Technology Partner
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 px-4"
          >
            Infrastructure and systems delivery for enterprise organizations
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 transition-all duration-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-6 h-6 text-gray-900 dark:text-white" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className="text-4xl font-light text-gray-900 dark:text-white tracking-tight">
                    {metric.value}
                  </span>
                  <span className="ml-1 text-lg text-gray-500 dark:text-gray-400 font-light">
                    {metric.unit}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;