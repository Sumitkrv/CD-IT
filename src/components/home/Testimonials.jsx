import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Building, Award, TrendingUp, Shield } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote: "CD Solutions transformed our legacy infrastructure into a modern, cloud-native architecture. The migration was seamless, and we achieved 40% operational efficiency within three months.",
      author: "Sarah Mitchell",
      role: "Chief Technology Officer",
      company: "TechCorp International",
      industry: "Enterprise Software",
      metric: "40% Efficiency Gain",
      icon: <TrendingUp className="w-5 h-5" />,
      duration: "3 Months",
      // Unsplash: Professional office, enterprise workspace
      backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
    },
    {
      quote: "Partnering with CD Solutions accelerated our digital transformation roadmap by 18 months. The ROI was evident in Q1, and their strategic approach gave us the scalability we needed.",
      author: "Michael Chen",
      role: "VP of Digital Operations",
      company: "Global Retail Group",
      industry: "Retail & E-commerce",
      metric: "$2.3M Cost Reduction",
      icon: <Building className="w-5 h-5" />,
      duration: "12 Months",
      // Unsplash: Modern office space, business environment
      backgroundImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80'
    },
    {
      quote: "Their security-first approach and deep understanding of compliance gave us complete confidence during our infrastructure modernization. They set a new standard for our organization.",
      author: "Dr. Emily Rodriguez",
      role: "Chief Information Officer",
      company: "Healthcare Alliance",
      industry: "Healthcare",
      metric: "100% Compliance",
      icon: <Shield className="w-5 h-5" />,
      duration: "6 Months",
      // Unsplash: Executive office, professional setting
      backgroundImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80'
    },
    {
      quote: "CD Solutions delivered a financial-grade platform that scales with our growth. Their team's professionalism and technical depth made them an extension of our engineering organization.",
      author: "James Anderson",
      role: "Chief Executive Officer",
      company: "Apex Financial Services",
      industry: "Financial Services",
      metric: "99.99% Uptime",
      icon: <Award className="w-5 h-5" />,
      duration: "9 Months",
      // Unsplash: Corporate office, executive workspace
      backgroundImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Enterprise Success Stories</span>
            <span className="sm:hidden">Success Stories</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight px-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Delivering measurable impact and transformation for global enterprises
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="relative">
          <div className="relative min-h-[500px] sm:min-h-[450px] md:min-h-[400px] lg:min-h-[450px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-xl dark:shadow-black/10 relative overflow-hidden">
                  {/* Professional Background Image - Blurred */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={testimonials[currentIndex].backgroundImage}
                      alt=""
                      className="w-full h-full object-cover opacity-[0.02] dark:opacity-[0.01] blur-md scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Content above background */}
                  <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {/* Left Column - Quote */}
                    <div className="space-y-4 sm:space-y-6">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 dark:text-blue-400 opacity-20" />
                      
                      <blockquote>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed font-light">
                          "{testimonials[currentIndex].quote}"
                        </p>
                      </blockquote>

                      {/* Author Info */}
                      <div className="pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800">
                        <div className="space-y-1">
                          <div className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                            {testimonials[currentIndex].author}
                          </div>
                          <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {testimonials[currentIndex].role}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            {testimonials[currentIndex].company} • {testimonials[currentIndex].industry}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Metrics */}
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                            {testimonials[currentIndex].icon}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Key Result</div>
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">
                              {testimonials[currentIndex].metric}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Achieved within {testimonials[currentIndex].duration}
                        </div>
                      </div>

                      {/* Client Logo Placeholder */}
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800">
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">Enterprise Client</div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-base sm:text-lg">
                              {testimonials[currentIndex].company.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">
                              {testimonials[currentIndex].company}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              {testimonials[currentIndex].industry} Sector
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 md:mt-12">
            {/* Progress Indicators */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 sm:w-8 bg-blue-600 dark:bg-blue-500'
                      : 'w-1.5 sm:w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <motion.button
                onClick={goToPrevious}
                className="p-2 sm:p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              
              <motion.button
                onClick={goToNext}
                className="p-2 sm:p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;