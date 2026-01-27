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

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Enterprise IT Contact</span>
            </motion.div>
            
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="block text-gray-900 dark:text-white">
                  Get In Touch With
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Our IT Experts
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:mx-0 mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Connect with our IT consulting team to discuss your technology infrastructure needs, cloud migration strategy, or custom software development requirements.
              </motion.p>
            
              {/* Floating Stats */}
              <motion.div 
                className="flex lg:justify-start justify-center gap-8 mt-10 flex-wrap"
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
                    className="text-center lg:text-left group cursor-default"
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

            {/* Right Enterprise Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Image with overlay */}
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Enterprise IT Infrastructure"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-400/30" />
                
                {/* Floating accent elements */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Systems Online</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Infrastructure Uptime</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-dark-surface relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30 dark:to-dark-bg/20 pointer-events-none" />
        
        {/* Subtle background pattern for form area */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        
        <div className="container mx-auto px-6 lg:px-12 relative max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20">
            {/* Contact Form - Enhanced with Staggered Animations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Form
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-gray-50/80 dark:from-dark-surface dark:to-dark-bg border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-12 text-center shadow-xl shadow-blue-500/5 dark:shadow-blue-400/5"
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
                  className="space-y-7"
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
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-wider uppercase">
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

                  <div className="grid md:grid-cols-2 gap-5">
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-wider uppercase">
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
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-wider uppercase">
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
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-wider uppercase">
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
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-wider uppercase">
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

                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span>Submit Inquiry</span>
                      <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                      We respond to all inquiries within 24 business hours
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
              className="space-y-8"
            >
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Reach us through any of the following channels.
                </p>
              </div>
                
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      title: 'Enterprise Email',
                      value: 'contact@cdsolutions.com',
                      subtitle: 'Primary business correspondence',
                      link: 'mailto:contact@cdsolutions.com',
                      bgImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2574&auto=format&fit=crop'
                    },
                    {
                      icon: Phone,
                      title: 'Direct Line',
                      value: '+1 (555) 123-4567',
                      subtitle: 'Mon-Fri, 9AM-6PM EST',
                      link: 'tel:+15551234567',
                      bgImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop'
                    },
                    {
                      icon: MapPin,
                      title: 'HQ Location',
                      value: '123 Business Ave, Suite 500',
                      subtitle: 'San Francisco, CA 94105',
                      link: null,
                      bgImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                      className="group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-dark-surface dark:to-dark-bg/50 border-2 border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-6 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 cursor-pointer overflow-hidden"
                    >
                      {/* Subtle contextual background image */}
                      {item.bgImage && (
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-[0.05] dark:group-hover:opacity-[0.06] transition-opacity duration-500">
                          <img src={item.bgImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                      
                      {/* Gradient border effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/10 dark:to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex gap-4 relative z-10">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md">
                          <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Business Hours
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Standard support availability
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

              {/* Engagement Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg overflow-hidden"
              >
                {/* Subtle process flow background */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] dark:opacity-[0.06]">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 relative z-10">
                  <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Engagement Process
                </h3>
                
                <div className="relative z-10">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20 dark:from-blue-400/20 dark:via-blue-400/40 dark:to-blue-400/20" />
                  
                  {[
                    { step: '01', title: 'Initial Assessment', desc: 'Our team reviews your requirements', duration: '24h response' },
                    { step: '02', title: 'Discovery Call', desc: 'Technical alignment with architects', duration: '1-2 business days' },
                    { step: '03', title: 'Proposal Delivery', desc: 'Custom solution framework & roadmap', duration: '3-5 business days' },
                    { step: '04', title: 'Onboarding', desc: 'Secure project initiation & team allocation', duration: 'Upon approval' },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-12 pb-4 last:pb-0">
                      <div className="absolute left-3.5 top-1 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-600/10 dark:ring-blue-400/10" />
                      <div className="flex items-start gap-3">
                        <div className="text-xl font-bold text-light-text/20 dark:text-dark-text/20">{item.step}</div>
                        <div>
                          <h4 className="font-bold text-light-text dark:text-dark-text mb-1">{item.title}</h4>
                          <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-1.5">{item.desc}</p>
                          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
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

      {/* Location & Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-surface relative overflow-hidden">
        <TechBackground variant="minimal" intensity="low" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Global Presence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Strategically located to serve enterprise clients across North America
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Map Visualization */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200/50 dark:border-gray-800/50">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                    alt="Office Location Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-500/20 dark:from-blue-500/40 dark:to-cyan-400/30" />
                  
                  {/* Location Pin */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative">
                      <MapPin className="w-12 h-12 text-red-500 drop-shadow-lg" fill="currentColor" />
                      <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Office Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-dark-surface rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">San Francisco Headquarters</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Address</div>
                        <div className="text-gray-600 dark:text-gray-400">123 Business Ave, Suite 500<br />San Francisco, CA 94105</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                        <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                        <a href="mailto:contact@cdsolutions.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@cdsolutions.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <div className="flex justify-between">
                        <span>Parking:</span>
                        <span className="font-medium text-gray-900 dark:text-white">On-site garage available</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Public Transit:</span>
                        <span className="font-medium text-gray-900 dark:text-white">BART accessible</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Visitor Access:</span>
                        <span className="font-medium text-gray-900 dark:text-white">By appointment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Certifications */}
      <section className="py-16 bg-white dark:bg-dark-surface border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Trusted & Certified
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Industry-recognized certifications and partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'ISO 27001', desc: 'Information Security' },
              { name: 'SOC 2 Type II', desc: 'Security Compliance' },
              { name: 'AWS Partner', desc: 'Cloud Services' },
              { name: 'Microsoft Gold', desc: 'Technology Partner' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-6 bg-gray-50 dark:bg-dark-bg rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="font-bold text-gray-900 dark:text-white mb-1">{cert.name}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{cert.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-surface dark:to-dark-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Common Inquiries
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Quick answers to questions you may have
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'What is your typical project timeline?',
                  a: 'Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while enterprise implementations can range from 3-12 months. We provide detailed timelines during the discovery phase.'
                },
                {
                  q: 'Do you offer ongoing support and maintenance?',
                  a: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and dedicated support teams. Our SLA guarantees 99.9% uptime for critical systems.'
                },
                {
                  q: 'What industries do you specialize in?',
                  a: 'We serve a wide range of industries including Finance, Healthcare, E-commerce, Manufacturing, and Technology. Our team has deep expertise in industry-specific compliance requirements.'
                },
                {
                  q: 'How do you ensure data security?',
                  a: 'We follow industry-leading security practices including ISO 27001 certification, SOC 2 Type II compliance, end-to-end encryption, regular security audits, and secure development lifecycle protocols.'
                },
                {
                  q: 'Can you work with our existing technology stack?',
                  a: 'Absolutely. Our team is experienced with a wide variety of technologies and platforms. We conduct thorough assessments to integrate seamlessly with your existing infrastructure.'
                }
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white dark:bg-dark-surface border-2 border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all"
                >
                  <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-bg/50 transition-colors">
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Still have questions? We're here to help.
              </p>
              <motion.a
                href="mailto:contact@cdsolutions.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email Our Team</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;