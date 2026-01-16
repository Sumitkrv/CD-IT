import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Building2, 
  ShoppingBag, 
  GraduationCap, 
  Factory, 
  Landmark,
  Plane,
  Zap,
  Truck,
  Wifi,
  Droplets,
  Home,
  ChevronRight,
  Shield,
  Cpu,
  Cloud
} from 'lucide-react';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: 0,
      name: 'Healthcare',
      icon: Heart,
      color: 'from-rose-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10',
      description: 'HIPAA-compliant platforms for patient care and medical data management.',
      features: ['Patient Data Security', 'Telemedicine Integration', 'Compliance Monitoring'],
      visual: 'healthcare-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80'
    },
    {
      id: 1,
      name: 'Finance',
      icon: Shield,
      color: 'from-blue-600 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-600/10 to-cyan-500/10',
      description: 'Secure banking systems and fintech solutions with real-time analytics.',
      features: ['Fraud Detection', 'API Banking', 'Risk Analysis'],
      visual: 'finance-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80'
    },
    {
      id: 2,
      name: 'Retail',
      icon: ShoppingBag,
      color: 'from-purple-600 to-fuchsia-500',
      gradient: 'bg-gradient-to-br from-purple-600/10 to-fuchsia-500/10',
      description: 'Omnichannel commerce platforms with AI-powered inventory management.',
      features: ['Smart Inventory', 'Customer Analytics', 'Unified Commerce'],
      visual: 'retail-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80'
    },
    {
      id: 3,
      name: 'Education',
      icon: GraduationCap,
      color: 'from-emerald-500 to-teal-500',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
      description: 'Scalable learning management systems for institutions and enterprises.',
      features: ['Virtual Classrooms', 'Progress Tracking', 'Content Management'],
      visual: 'education-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80'
    },
    {
      id: 4,
      name: 'Manufacturing',
      icon: Factory,
      color: 'from-amber-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10',
      description: 'IoT-enabled production optimization and supply chain intelligence.',
      features: ['Predictive Maintenance', 'Quality Control AI', 'Supply Chain IoT'],
      visual: 'manufacturing-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80'
    },
    {
      id: 5,
      name: 'Government',
      icon: Landmark,
      color: 'from-indigo-600 to-violet-500',
      gradient: 'bg-gradient-to-br from-indigo-600/10 to-violet-500/10',
      description: 'Secure citizen services and digital transformation for public sector.',
      features: ['Digital Services', 'Secure Infrastructure', 'Citizen Portals'],
      visual: 'government-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&q=80'
    },
    {
      id: 6,
      name: 'Travel',
      icon: Plane,
      color: 'from-sky-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-sky-500/10 to-blue-500/10',
      description: 'Booking platforms and operational systems for hospitality and travel.',
      features: ['Dynamic Pricing', 'Booking Engines', 'Operational Management'],
      visual: 'travel-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80'
    },
    {
      id: 7,
      name: 'Energy',
      icon: Zap,
      color: 'from-yellow-500 to-amber-500',
      gradient: 'bg-gradient-to-br from-yellow-500/10 to-amber-500/10',
      description: 'Grid management and renewable energy monitoring solutions.',
      features: ['Grid Optimization', 'Renewable Monitoring', 'Energy Analytics'],
      visual: 'energy-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80'
    },
    {
      id: 8,
      name: 'Logistics',
      icon: Truck,
      color: 'from-teal-500 to-green-500',
      gradient: 'bg-gradient-to-br from-teal-500/10 to-green-500/10',
      description: 'Supply chain visibility and intelligent routing systems.',
      features: ['Real-time Tracking', 'Route Optimization', 'Warehouse AI'],
      visual: 'logistics-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80'
    },
    {
      id: 9,
      name: 'Telecom',
      icon: Wifi,
      color: 'from-cyan-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      description: 'Network management and customer experience platforms.',
      features: ['Network Monitoring', 'Customer Self-Service', 'Billing Systems'],
      visual: 'telecom-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&q=80'
    },
    {
      id: 10,
      name: 'Utilities',
      icon: Droplets,
      color: 'from-blue-500 to-indigo-500',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
      description: 'Resource management and smart infrastructure solutions.',
      features: ['Smart Metering', 'Resource Analytics', 'Infrastructure Monitoring'],
      visual: 'utilities-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80'
    },
    {
      id: 11,
      name: 'Real Estate',
      icon: Home,
      color: 'from-orange-500 to-rose-500',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-rose-500/10',
      description: 'Property management and virtual experience platforms.',
      features: ['Virtual Tours', 'Property Management', 'Investment Analytics'],
      visual: 'realestate-visual',
      backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'
    }
  ];

  const activeData = industries[activeIndustry];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="relative min-h-screen py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Trusted by industry leaders
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Built for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">industry</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Specialized solutions engineered for the unique challenges of your sector.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column - Stacked Industries */}
            <div className="relative">
              <div className="relative">
                <div className="relative">
                  {/* Stack Background Effect */}
                  <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent dark:via-gray-800/50 rounded-2xl" />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative space-y-1"
                    >
                      {industries.map((industry, index) => {
                        const isActive = index === activeIndustry;
                        const distanceFromActive = Math.abs(index - activeIndustry);
                        const zIndex = 12 - distanceFromActive;
                        const opacity = 1 - (distanceFromActive * 0.15);
                        const scale = 1 - (distanceFromActive * 0.03);
                        
                        return (
                          <motion.div
                            key={industry.id}
                            initial={false}
                            animate={{
                              y: isActive ? 0 : index > activeIndustry ? 8 * distanceFromActive : -8 * distanceFromActive,
                              scale,
                              opacity,
                              zIndex
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                              mass: 0.8
                            }}
                            className={`relative cursor-pointer ${
                              isActive ? 'pointer-events-none' : ''
                            }`}
                            onClick={() => setActiveIndustry(index)}
                            onMouseEnter={() => setActiveIndustry(index)}
                          >
                            <div className={`relative rounded-2xl transition-all duration-300 ${
                              isActive 
                                ? `${industry.gradient} shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50`
                                : 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg'
                            }`}>
                              <div className="p-6">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <motion.div
                                      animate={isActive ? { rotate: 5, scale: 1.1 } : { rotate: 0, scale: 1 }}
                                      transition={{ type: "spring", stiffness: 400 }}
                                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}
                                    >
                                      <industry.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    
                                    <div className="flex-1">
                                      <h3 className={`text-lg font-semibold transition-colors ${
                                        isActive 
                                          ? 'text-gray-900 dark:text-white'
                                          : 'text-gray-700 dark:text-gray-300'
                                      }`}>
                                        {industry.name}
                                      </h3>
                                      <AnimatePresence>
                                        {isActive && (
                                          <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-sm text-gray-600 dark:text-gray-400 mt-2"
                                          >
                                            {industry.description}
                                          </motion.p>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </div>
                                  
                                  <motion.div
                                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-blue-600 dark:text-blue-400"
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Visual Panel */}
            <div className="relative">
              <div className="sticky top-32">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                  }}
                  className="relative rounded-3xl overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={activeData.backgroundImage}
                      alt={activeData.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-20 mix-blend-multiply`} />
                  </div>
                  
                  {/* Abstract Pattern */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32 blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 md:p-12">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeData.color} flex items-center justify-center shadow-lg`}>
                          <activeData.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {activeData.name}
                          </h2>
                          <p className="text-gray-200 mt-2">
                            Industry-specific solutions
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-100 leading-relaxed">
                        {activeData.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Key Capabilities
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activeData.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                            <span className="text-white font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Stats/Impact */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-12 pt-8 border-t border-white/20"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">40%</div>
                          <div className="text-sm text-gray-300 mt-1">Efficiency Gain</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">99.9%</div>
                          <div className="text-sm text-gray-300 mt-1">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">24/7</div>
                          <div className="text-sm text-gray-300 mt-1">Support Coverage</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-12"
                    >
                      <button className="w-full px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20">
                        <div className="flex items-center justify-center gap-3">
                          <span>Explore {activeData.name} Solutions</span>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="inline-flex items-center gap-6">
              <button
                onClick={() => setActiveIndustry(prev => Math.max(0, prev - 1))}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={activeIndustry === 0}
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              
              <div className="flex items-center gap-2">
                {industries.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndustry(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeIndustry
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                    }`}
                    aria-label={`View ${industries[idx].name} industry`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveIndustry(prev => Math.min(industries.length - 1, prev + 1))}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={activeIndustry === industries.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
