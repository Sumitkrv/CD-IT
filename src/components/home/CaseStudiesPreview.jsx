import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EvervaultCard } from '../ui/EvervaultCard';

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Financial Services',
      industry: 'Finance & Banking',
      results: [
        { value: '40%', label: 'Cost reduction' },
        { value: '99.95%', label: 'Availability' },
        { value: '6 mo', label: 'Timeline' }
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30',
      backgroundImage: '/CD-IT Images/home finance and banking.webp'
    },
    {
      id: 2,
      title: 'Healthcare',
      industry: 'Healthcare',
      results: [
        { value: '60%', label: 'Efficiency gain' },
        { value: '95%', label: 'Satisfaction' },
        { value: '200%', label: 'Speed increase' }
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30',
      backgroundImage: '/CD-IT Images/home healthcare.jpg'
    },
    {
      id: 3,
      title: 'Retail',
      industry: 'Retail',
      results: [
        { value: '85%', label: 'Revenue growth' },
        { value: '-70%', label: 'Load time' },
        { value: '4x', label: 'Capacity' }
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30',
      backgroundImage: '/CD-IT Images/home e commerce.avif'
    }
  ];

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    rest: { y: 0 },
    hover: { 
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header - More authoritative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-300">
              Proven Results
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight px-4">
            Enterprise Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light px-4">
            Measurable outcomes from strategic technology partnerships with industry leaders.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="h-full"
            >
              {/* Layered Card Effect */}
              <div className="relative h-full">
                {/* Subtle shadow layer */}
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 rounded-xl transform translate-y-1" />
                
                {/* Main Card with Evervault Effect */}
                <EvervaultCard className="relative h-full">
                  <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/70 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg">
                    {/* Background Image Header */}
                    <div className="h-40 sm:h-44 relative overflow-hidden">
                      <img 
                        src={study.backgroundImage}
                        alt={study.industry}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Title Overlay on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content - Metrics */}
                    <div className="p-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </EvervaultCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;