import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Building2, Calendar, Clock, CheckCircle2, ExternalLink, ChevronRight, Target, Zap, TrendingUp, Shield, Clock as ClockIcon, Users } from 'lucide-react';
import TechBackground from '../components/backgrounds/TechBackground';
import { DataFlowLines, GrainTexture } from '../components/backgrounds/BackgroundEffects';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const caseStudies = [
    {
      id: 1,
      title: 'Enterprise Cloud Migration',
      client: 'Global Financial Services Corporation',
      industry: 'Finance',
      category: 'Cloud',
      year: '2023',
      duration: '6 Months',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      challenge: 'Legacy infrastructure limiting scalability and innovation, with systems unable to handle peak loads during market volatility.',
      solution: 'Comprehensive cloud migration to AWS with hybrid architecture, Kubernetes containerization, automated CI/CD pipelines, and robust disaster recovery.',
      results: [
        { metric: '40%', label: 'Cost Reduction', icon: TrendingUp },
        { metric: '3×', label: 'Performance Gain', icon: Zap },
        { metric: '99.9%', label: 'Uptime', icon: Shield },
        { metric: '6 Months', label: 'Delivery', icon: ClockIcon }
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      testimonial: {
        quote: 'CD Solutions transformed our infrastructure with minimal disruption.',
        author: 'Sarah Mitchell',
        role: 'CTO, Global Financial Services',
        avatar: 'SM'
      },
      process: [
        { step: 'Discovery & Assessment', description: 'Comprehensive analysis of existing infrastructure and migration requirements' },
        { step: 'Architecture Design', description: 'Cloud-native architecture with failover and disaster recovery planning' },
        { step: 'Migration Strategy', description: 'Phased migration approach with zero-downtime deployment' },
        { step: 'Implementation & Testing', description: 'Rigorous testing and validation before production rollout' }
      ],
      metrics: [
        { value: '$2.4M', label: 'Annual Savings' },
        { value: '5M', label: 'Users Migrated' },
        { value: '99.9%', label: 'SLA Compliance' },
        { value: '100%', label: 'Security Audit Pass' }
      ]
    },
    {
      id: 2,
      title: 'Healthcare Digital Transformation',
      client: 'National Healthcare Network',
      industry: 'Healthcare',
      category: 'Digital Transformation',
      year: '2023',
      duration: '18 Months',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      challenge: 'Fragmented systems across 50+ facilities resulting in poor data visibility and inefficient workflows.',
      solution: 'Integrated healthcare platform with real-time synchronization, mobile access, and HIPAA-compliant security measures.',
      results: [
        { metric: '60%', label: 'Efficiency Gain', icon: TrendingUp },
        { metric: '95%', label: 'Patient Satisfaction', icon: Users },
        { metric: '18-Month', label: 'ROI Achieved', icon: Target },
        { metric: '99.9%', label: 'Availability', icon: Shield }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Azure'],
      testimonial: {
        quote: 'The platform revolutionized how we deliver care.',
        author: 'Dr. Emily Rodriguez',
        role: 'CIO, National Healthcare Network',
        avatar: 'ER'
      },
      process: [
        { step: 'Needs Assessment', description: 'Collaborative workshops with medical staff and administrators' },
        { step: 'Platform Design', description: 'User-centric design focusing on clinical workflows' },
        { step: 'Development', description: 'Agile development with bi-weekly stakeholder reviews' },
        { step: 'Training & Rollout', description: 'Comprehensive training program across all facilities' }
      ],
      metrics: [
        { value: '50+', label: 'Facilities Integrated' },
        { value: '2.3M', label: 'Patient Records' },
        { value: '40%', label: 'Time Saved' },
        { value: '100%', label: 'HIPAA Compliant' }
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Platform Modernization',
      client: 'Leading Retail Corporation',
      industry: 'Retail',
      category: 'E-Commerce',
      year: '2024',
      duration: '8 Months',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      challenge: 'Outdated platform unable to handle peak traffic, resulting in crashes and lost revenue.',
      solution: 'Microservices architecture with React frontend, Node.js backend, CDN implementation, and auto-scaling infrastructure.',
      results: [
        { metric: '99.9%', label: 'Uptime', icon: Shield },
        { metric: '85%', label: 'Revenue Increase', icon: TrendingUp },
        { metric: '70%', label: 'Faster Load', icon: Zap },
        { metric: '45%', label: 'Conversion Rate', icon: Target }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Elasticsearch'],
      testimonial: {
        quote: 'Handled our biggest Black Friday without a single issue.',
        author: 'James Anderson',
        role: 'CEO, Leading Retail Corporation',
        avatar: 'JA'
      },
      process: [
        { step: 'Performance Audit', description: 'Comprehensive analysis of existing bottlenecks and pain points' },
        { step: 'Architecture Planning', description: 'Microservices architecture design with auto-scaling' },
        { step: 'Development', description: 'Continuous delivery with A/B testing capabilities' },
        { step: 'Launch & Optimization', description: 'Gradual rollout with real-time monitoring' }
      ],
      metrics: [
        { value: '$150M+', label: 'Revenue Impact' },
        { value: '10M+', label: 'Daily Users' },
        { value: '200ms', label: 'Page Load Time' },
        { value: '99.99%', label: 'Peak Load Handling' }
      ]
    }
  ];

  const categories = ['All', 'Cloud', 'Digital Transformation', 'E-Commerce'];

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const CaseStudyCard = ({ study }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
              {study.industry}
            </span>
            <h3 className="text-xl font-bold text-white">{study.title}</h3>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
            <Building2 className="w-4 h-4" />
            <span>{study.client}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {study.results.slice(0, 2).map((result, idx) => (
              <div key={idx} className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {result.metric}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {study.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setSelectedStudy(study)}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  };

  const CaseStudyModal = () => {
    if (!selectedStudy) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-100 dark:bg-gray-900 z-50 overflow-hidden"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setSelectedStudy(null)}
            className="fixed top-6 right-6 z-50 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-700 shadow-lg"
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="h-full grid lg:grid-cols-2">
            {/* Left Side - Image */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-full bg-gray-900"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 mix-blend-overlay z-10" />
              <img
                src={selectedStudy.image}
                alt={selectedStudy.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent dark:from-gray-900 dark:via-gray-900/70 z-20" />
              
              {/* Floating Info Card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 z-30"
              >
                <div className="bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-3">
                    {selectedStudy.industry}
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-3">
                    {selectedStudy.title}
                  </h2>
                  <p className="text-gray-200 text-lg mb-4">{selectedStudy.client}</p>
                  
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedStudy.year}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedStudy.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 overflow-y-auto"
            >
              <div className="p-8 lg:p-12 space-y-10 bg-white dark:bg-gray-900">
                
                {/* Key Metrics */}
                <div>
                  <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-6">Impact Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedStudy.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="relative group"
                      >
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-600/10 p-5 rounded-xl border border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all">
                          <result.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                            {result.metric}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            {result.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Challenge</h3>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-xl p-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedStudy.challenge}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Solution</h3>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedStudy.solution}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-600/20 dark:to-blue-700/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process Timeline */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Implementation Process</h3>
                  </div>
                  <div className="space-y-4">
                    {selectedStudy.process.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1 pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.step}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-600/10 dark:via-blue-700/10 dark:to-blue-600/10 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                      {selectedStudy.testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">{selectedStudy.testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedStudy.testimonial.role}</p>
                    </div>
                  </div>
                  <svg className="w-10 h-10 text-blue-300 dark:text-blue-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl text-gray-900 dark:text-white italic leading-relaxed">
                    "{selectedStudy.testimonial.quote}"
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-6 space-y-4">
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                    <span>Start Similar Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="w-full py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-700"
                  >
                    Close Details
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <TechBackground variant="grid" intensity="medium" />
        <DataFlowLines lineCount={4} />
        <GrainTexture opacity={0.03} />
        
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block mb-6 px-5 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-500/30">
              Proven Enterprise Success
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Case Studies
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover how we deliver transformative results through innovative solutions and strategic partnerships.
            </p>

            <div className="flex justify-center gap-12">
              {[
                { value: '40+', label: 'Enterprise Projects' },
                { value: '99.9%', label: 'Client Satisfaction' },
                { value: '$100M+', label: 'Value Delivered' },
                { value: '50+', label: 'Industries Served' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Filter by:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredStudies.length} of {caseStudies.length} case studies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal />
    </div>
  );
};

export default CaseStudies;