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
    title: 'Discovery & Strategy',
    description: 'Deep-dive workshops to understand your business objectives, technical constraints, and success metrics.',
    gradient: 'from-blue-500 to-cyan-400',
    // Unsplash: Whiteboard sessions, strategy planning, brainstorming
    backgroundImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80'
  },
  {
    id: 2,
    icon: Search,
    title: 'Analysis & Planning',
    description: 'Comprehensive assessment of existing systems, architecture review, and detailed roadmap creation.',
    gradient: 'from-indigo-500 to-purple-400',
    // Unsplash: Analysis, planning, architectural diagrams
    backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
  },
  {
    id: 3,
    icon: Code,
    title: 'Design & Development',
    description: 'Iterative development with continuous integration, code reviews, and stakeholder feedback loops.',
    gradient: 'from-purple-500 to-pink-400',
    // Unsplash: Coding, development, programming workspace
    backgroundImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Deploy & Launch',
    description: 'Phased rollout with automated testing, performance monitoring, and change management.',
    gradient: 'from-emerald-500 to-teal-400',
    // Unsplash: Launch, deployment, infrastructure
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: 5,
    icon: CheckCircle,
    title: 'Support & Optimize',
    description: 'Proactive maintenance, performance optimization, and continuous improvement cycles.',
    gradient: 'from-orange-500 to-amber-400',
    // Unsplash: Monitoring, optimization, support
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
];

const StepCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const Icon = step.icon;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector for desktop */}
      <div className="hidden md:flex items-center absolute left-16 top-0 bottom-0 w-8 z-0">
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className="w-0.5 bg-gradient-to-b from-gray-300 to-gray-300 dark:from-gray-700 dark:to-gray-700 h-full ml-4"
          />
        )}
      </div>

      <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Step indicator for mobile */}
        <div className="md:hidden flex items-center gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg flex items-center justify-center`}
          >
            <Icon className="w-6 h-6 text-white" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full border-2 border-gray-100 dark:border-gray-800 flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {step.id}
              </span>
            </div>
          </motion.div>
          <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-600" />
        </div>

        {/* Step indicator for desktop */}
        <div className="hidden md:flex relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg flex items-center justify-center`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full border-2 border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
              {step.id}
            </span>
          </div>
        </div>

        {/* Content card with background image */}
        <motion.div
          whileHover={{ 
            y: -4,
            borderColor: 'var(--color-accent)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)'
          }}
          className="flex-1 rounded-2xl p-6 md:p-8 border transition-all duration-300 bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl relative overflow-hidden"
          style={{
            '--color-accent': '#3B82F6', // blue-500
          }}
        >
          {/* Background Image - Very subtle */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
            <img 
              src={step.backgroundImage}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white dark:bg-gray-900" />
          </div>

          {/* Content on top of image */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 md:hidden">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
            </div>
            
            <h3 className="hidden md:block text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {step.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {step.description}
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <span className="font-medium">Phase {step.id}</span>
                <span>•</span>
                <span>Estimated duration: 2-4 weeks</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
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
      className="relative py-20 md:py-32 overflow-hidden"
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
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Proven Methodology
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Approach
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A systematic, five-phase methodology designed for enterprise success—<br className="hidden md:block" />
            delivering predictable results from conception to optimization.
          </p>
        </motion.div>

        {/* Timeline for desktop */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          {/* Animated progress line */}
          <div className="absolute left-0 top-0 bottom-0 w-32 flex flex-col items-center">
            <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"
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
                className="absolute w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 left-1/2 -translate-x-1/2"
                style={{ top: `${(index / (steps.length - 1)) * 85}%` }}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.gradient}`} />
              </motion.div>
            ))}
          </div>

          {/* Steps container */}
          <div className="ml-32 space-y-24">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Stacked cards for mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
};

export default OurApproach;