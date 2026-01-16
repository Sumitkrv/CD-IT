import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Insights = () => {
  const blogPosts = [
    {
      title: 'The Future of Cloud Computing in 2026',
      excerpt: 'Exploring emerging trends in cloud infrastructure, including serverless computing, edge computing, and multi-cloud strategies.',
      author: 'Sarah Mitchell',
      date: 'January 10, 2026',
      category: 'Cloud',
      readTime: '8 min read',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Best Practices for Enterprises',
      excerpt: 'A comprehensive guide to protecting your organization from modern cyber threats and ensuring compliance.',
      author: 'Michael Chen',
      date: 'January 8, 2026',
      category: 'Security',
      readTime: '10 min read',
      image: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      title: 'Digital Transformation: Beyond the Buzzword',
      excerpt: 'Understanding what digital transformation really means and how to implement it successfully in your organization.',
      author: 'Emily Rodriguez',
      date: 'January 5, 2026',
      category: 'Strategy',
      readTime: '12 min read',
      image: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    },
    {
      title: 'AI and Machine Learning in Business',
      excerpt: 'Practical applications of AI and ML that drive real business value and competitive advantage.',
      author: 'James Anderson',
      date: 'January 3, 2026',
      category: 'AI/ML',
      readTime: '15 min read',
      image: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'Microservices Architecture: When and Why',
      excerpt: 'Understanding when microservices make sense and how to transition from monolithic applications.',
      author: 'David Kim',
      date: 'December 28, 2025',
      category: 'Development',
      readTime: '11 min read',
      image: 'bg-gradient-to-br from-orange-500 to-yellow-500'
    },
    {
      title: 'Data Privacy in the Modern Age',
      excerpt: 'Navigating GDPR, CCPA, and other privacy regulations while maintaining business operations.',
      author: 'Lisa Thompson',
      date: 'December 25, 2025',
      category: 'Compliance',
      readTime: '9 min read',
      image: 'bg-gradient-to-br from-teal-500 to-cyan-500'
    }
  ];

  const categories = ['All', 'Cloud', 'Security', 'Strategy', 'AI/ML', 'Development', 'Compliance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-light-bg via-white to-light-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-3xl mx-auto mb-8">
              Expert perspectives on technology, innovation, and digital transformation.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-textSecondary dark:text-dark-textSecondary" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-xl text-light-text dark:text-dark-text focus:border-light-accent dark:focus:border-dark-accent focus:outline-none transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-light-accent dark:bg-dark-accent text-white'
                    : 'bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-light-accent dark:hover:border-dark-accent transition-all shadow-lg"
              >
                {/* Image */}
                <div className={`h-48 ${post.image} relative`}>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 rounded-full text-sm font-medium text-light-text dark:text-dark-text">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-light-textSecondary dark:text-dark-textSecondary mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                      {post.readTime}
                    </span>
                    <Link to={`/insights/${index + 1}`}>
                      <button className="flex items-center gap-2 text-light-accent dark:text-dark-accent font-semibold hover:gap-3 transition-all">
                        Read More
                        <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
