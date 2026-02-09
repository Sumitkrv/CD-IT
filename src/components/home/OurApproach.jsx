import React, { useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useInView
} from 'framer-motion';
import { 
  Lightbulb, 
  Search, 
  Code, 
  Rocket, 
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Requirements and Planning',
    description: 'Comprehensive analysis of organizational requirements, technical constraints, and governance frameworks.',
    backgroundImage: '/CD-IT Images/home requirements and planning.png'
  },
  {
    id: 2,
    icon: Search,
    title: 'Architecture and Design',
    description: 'System architecture definition, technology stack selection, and integration planning.',
    backgroundImage: '/CD-IT Images/home architecture and design.png'
  },
  {
    id: 3,
    icon: Code,
    title: 'Development and Testing',
    description: 'Structured development cycles with continuous testing and quality assurance protocols.',
    backgroundImage: '/CD-IT Images/home development and testing.png'
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Deployment and Integration',
    description: 'Staged rollout procedures with monitoring, validation, and stakeholder coordination.',
    backgroundImage: '/CD-IT Images/home deployment and integration.png'
  },
  {
    id: 5,
    icon: CheckCircle,
    title: 'Operations and Support',
    description: 'Ongoing system maintenance, performance monitoring, and continuous improvement programs.',
    backgroundImage: '/CD-IT Images/home operations and support.png'
  },
];

const StepCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const Icon = step.icon;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center`}
    >
      {/* Content card with background image */}
      <motion.div
        whileHover={{ 
          y: -4,
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)'
        }}
        className="w-full md:w-[500px] lg:w-[550px] rounded-xl sm:rounded-2xl border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl relative overflow-hidden"
      >
        {/* Background Image Header - More visible */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img 
            src={step.backgroundImage}
            alt={step.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Step number badge on image */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-300 dark:border-gray-700 flex items-center justify-center rounded-lg">
            <span className="text-base sm:text-lg font-light text-gray-900 dark:text-white">
              {step.id}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-2.5 bg-blue-600 dark:bg-blue-500 rounded-lg shadow-lg">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {step.title}
            </h3>
          </div>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
            {step.description}
          </p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
              <span className="font-medium">Phase {step.id}</span>
              <span className="hidden sm:inline">•</span>
              <span>Estimated duration: 2-4 weeks</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OurApproach = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const progressHeight = useTransform(progressSpring, [0, 1], ['0%', '100%']);

  return (
    <section 
      ref={containerRef}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our Approach
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            We follow a structured, business-first approach — understanding requirements, designing the right strategy, building reliable solutions, and continuously optimising for performance and scalability.
          </p>
          
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 italic">
            Great solutions begin with the right questions.
          </p>
        </motion.div>

        {/* Timeline for desktop */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex flex-col items-center">
            <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400"
                style={{ height: progressHeight }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Progress dots */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="absolute w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 left-1/2 -translate-x-1/2 bg-blue-600 shadow-lg"
                style={{ top: `${(index / (steps.length - 1)) * 90}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{step.id}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Alternating Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Stacked cards for mobile */}
        <div className="md:hidden space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 md:mt-24 pt-8 sm:pt-12 md:pt-16 border-t border-gray-200 dark:border-gray-800 px-4"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            Each phase concludes with a formal review and approval before progression.
          </p>
          <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
            <span>Download Methodology PDF</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;