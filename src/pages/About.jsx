import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Shield, Target, Award, Globe, Clock, Code2, CheckCircle, ChevronRight } from 'lucide-react';

const About = () => {
  const metrics = [
    { value: '15+', label: 'Leadership Experience', icon: Users },
    { value: '50+', label: 'Certified Engineers', icon: Code2 },
    { value: '30+', label: 'Industry Consultants', icon: Users },
    { value: '24/7', label: 'Global Support', icon: Clock }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Listen First',
      description: 'Understanding business objectives, technical constraints, and strategic goals'
    },
    {
      icon: Shield,
      title: 'Collaborate Always',
      description: 'Transparent roadmaps, regular communication, shared ownership'
    },
    {
      icon: Award,
      title: 'Deliver Excellence',
      description: 'Enterprise-grade quality, rigorous testing, long-term reliability'
    }
  ];

  const values = [
    {
      title: 'Client-Centric',
      description: 'Long-term partnerships focused on measurable business outcomes.'
    },
    {
      title: 'Innovation',
      description: 'Practical application of emerging technologies to solve enterprise challenges.'
    },
    {
      title: 'Integrity',
      description: 'Transparent engagements, honest assessments, ethical delivery.'
    },
    {
      title: 'Excellence',
      description: 'Rigorous standards in architecture, code quality, and documentation.'
    },
    {
      title: 'Collaboration',
      description: 'Working as an extension of your team with clear communication.'
    },
    {
      title: 'Sustainability',
      description: 'Systems designed for longevity, maintainability, and efficiency.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2011'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2013'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2015'
    },
    {
      name: 'James Anderson',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tenure: 'Since 2014'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <Building2 className="w-4 h-4" />
                <span>Established 2011</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Building the digital infrastructure that powers tomorrow's enterprises
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                CD Solutions architects reliable, scalable digital systems for global enterprises. 
                We focus on long-term solutions that deliver sustainable business value.
              </p>

              <div className="pt-4">
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  View Our Work
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise infrastructure architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-light text-gray-900 dark:text-white mb-1">13</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years of excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-3">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
                Our Philosophy
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Since 2011, we've maintained that technology should empower businesses, not complicate them. 
                  We believe in long-term thinking over chasing trends.
                </p>
                <p>
                  Every engagement begins with deep understanding—of your business objectives, 
                  technical constraints, and strategic goals. Only then do we architect solutions 
                  that deliver both immediate value and future readiness.
                </p>
                <p>
                  Our approach combines business acumen with technical depth, ensuring every 
                  system we build drives tangible enterprise outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Technology architecture visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A disciplined approach to enterprise technology delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors">
                    <step.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced leaders guiding enterprise technology transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {leader.tenure}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-8">
              Let's discuss your enterprise needs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Schedule a consultation with our enterprise solutions team
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Contact Enterprise Sales
              </motion.button>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;