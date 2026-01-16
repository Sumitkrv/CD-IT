import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  ChevronRight, 
  Sparkles, 
  Globe, 
  Code, 
  Cloud, 
  Smartphone, 
  BarChart3,
  Shield,
  MessageSquare,
  Calendar,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Home,
  Briefcase,
  Building,
  Users,
  FileText,
  Mail
} from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [cursorVariant, setCursorVariant] = useState('default');
  const location = useLocation();

  // Cursor position for floating effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Handle cursor movement for floating effects
    const handleMouseMove = (e) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update active link based on location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { 
      name: 'Services', 
      path: '/services',
      icon: Code,
      dropdown: [
        { 
          icon: Globe, 
          title: 'Web Development', 
          description: 'Modern, scalable web applications',
          color: 'from-blue-500 to-cyan-500'
        },
        { 
          icon: Smartphone, 
          title: 'Mobile Apps', 
          description: 'iOS & Android native applications',
          color: 'from-purple-500 to-pink-500'
        },
        { 
          icon: Cloud, 
          title: 'Cloud Solutions', 
          description: 'AWS, Azure, GCP infrastructure',
          color: 'from-green-500 to-emerald-500'
        },
        { 
          icon: BarChart3, 
          title: 'Data Analytics', 
          description: 'BI, dashboards & insights',
          color: 'from-orange-500 to-red-500'
        },
        { 
          icon: Shield, 
          title: 'Cybersecurity', 
          description: 'Enterprise-grade protection',
          color: 'from-indigo-500 to-blue-500'
        },
        { 
          icon: Sparkles, 
          title: 'AI/ML Solutions', 
          description: 'Intelligent automation',
          color: 'from-violet-500 to-purple-500'
        },
      ]
    },
    { name: 'Industries', path: '/industries', icon: Building },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Insights', path: '/insights', icon: FileText },
  ];

  // Services dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Premium cursor follower effect */}
      <motion.div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          cursorVariant === 'link' 
            ? 'w-8 h-8 bg-white/20' 
            : cursorVariant === 'cta'
            ? 'w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500/20'
            : 'w-6 h-6 bg-white/10'
        }`}
        animate={{
          x: mousePosition.x - (cursorVariant === 'cta' ? 24 : cursorVariant === 'link' ? 16 : 12),
          y: mousePosition.y - (cursorVariant === 'cta' ? 24 : cursorVariant === 'link' ? 16 : 12),
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          damping: 15,
          stiffness: 150
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isDark 
            ? 'dark bg-gray-900/90' 
            : 'bg-gradient-to-r from-blue-50/80 via-white/90 to-cyan-50/80'
        } ${
          isScrolled 
            ? 'py-3 backdrop-blur-xl shadow-soft' 
            : 'py-5 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
          delay: 0.1
        }}
        style={{
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
          borderBottom: isScrolled 
            ? '1px solid rgba(59, 130, 246, 0.1)'
            : '1px solid transparent'
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo - Premium Design */}
            <div className="flex-shrink-0 -ml-6">
              <Link 
                to="/" 
                className="flex items-center space-x-3 group relative"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {/* Logo glow effect */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <motion.img
                  src="/it CD.png"
                  alt="IT Solutions Logo"
                  className={`relative h-12 w-auto object-contain transition-all duration-300 ${
                    isDark ? '' : 'brightness-0'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.3
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
              <div className="flex items-center space-x-0">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => {
                          setIsServicesOpen(true);
                          setCursorVariant('link');
                        }}
                        onMouseLeave={() => {
                          setIsServicesOpen(false);
                          setCursorVariant('default');
                        }}
                      >
                        <motion.button
                          className={`flex items-center justify-center h-10 px-4 rounded-lg transition-all duration-300 ${
                            activeLink === item.path
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                          }`}
                          whileHover={{ y: -1 }}
                          whileTap={{ y: 0 }}
                          style={{ lineHeight: '1.5' }}
                        >
                          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                          <span className="whitespace-nowrap">{item.name}</span>
                          <motion.div
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </motion.div>
                        </motion.button>

                        {/* Active link indicator */}
                        {activeLink === item.path && (
                          <motion.div
                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                            layoutId="active-indicator"
                          />
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="relative"
                        onMouseEnter={() => setCursorVariant('link')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        <motion.div
                          className={`flex items-center justify-center h-10 px-4 rounded-lg transition-all duration-300 ${
                            activeLink === item.path
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                          }`}
                          whileHover={{ y: -1 }}
                          whileTap={{ y: 0 }}
                          style={{ lineHeight: '1.5' }}
                        >
                          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                          <span className="whitespace-nowrap">{item.name}</span>
                        </motion.div>

                        {/* Active link indicator */}
                        {activeLink === item.path && (
                          <motion.div
                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                            layoutId="active-indicator"
                          />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex-1 flex items-center justify-end">
              <div className="flex items-center space-x-2">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <Sun className="w-5 h-5 text-yellow-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <Moon className="w-5 h-5 text-gray-700" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Secondary CTA */}
                <Link to="/contact">
                  <motion.button
                    className="hidden md:flex items-center justify-center h-10 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 whitespace-nowrap"
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Call
                  </motion.button>
                </Link>

                {/* Primary CTA */}
                <Link to="/contact">
                  <motion.button
                    className="flex items-center justify-center h-10 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-all duration-300 whitespace-nowrap"
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start a Project
                  </motion.button>
                </Link>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Dropdown for Services */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="container mx-auto px-12 py-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {navItems.find(item => item.name === 'Services')?.dropdown.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group block p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                        onMouseEnter={() => setCursorVariant('link')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {service.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            />

            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 z-40 shadow-2xl overflow-y-auto"
            >
              <div className="p-8">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Nexus Digital
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-1 mb-8">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                      {item.dropdown ? (
                        <div className="py-4">
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full text-lg font-medium text-gray-900 dark:text-white py-2"
                          >
                            <div className="flex items-center">
                              <item.icon className="w-5 h-5 mr-3" />
                              {item.name}
                            </div>
                            <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-8 pt-4 space-y-4">
                                  {item.dropdown.map((service) => (
                                    <Link
                                      key={service.title}
                                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="flex items-center space-x-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                                      <span>{service.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex items-center py-4 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{ minHeight: '56px' }}
                        >
                          <div className="flex items-center flex-1">
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                          </div>
                          {activeLink === item.path && (
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          )}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3">
                  <Link to="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book a Call
                    </button>
                  </Link>
                  
                  <Link to="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Start a Project
                    </button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                    <Mail className="w-5 h-5" />
                    <span>hello@nexusdigital.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;