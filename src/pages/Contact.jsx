import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ChevronRight, Shield, Zap, Sparkles, ArrowRight, Star } from 'lucide-react';
import TechBackground from '../components/backgrounds/TechBackground';
import { GlowOrbs, FloatingParticles, GrainTexture } from '../components/backgrounds/BackgroundEffects';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      {/* Hero Section with Enhanced Background */}
      <section className="relative py-32 bg-gradient-to-b from-white via-blue-50/30 to-white/90 dark:from-dark-bg dark:via-dark-surface/95 dark:to-dark-bg overflow-hidden">
        {/* Tech Background System */}
        <TechBackground variant="mesh" intensity="medium" />
        <GlowOrbs 
          orbs={[
            { color: 'blue', position: 'top-left', size: 'large' },
            { color: 'cyan', position: 'bottom-right', size: 'medium' }
          ]} 
        />
        <FloatingParticles count={20} />
        <GrainTexture />

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-gradient-to-r from-light-accent/8 via-blue-600/8 to-cyan-500/8 dark:from-dark-accent/15 dark:via-blue-500/15 dark:to-cyan-400/15 border border-light-accent/20 dark:border-dark-accent/30 backdrop-blur-sm shadow-lg shadow-light-accent/5 dark:shadow-dark-accent/10"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 64, 175, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-light-accent dark:text-dark-accent" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-light-accent to-blue-700 dark:from-dark-accent dark:to-cyan-400 bg-clip-text text-transparent">Secure Enterprise Contact</span>
              <div className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-light-accent dark:bg-dark-accent"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent">
                Strategic IT
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Partnership
              </span>
              <motion.span
                className="inline-block ml-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ✨
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-light-textSecondary/90 dark:text-dark-textSecondary/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connect with our <span className="font-semibold text-light-accent dark:text-dark-accent">enterprise architects</span> to transform your technology infrastructure with <span className="font-semibold">precision</span> and <span className="font-semibold">confidence</span>.
            </motion.p>
            
            {/* Floating Stats */}
            <motion.div 
              className="flex justify-center gap-8 mt-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { value: '< 24h', label: 'Response Time' },
                { value: '500+', label: 'Clients Served' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center group cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-light-accent to-cyan-600 dark:from-dark-accent dark:to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-dark-surface relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30 dark:to-dark-bg/20 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form - Enhanced with Staggered Animations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -top-3 left-0">
                <div className="flex items-center gap-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  <span className="font-medium">Form</span>
                  <div className="w-16 h-px bg-gradient-to-r from-light-accent dark:from-dark-accent to-transparent" />
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-10">
                Submit Your Inquiry
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-surface dark:to-dark-bg border border-gray-200 dark:border-gray-800 rounded-2xl p-10 text-center shadow-xl shadow-light-accent/5 dark:shadow-dark-accent/5"
                >
                  <div className="relative inline-block mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500 dark:text-green-400" />
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
                    Message Received
                  </h3>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6 max-w-md mx-auto">
                    Our enterprise team will review your inquiry and respond within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-light-textSecondary/70 dark:text-dark-textSecondary/70">
                    <Clock className="w-4 h-4" />
                    <span>Response time: 24 business hours</span>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  variants={formVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3 tracking-wide uppercase text-xs">
                        Full Name *
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-5 py-4 bg-white dark:bg-dark-surface border-2 border-gray-300/70 dark:border-gray-700/70 rounded-2xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:ring-4 focus:ring-light-accent/20 dark:focus:ring-dark-accent/30 focus:outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 hover:border-light-accent/50 dark:hover:border-dark-accent/50 shadow-sm hover:shadow-lg group-hover:shadow-light-accent/10 dark:group-hover:shadow-dark-accent/10"
                          placeholder="John Doe"
                        />
                        {focusedField === 'name' && (
                          <motion.div
                            className="absolute -inset-0.5 bg-gradient-to-r from-light-accent via-blue-500 to-cyan-500 dark:from-dark-accent dark:via-blue-400 dark:to-cyan-400 rounded-2xl opacity-20 blur -z-10"
                            layoutId="input-glow"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3 tracking-wide uppercase text-xs">
                        Work Email *
                      </label>
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-5 py-4 bg-white dark:bg-dark-surface border-2 border-gray-300/70 dark:border-gray-700/70 rounded-2xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:ring-4 focus:ring-light-accent/20 dark:focus:ring-dark-accent/30 focus:outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 hover:border-light-accent/50 dark:hover:border-dark-accent/50 shadow-sm hover:shadow-lg group-hover:shadow-light-accent/10 dark:group-hover:shadow-dark-accent/10"
                          placeholder="john@company.com"
                        />
                        {focusedField === 'email' && (
                          <motion.div
                            className="absolute -inset-0.5 bg-gradient-to-r from-light-accent via-blue-500 to-cyan-500 dark:from-dark-accent dark:via-blue-400 dark:to-cyan-400 rounded-2xl opacity-20 blur -z-10"
                            layoutId="input-glow"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3 tracking-wide uppercase text-xs">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white dark:bg-dark-surface border border-gray-300/70 dark:border-gray-700/70 rounded-2xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:ring-2 focus:ring-light-accent/20 dark:focus:ring-dark-accent/30 focus:outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm hover:shadow-md"
                        placeholder="Your Company"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3 tracking-wide uppercase text-xs">
                        Direct Line
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white dark:bg-dark-surface border border-gray-300/70 dark:border-gray-700/70 rounded-2xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:ring-2 focus:ring-light-accent/20 dark:focus:ring-dark-accent/30 focus:outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm hover:shadow-md"
                        placeholder="+1 (555) 123-4567"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3 tracking-wide uppercase text-xs">
                      Service Interest
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white dark:bg-dark-surface border border-gray-300/70 dark:border-gray-700/70 rounded-2xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:ring-2 focus:ring-light-accent/20 dark:focus:ring-dark-accent/30 focus:outline-none transition-all duration-300 appearance-none shadow-sm hover:shadow-md"
                      >
                        <option value="">Select enterprise service</option>
                        <option value="cloud">Cloud Infrastructure & Migration</option>
                        <option value="security">Cybersecurity & Compliance</option>
                        <option value="development">Custom Enterprise Development</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="analytics">Data Analytics & AI</option>
                        <option value="consulting">Strategic IT Consulting</option>
                      </select>
                      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-5 h-5 text-light-textSecondary dark:text-dark-textSecondary rotate-90" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3 tracking-wide uppercase text-xs">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white dark:bg-dark-surface border border-gray-300/70 dark:border-gray-700/70 rounded-2xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:ring-2 focus:ring-light-accent/20 dark:focus:ring-dark-accent/30 focus:outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 resize-none shadow-sm hover:shadow-md leading-relaxed"
                      placeholder="Brief us on your requirements, timeline, and technical considerations..."
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      className="relative w-full px-8 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 dark:from-blue-600 dark:via-blue-500 dark:to-cyan-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 overflow-hidden group shadow-2xl hover:shadow-3xl"
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      {/* Particle effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: '50%',
                            }}
                            animate={{
                              y: [-10, -30],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                      <span className="relative z-10">Submit Enterprise Inquiry</span>
                      <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                    </motion.button>
                    <p className="text-xs text-light-textSecondary/60 dark:text-dark-textSecondary/60 mt-3 text-center">
                      All inquiries are encrypted and handled with strict confidentiality
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>

            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-10"
            >
              <div>
                <div className="absolute -top-3 left-0">
                  <div className="flex items-center gap-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    <span className="font-medium">Contact</span>
                    <div className="w-16 h-px bg-gradient-to-r from-light-accent dark:from-dark-accent to-transparent" />
                  </div>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-10">
                  Enterprise Channels
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Enterprise Email',
                      value: 'contact@cdsolutions.com',
                      subtitle: 'Primary business correspondence',
                      link: 'mailto:contact@cdsolutions.com'
                    },
                    {
                      icon: Phone,
                      title: 'Direct Line',
                      value: '+1 (555) 123-4567',
                      subtitle: 'Mon-Fri, 9AM-6PM EST',
                      link: 'tel:+15551234567'
                    },
                    {
                      icon: MapPin,
                      title: 'HQ Location',
                      value: '123 Business Ave, Suite 500',
                      subtitle: 'San Francisco, CA 94105',
                      link: null
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
                      className="group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-dark-surface dark:to-dark-bg/50 border-2 border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-6 hover:border-light-accent/50 dark:hover:border-dark-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/20 cursor-pointer overflow-hidden"
                    >
                      {/* Gradient border effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-light-accent/0 via-light-accent/5 to-light-accent/0 dark:from-dark-accent/0 dark:via-dark-accent/10 dark:to-dark-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex gap-4 relative z-10">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-light-accent/20 via-blue-500/10 to-cyan-500/5 dark:from-dark-accent/20 dark:via-blue-500/20 dark:to-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <item.icon className="w-6 h-6 text-light-accent dark:text-dark-accent group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-light-text dark:text-dark-text mb-1">
                            {item.title}
                          </div>
                          <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-2">
                            {item.subtitle}
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-lg text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 inline-flex items-center gap-2 group/link"
                            >
                              {item.value}
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover/link:translate-x-0" />
                            </a>
                          ) : (
                            <div className="text-lg text-light-text dark:text-dark-text whitespace-pre-line">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Business Hours - SLA Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-blue-50/80 dark:from-dark-bg/80 dark:via-dark-surface/60 dark:to-dark-bg/80 backdrop-blur-sm border-2 border-gradient-to-r border-light-accent/20 dark:border-dark-accent/30 rounded-2xl p-8 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-light-accent/10 to-cyan-500/10 dark:from-dark-accent/20 dark:to-cyan-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg">
                    <Clock className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                      Service Level Agreement
                    </h3>
                    <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                      Standard response commitments
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', availability: 'Primary Support' },
                    { days: 'Saturday', hours: '10:00 AM - 4:00 PM EST', availability: 'Limited Support' },
                    { days: 'Sunday', hours: 'Emergency Only', availability: 'Critical Issues' },
                  ].map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200/40 dark:border-gray-800/40 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-light-text dark:text-dark-text">{item.days}</div>
                          <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-1">{item.availability}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-light-text dark:text-dark-text">{item.hours}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-800/60">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                    <span className="font-semibold text-light-text dark:text-dark-text">
                      24/7 Emergency Support for Critical Systems
                    </span>
                  </div>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-2 ml-8">
                    Immediate response for P1 incidents
                  </p>
                </div>
              </motion.div>

              {/* Enhanced Process Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative bg-gradient-to-br from-light-accent/8 via-blue-500/5 to-cyan-500/8 dark:from-dark-accent/10 dark:via-blue-500/8 dark:to-cyan-500/10 border-2 border-light-accent/20 dark:border-dark-accent/20 rounded-2xl p-8 overflow-hidden shadow-xl"
              >
                {/* Animated corner accent */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-light-accent/20 to-cyan-500/20 dark:from-dark-accent/30 dark:to-cyan-500/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-6 flex items-center gap-3">
                  <div className="p-1.5 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  </div>
                  Our Engagement Process
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-accent/20 via-light-accent/40 to-light-accent/20 dark:from-dark-accent/20 dark:via-dark-accent/40 dark:to-dark-accent/20" />
                  
                  {[
                    { step: '01', title: 'Initial Assessment', desc: 'Our team reviews your requirements', duration: '24h response' },
                    { step: '02', title: 'Discovery Call', desc: 'Technical alignment with architects', duration: '1-2 business days' },
                    { step: '03', title: 'Proposal Delivery', desc: 'Custom solution framework & roadmap', duration: '3-5 business days' },
                    { step: '04', title: 'Onboarding', desc: 'Secure project initiation & team allocation', duration: 'Upon approval' },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-12 pb-8 last:pb-0">
                      <div className="absolute left-3.5 top-1 w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent ring-4 ring-light-accent/10 dark:ring-dark-accent/10" />
                      <div className="flex items-start gap-4">
                        <div className="text-2xl font-bold text-light-text/20 dark:text-dark-text/20">{item.step}</div>
                        <div>
                          <h4 className="font-bold text-light-text dark:text-dark-text mb-1">{item.title}</h4>
                          <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-2">{item.desc}</p>
                          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-light-accent dark:text-dark-accent bg-light-accent/5 dark:bg-dark-accent/5 px-3 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;