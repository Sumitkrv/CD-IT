// SecurityCompliance.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Eye, 
  Server, 
  UserCheck,
  Database,
  Network,
  Key,
  Fingerprint,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const SecurityCompliance = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Encryption',
      description: 'AES-256 encryption at rest, TLS 1.3 in transit with perfect forward secrecy'
    },
    {
      icon: FileCheck,
      title: 'Compliance Frameworks',
      description: 'Certified for SOC 2 Type II, ISO 27001, GDPR, HIPAA, and PCI DSS'
    },
    {
      icon: Network,
      title: 'Zero-Trust Architecture',
      description: 'Microsegmented network with least-privilege access controls'
    },
    {
      icon: Database,
      title: 'Data Residency Controls',
      description: 'Regional data sovereignty with geo-fencing and custom retention policies'
    },
    {
      icon: Key,
      title: 'Identity Management',
      description: 'SAML 2.0, OAuth 2.0, SCIM provisioning with MFA enforcement'
    },
    {
      icon: AlertCircle,
      title: 'Continuous Monitoring',
      description: 'Real-time threat detection with automated incident response workflows'
    }
  ];

  const complianceBadges = [
    { name: 'SOC 2', color: 'from-blue-500 to-cyan-400' },
    { name: 'ISO 27001', color: 'from-emerald-500 to-teal-400' },
    { name: 'GDPR', color: 'from-violet-500 to-purple-400' },
    { name: 'HIPAA', color: 'from-rose-500 to-pink-400' },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enterprise Security Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.02] dark:opacity-[0.01] blur-sm"
          loading="lazy"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Column - Visual Section */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Shield Illustration */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Gradient Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20 blur-3xl rounded-full"
              />
              
              {/* Shield with Parallax */}
              <motion.div
                style={{ y }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Shield Base */}
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    {/* Shield Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl" />
                    
                    {/* Shield Pattern */}
                    <div className="absolute inset-4 rounded-2xl border-2 border-gray-300/30 dark:border-gray-600/30 flex items-center justify-center">
                      <div className="relative">
                        <Shield className="w-32 h-32 lg:w-40 lg:h-40 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                        
                        {/* Inner Shield Pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Lock className="w-16 h-16 lg:w-20 lg:h-20 text-emerald-600 dark:text-emerald-400 opacity-50" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Compliance Badges */}
              {complianceBadges.map((badge, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className={`relative bg-gradient-to-br ${badge.color} p-0.5 rounded-2xl shadow-lg`}>
                      <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-2xl">
                        <span className="text-sm font-semibold bg-gradient-to-br bg-clip-text text-transparent from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
                          {badge.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                Enterprise Security
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Security & Compliance
              <span className="block text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-400 mt-2">
                Built for regulated industries
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Our platform implements defense-in-depth security controls and maintains 
              comprehensive compliance certifications to meet the stringent requirements 
              of financial services, healthcare, and enterprise SaaS.
            </p>

            {/* Security Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-emerald-50/0 group-hover:from-blue-50/50 group-hover:to-emerald-50/50 dark:from-gray-800/0 dark:to-gray-900/0 dark:group-hover:from-gray-800/50 dark:group-hover:to-gray-900/50 rounded-xl transition-all duration-300" />
                  
                  <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-5 transition-all duration-300 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 group-hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 group-hover:from-blue-500/20 group-hover:to-emerald-500/20">
                          <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500 dark:text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>24/7 Security Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Third-Party Audited</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;