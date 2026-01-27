import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Legacy Modernization for Financial Services Leader',
      client: 'Global Financial Services Inc.',
      industry: 'Finance & Banking',
      challenge: 'Monolithic architecture limiting scalability and regulatory compliance',
      results: [
        { value: '40%', label: 'Infrastructure costs reduced' },
        { value: '99.95%', label: 'System availability' },
        { value: '6 months', label: 'Migration timeline' }
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30',
      // Unsplash: Financial technology, banking, fintech
      backgroundImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80'
    },
    {
      id: 2,
      title: 'Healthcare Digital Transformation',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Disparate systems affecting patient care coordination',
      results: [
        { value: '60%', label: 'Operational efficiency gain' },
        { value: '95%', label: 'Provider satisfaction' },
        { value: '200%', label: 'Data processing speed' }
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30',
      // Unsplash: Healthcare technology, medical devices
      backgroundImage: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80'
    },
    {
      id: 3,
      title: 'E-Commerce Platform Scale',
      client: 'National Retail Corporation',
      industry: 'Retail',
      challenge: 'Legacy platform unable to sustain seasonal traffic spikes',
      results: [
        { value: '85%', label: 'Revenue growth' },
        { value: '-70%', label: 'Page load time' },
        { value: '4x', label: 'Peak capacity' }
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30',
      // Unsplash: E-commerce, retail technology, shopping
      backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
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
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="h-full"
            >
              {/* Layered Card Effect */}
              <div className="relative h-full">
                {/* Subtle shadow layer */}
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 rounded-xl transform translate-y-1" />
                
                {/* Main Card */}
                <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/70 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg">
                  {/* Gradient Header with Unsplash Background */}
                  <div className={`h-32 sm:h-36 md:h-40 relative overflow-hidden`}>
                    {/* Unsplash Background Image */}
                    <img 
                      src={study.backgroundImage}
                      alt={study.industry}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Color overlay for brand consistency */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} mix-blend-multiply dark:mix-blend-screen opacity-80 dark:opacity-20`} />
                    {/* Darkening gradient for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/60 dark:to-black/20" />
                    
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/95 dark:bg-gray-800/95 text-gray-700 dark:text-gray-300 backdrop-blur-sm shadow-sm">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      {study.client}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic mb-5 sm:mb-6 leading-relaxed">
                      {study.challenge}
                    </p>

                    {/* Results - Cleaner, more scannable */}
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-start">
                          <div className="min-w-[60px] sm:min-w-[80px]">
                            <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-blue-400">
                              {result.value}
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-tight pl-3 sm:pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group py-1"
                    >
                      <span className="mr-2">Read case study</span>
                      <ArrowRight 
                        size={14} 
                        className="sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button - More subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center px-4"
        >
          <Link to="/case-studies">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 text-xs sm:text-sm tracking-wide w-full sm:w-auto">
              View All Case Studies
            </button>
          </Link>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
            12+ detailed enterprise case studies available
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;