// SecurityCompliance.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Eye, 
  UserCheck,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Activity,
  Award,
  Binary,
  Scan
} from 'lucide-react';

const SecurityCompliance = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeLayer, setActiveLayer] = useState(null);

  const securityLayers = [
    { 
      id: 1, 
      size: 500, 
      label: 'Perimeter Defense',
      color: 'border-blue-500/30',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]'
    },
    { 
      id: 2, 
      size: 400, 
      label: 'Network Security',
      color: 'border-cyan-500/30',
      glow: 'shadow-[0_0_25px_rgba(6,182,212,0.3)]'
    },
    { 
      id: 3, 
      size: 300, 
      label: 'Application Layer',
      color: 'border-emerald-500/30',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]'
    },
    { 
      id: 4, 
      size: 200, 
      label: 'Data Protection',
      color: 'border-violet-500/30',
      glow: 'shadow-[0_0_15px_rgba(139,92,246,0.3)]'
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Encryption Standards',
      description: 'Data encryption at rest and in transit per regulatory requirements',
      metrics: ['256-bit encryption', 'TLS 1.3', 'Key rotation'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-gray-200 dark:border-gray-700/50',
      glowColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: ShieldCheck,
      title: 'Access Control',
      description: 'Identity management and authorization frameworks',
      metrics: ['Role-based access', 'Multi-factor auth', 'Audit logging'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-gray-200 dark:border-gray-700/50',
      glowColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: UserCheck,
      title: 'Identity Management',
      description: 'Centralized authentication with enterprise directory integration',
      metrics: ['SAML 2.0', 'OAuth 2.0', 'SSO'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-gray-200 dark:border-gray-700/50',
      glowColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Continuous security event monitoring and incident response',
      metrics: ['Event correlation', 'Threat detection', 'Response protocols'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-gray-200 dark:border-gray-700/50',
      glowColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: Globe,
      title: 'Data Residency',
      description: 'Geographic data sovereignty controls for regulatory compliance',
      metrics: ['Multi-region', 'Data classification', 'Local storage'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-gray-200 dark:border-gray-700/50',
      glowColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: FileCheck,
      title: 'Compliance Audit',
      description: 'Audit trail and compliance reporting infrastructure',
      metrics: ['SOC 2 Type II', 'ISO 27001', 'GDPR'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-gray-200 dark:border-gray-700/50',
      glowColor: 'hover:shadow-blue-500/20'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: Award },
    { name: 'ISO 27001', icon: Award },
    { name: 'GDPR', icon: CheckCircle2 },
    { name: 'HIPAA', icon: CheckCircle2 },
    { name: 'PCI DSS', icon: CheckCircle2 }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
    >
      {/* Minimal background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="mb-3 sm:mb-4">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em]">
              Information Security
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight px-4">
            Security and Compliance Framework
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Enterprise security architecture designed for regulatory compliance and operational resilience
          </p>
        </motion.div>

        {/* Layered Defense Visualization */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
            {/* Shield Layers - Desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px]"
            >
              {/* Layered Shields */}
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-lg aspect-square flex items-center justify-center">
                {securityLayers.map((layer, index) => (
                  <motion.div
                    key={layer.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { 
                      scale: 1, 
                      opacity: 1
                    } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15
                    }}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    onMouseLeave={() => setActiveLayer(null)}
                    className={`absolute rounded-full border-2 ${layer.color} ${
                      activeLayer === layer.id ? layer.glow : ''
                    } transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                    style={{ 
                      width: typeof window !== 'undefined' && window.innerWidth < 640 
                        ? `${layer.size * 0.6}px` 
                        : typeof window !== 'undefined' && window.innerWidth < 768
                        ? `${layer.size * 0.75}px`
                        : `${layer.size}px`, 
                      height: typeof window !== 'undefined' && window.innerWidth < 640 
                        ? `${layer.size * 0.6}px` 
                        : typeof window !== 'undefined' && window.innerWidth < 768
                        ? `${layer.size * 0.75}px`
                        : `${layer.size}px`,
                      background: activeLayer === layer.id 
                        ? `radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)`
                        : 'transparent'
                    }}
                  >
                    {/* Layer Label */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeLayer === layer.id ? 1 : 0.6 }}
                      className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm shadow-lg"
                    >
                      <span className="text-[10px] sm:text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                        {layer.label}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Central Shield Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative z-10"
                >
                  <div className="relative">
                    {/* Subtle Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 dark:opacity-30" />
                    
                    {/* Shield Container */}
                    <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl">
                      <Shield className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Real-time Monitoring Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  Live Security Metrics
                </h3>

                {/* Uptime Stat */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Secure Uptime</p>
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">99.99</span>
                        <span className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400">%</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mt-1">Last 12 months</p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600/30 dark:text-blue-400/30 group-hover:text-blue-600/50 dark:group-hover:text-blue-400/50 transition-colors" />
                  </div>
                </motion.div>

                {/* Security Incidents */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Security Incidents (2024)</p>
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">0</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 mt-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full" />
                        <p className="text-[10px] sm:text-xs text-gray-500">Zero breach incidents</p>
                      </div>
                    </div>
                    <Scan className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600/30 dark:text-blue-400/30 group-hover:text-blue-600/50 dark:group-hover:text-blue-400/50 transition-colors" />
                  </div>
                </motion.div>

                {/* Security Score */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">Security Posture Score</p>
                    <div className="flex items-end gap-2 sm:gap-4">
                      <div className="flex-1">
                        <div className="h-2.5 sm:h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '96%' } : {}}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="h-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mt-2">
                          <span className="text-[10px] sm:text-xs text-gray-500">Industry Average: 78%</span>
                          <span className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400">Your Score: 96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              Comprehensive Security Controls
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Every layer fortified with enterprise-grade security measures
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl border ${feature.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl ${feature.glowColor}`}
                >
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Animated Corner Accent */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: theme === 'dark' ? 0.3 : 0.2 }}
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} mb-3 sm:mb-4 shadow-lg`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                    </div>
                    
                    {/* Content */}
                    <h4 className={`text-base sm:text-lg font-bold mb-2 transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text'
                        : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text'
                    }`}>
                      {feature.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {feature.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400"
                        >
                          <Binary className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Compliance Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 sm:mt-16 lg:mt-24 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 px-4">
              Certified & Compliant
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
              Audited by third-party security firms
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {cert.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0" />
              <span>Penetration Tested Quarterly</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0" />
              <span>24/7 Security Operations Center</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0" />
              <span>Independent Security Audits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance;