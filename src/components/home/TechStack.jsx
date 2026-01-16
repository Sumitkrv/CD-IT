import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Database, 
  Shield,
  Zap,
  Layers
} from 'lucide-react';

// Import tech logos - In real project, these would be actual SVG/PNG imports
// For demo purposes, we'll use colored badges that mimic logos

const TechStack = () => {
  const technologies = [
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      // Unsplash: Server rooms, data centers, cloud infrastructure
      backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      items: [
        { 
          name: 'AWS', 
          logoColor: 'bg-gradient-to-br from-orange-500 to-yellow-500',
          logoChar: 'A',
          tagline: 'Advanced Architecture'
        },
        { 
          name: 'Azure', 
          logoColor: 'bg-gradient-to-br from-blue-600 to-blue-400',
          logoChar: 'A',
          tagline: 'Enterprise Solutions'
        },
        { 
          name: 'Google Cloud', 
          logoColor: 'bg-gradient-to-br from-green-500 to-blue-500',
          logoChar: 'G',
          tagline: 'AI & ML Infrastructure'
        },
        { 
          name: 'Kubernetes', 
          logoColor: 'bg-gradient-to-br from-blue-500 to-cyan-400',
          logoChar: 'K',
          tagline: 'Container Orchestration'
        },
        { 
          name: 'Docker', 
          logoColor: 'bg-gradient-to-br from-blue-400 to-cyan-300',
          logoChar: 'D',
          tagline: 'Container Platform'
        },
        { 
          name: 'Terraform', 
          logoColor: 'bg-gradient-to-br from-purple-600 to-purple-400',
          logoChar: 'T',
          tagline: 'Infrastructure as Code'
        }
      ]
    },
    {
      category: 'Development',
      icon: Code,
      // Unsplash: Developers working, coding environment
      backgroundImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
      items: [
        { 
          name: 'React', 
          logoColor: 'bg-gradient-to-br from-cyan-500 to-blue-500',
          logoChar: 'R',
          tagline: 'Enterprise UI'
        },
        { 
          name: 'Node.js', 
          logoColor: 'bg-gradient-to-br from-green-600 to-green-500',
          logoChar: 'N',
          tagline: 'Scalable Backend'
        },
        { 
          name: '.NET', 
          logoColor: 'bg-gradient-to-br from-purple-600 to-pink-500',
          logoChar: '.N',
          tagline: 'Enterprise Applications'
        },
        { 
          name: 'Python', 
          logoColor: 'bg-gradient-to-br from-yellow-500 to-blue-500',
          logoChar: 'Py',
          tagline: 'AI & Data Science'
        },
        { 
          name: 'Java', 
          logoColor: 'bg-gradient-to-br from-red-600 to-orange-500',
          logoChar: 'J',
          tagline: 'Legacy Modernization'
        },
        { 
          name: 'TypeScript', 
          logoColor: 'bg-gradient-to-br from-blue-600 to-blue-400',
          logoChar: 'TS',
          tagline: 'Type-Safe Development'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      // Unsplash: Data analytics, dashboards, business intelligence
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      items: [
        { 
          name: 'PostgreSQL', 
          logoColor: 'bg-gradient-to-br from-blue-600 to-blue-800',
          logoChar: 'PG',
          tagline: 'Relational Database'
        },
        { 
          name: 'MongoDB', 
          logoColor: 'bg-gradient-to-br from-green-600 to-green-700',
          logoChar: 'M',
          tagline: 'NoSQL Database'
        },
        { 
          name: 'Snowflake', 
          logoColor: 'bg-gradient-to-br from-blue-400 to-blue-300',
          logoChar: 'S',
          tagline: 'Data Warehouse'
        },
        { 
          name: 'Tableau', 
          logoColor: 'bg-gradient-to-br from-blue-500 to-purple-600',
          logoChar: 'T',
          tagline: 'Business Intelligence'
        },
        { 
          name: 'Power BI', 
          logoColor: 'bg-gradient-to-br from-yellow-500 to-orange-500',
          logoChar: 'PBI',
          tagline: 'Data Visualization'
        },
        { 
          name: 'Apache Spark', 
          logoColor: 'bg-gradient-to-br from-red-600 to-orange-500',
          logoChar: 'S',
          tagline: 'Big Data Processing'
        }
      ]
    },
    {
      category: 'Security & DevOps',
      icon: Shield,
      // Unsplash: Security, DevOps, monitoring systems
      backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      items: [
        { 
          name: 'GitLab', 
          logoColor: 'bg-gradient-to-br from-orange-600 to-red-500',
          logoChar: 'GL',
          tagline: 'DevOps Platform'
        },
        { 
          name: 'Jenkins', 
          logoColor: 'bg-gradient-to-br from-red-600 to-pink-500',
          logoChar: 'J',
          tagline: 'CI/CD Automation'
        },
        { 
          name: 'GitHub', 
          logoColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
          logoChar: 'GH',
          tagline: 'Version Control'
        },
        { 
          name: 'SonarQube', 
          logoColor: 'bg-gradient-to-br from-pink-500 to-purple-500',
          logoChar: 'SQ',
          tagline: 'Code Quality'
        },
        { 
          name: 'Splunk', 
          logoColor: 'bg-gradient-to-br from-blue-800 to-blue-900',
          logoChar: 'S',
          tagline: 'Security Monitoring'
        },
        { 
          name: 'Datadog', 
          logoColor: 'bg-gradient-to-br from-purple-600 to-pink-500',
          logoChar: 'DD',
          tagline: 'APM & Monitoring'
        }
      ]
    }
  ];

  const featuredLogos = [
    { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
    { name: 'Azure', color: 'from-blue-600 to-blue-400' },
    { name: 'React', color: 'from-cyan-500 to-blue-500' },
    { name: '.NET', color: 'from-purple-600 to-pink-500' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-blue-800' },
    { name: 'Kubernetes', color: 'from-blue-500 to-cyan-400' },
    { name: 'Docker', color: 'from-blue-400 to-cyan-300' },
    { name: 'GitHub', color: 'from-gray-800 to-gray-900' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-6">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
              TECHNOLOGY PARTNERSHIPS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Enterprise Technology Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Certified expertise across the modern technology stack trusted by industry leaders
          </p>
        </motion.div>

        {/* Featured Logos Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden py-8">
            <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-gray-900 via-transparent to-white dark:to-gray-900 z-10" />
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
            >
              {[...featuredLogos, ...featuredLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center"
                >
                  <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${logo.color} p-0.5`}>
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                      <div className="relative group">
                        {/* Logo representation */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                        <div className="relative px-6 py-3">
                          <div className={`text-2xl font-bold bg-gradient-to-br ${logo.color} bg-clip-text text-transparent`}>
                            {logo.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Technology Categories Grid */}
        <div className="space-y-16">
          {technologies.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-8"
              >
                {/* Category Header with Background Image */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-800 relative overflow-hidden rounded-xl">
                  {/* Subtle Background Image */}
                  {category.backgroundImage && (
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
                      <img 
                        src={category.backgroundImage}
                        alt=""
                        className="w-full h-full object-cover blur-sm"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  {/* Content above background */}
                  <div className="relative z-10 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                </div>

                {/* Logo Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      className="group"
                    >
                      <div className="relative h-full">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                          style={{
                            background: tech.logoColor.split(' ')[2].replace('from-', '').replace('to-', '')
                          }}
                        />
                        
                        {/* Main card */}
                        <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 h-full transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-600 group-hover:shadow-lg">
                          {/* Logo Container */}
                          <div className="mb-4">
                            <div className={`w-16 h-16 rounded-xl ${tech.logoColor} flex items-center justify-center mb-3 mx-auto`}>
                              <span className="text-white font-bold text-xl">
                                {tech.logoChar}
                              </span>
                            </div>
                            
                            {/* Technology Name */}
                            <h4 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-1">
                              {tech.name}
                            </h4>
                            
                            {/* Tagline */}
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                              {tech.tagline}
                            </p>
                          </div>

                          {/* Certification Badge */}
                          <div className="absolute top-3 right-3">
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30">
                              <Layers className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                Certified
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Partnerships Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-4">
              Official Partnerships & Certifications
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  AWS
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Advanced Partner
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Microsoft
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Gold Partner
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Google Cloud
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Premier Partner
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Plus specialized certifications in security, architecture, and DevOps
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;