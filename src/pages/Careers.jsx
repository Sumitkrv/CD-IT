import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, TrendingUp } from 'lucide-react';
import TechBackground from '../components/backgrounds/TechBackground';
import { FloatingParticles, GlowOrbs, GradientOverlay, GrainTexture } from '../components/backgrounds/BackgroundEffects';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Cloud Architect',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      level: 'Senior',
      description: 'Lead cloud infrastructure design and implementation for enterprise clients.'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'New York, NY / Hybrid',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Monitor, detect, and respond to security threats across client environments.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid-Senior',
      description: 'Build modern web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      level: 'Senior',
      description: 'Automate infrastructure and streamline deployment processes.'
    },
    {
      title: 'IT Consultant',
      department: 'Consulting',
      location: 'Multiple Locations',
      type: 'Full-time',
      level: 'Senior',
      description: 'Provide strategic technology guidance to enterprise clients.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Hybrid',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Create intuitive and beautiful user experiences for enterprise applications.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance. Mental health support and wellness programs.'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Development',
      description: 'Annual learning budget, conference attendance, certifications, and mentorship programs.'
    },
    {
      icon: Zap,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, unlimited PTO, and parental leave.'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment, team events, volunteer opportunities, and inclusive culture.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies and approaches.'
    },
    {
      title: 'Collaboration',
      description: 'Great work happens when talented people work together toward shared goals.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.'
    },
    {
      title: 'Growth',
      description: 'We invest in our people\'s development and celebrate their achievements.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <TechBackground variant="particles" intensity="medium" />
        <GlowOrbs
          orbs={[
            { color: 'rgba(59, 130, 246, 0.15)', size: 400, x: 20, y: 20 },
            { color: 'rgba(168, 85, 247, 0.15)', size: 350, x: 80, y: 60 }
          ]}
        />
        <FloatingParticles count={25} />
        <GradientOverlay fromColor="rgba(59, 130, 246, 0.1)" toColor="rgba(236, 72, 153, 0.1)" />
        <GrainTexture opacity={0.03} />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              Build your career with a team that values innovation, collaboration, and continuous growth.
            </p>
            <div className="flex flex-wrap gap-8 justify-center text-left">
              {[
                { value: '50+', label: 'Team Members' },
                { value: '12', label: 'Countries' },
                { value: '4.8/5', label: 'Glassdoor Rating' },
                { value: '95%', label: 'Employee Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-3xl mx-auto">
              We're building a workplace where talented people can do their best work and grow their careers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-surface rounded-2xl p-8 border border-gray-200 dark:border-gray-800 text-center"
              >
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
                  {value.title}
                </h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-dark-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-3xl mx-auto">
              We invest in our team's success with comprehensive benefits and a supportive environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-light-bg dark:bg-dark-bg rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
              >
                <benefit.icon className="w-12 h-12 text-light-accent dark:text-dark-accent mb-4" />
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-3xl mx-auto">
              Find your next opportunity and join a team that's shaping the future of enterprise technology.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                className="bg-white dark:bg-dark-surface rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-light-accent dark:hover:border-dark-accent transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm font-medium">
                        {position.level}
                      </span>
                    </div>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    className="px-6 py-3 bg-light-accent dark:bg-dark-accent text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-light-accentHover dark:hover:bg-dark-accentHover transition-colors whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-dark-surface">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-light-text dark:text-dark-text mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto mb-8">
              We're always looking for talented people. Send us your resume and tell us how you can contribute.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-light-accent dark:bg-dark-accent text-white rounded-xl font-semibold text-lg hover:bg-light-accentHover dark:hover:bg-dark-accentHover transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
