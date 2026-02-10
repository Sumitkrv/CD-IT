import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ShieldCheck, 
  Code2, 
  RefreshCw, 
  BarChart3, 
  Users,
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const CoreServices = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'development',
      icon: Code2,
      title: 'Product & Software Development',
      description: 'Custom software solutions designed to solve specific business challenges. From internal systems to customer-facing platforms, we build technology that scales with your needs.',
      capabilities: [
        'Custom application development and systems',
        'Customer-facing platform engineering',
        'Scalable architecture and design'
      ],
      metrics: { approach: 'Custom', scalability: 'Built-in' },
      link: '/services',
      backgroundImage: '/CD-IT Images/home custom development.png'
    },
    {
      id: 'platforms',
      icon: Cloud,
      title: 'Digital Platforms & Web Solutions',
      description: 'Enterprise-grade websites, dashboards, and digital platforms focused on performance, usability, and long-term maintainability.',
      capabilities: [
        'Enterprise website development',
        'Dashboard and data visualization platforms',
        'Performance-optimized digital solutions'
      ],
      metrics: { focus: 'Performance', quality: 'Enterprise' },
      link: '/services',
      backgroundImage: '/CD-IT Images/home cloud infrastructure.jpg'
    },
    {
      id: 'infrastructure',
      icon: ShieldCheck,
      title: 'IT Infrastructure & Security',
      description: 'Secure infrastructure planning, deployment, and system hardening to ensure reliability, data protection, and compliance readiness.',
      capabilities: [
        'Infrastructure planning and deployment',
        'System hardening and security protocols',
        'Compliance readiness and data protection'
      ],
      metrics: { security: 'Hardened', compliance: 'Ready' },
      link: '/services',
      backgroundImage: '/CD-IT Images/home cyber security.jpg'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
              Enterprise Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
            Core Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Strategic technology partnerships delivering measurable business outcomes
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-100 transition-opacity duration-500">
                    <img 
                      src={service.backgroundImage} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 group-hover:from-white/90 group-hover:via-white/85 group-hover:to-white/90 dark:group-hover:from-gray-900/90 dark:group-hover:via-gray-900/85 dark:group-hover:to-gray-900/90 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative p-5 sm:p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {Object.entries(service.metrics).map(([key, value]) => (
                        <div key={key} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                          <span className="text-gray-500 dark:text-gray-400">{key}:</span>{' '}
                          <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Capabilities Preview */}
                    <div className="mb-4">
                      <ul className="space-y-1.5">
                        {service.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      to={service.link}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300 pointer-events-none"
                    animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;