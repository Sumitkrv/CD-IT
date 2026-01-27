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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const Navbar = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredService, setHoveredService] = useState(null);
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
          color: 'from-blue-500 to-blue-600',
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80'
        },
        { 
          icon: Smartphone, 
          title: 'Mobile Apps', 
          description: 'iOS & Android native applications',
          color: 'from-blue-500 to-blue-600',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
        },
        { 
          icon: Cloud, 
          title: 'Cloud Solutions', 
          description: 'AWS, Azure, GCP infrastructure',
          color: 'from-blue-500 to-blue-600',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80'
        },
        { 
          icon: BarChart3, 
          title: 'Data Analytics', 
          description: 'BI, dashboards & insights',
          color: 'from-blue-500 to-blue-600',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
        },
        { 
          icon: Shield, 
          title: 'Cybersecurity', 
          description: 'Enterprise-grade protection',
          color: 'from-blue-500 to-blue-600',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80'
        },
        { 
          icon: Sparkles, 
          title: 'AI/ML Solutions', 
          description: 'Intelligent automation',
          color: 'from-blue-500 to-blue-600',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80'
        },
      ]
    },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
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
            ? 'w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600/20'
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
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center space-x-3 group relative"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {/* Logo glow effect */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 blur-xl"
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
            <div className="hidden lg:flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.dropdown ? (
                        <>
                          <NavigationMenuTrigger className={`flex items-center justify-center h-10 px-5 rounded-lg transition-all duration-300 ${
                            activeLink === item.path
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                            <span className="whitespace-nowrap">{item.name}</span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="!w-[600px] p-6">
                            <div className="flex flex-col lg:grid grid-cols-2 gap-6">
                              {/* Left side - Description, Image & CTA */}
                              <div className="flex flex-col h-full justify-between">
                                <div className="flex flex-col">
                                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Enterprise-grade solutions designed to transform your business through strategic technology partnerships.
                                  </p>
                                </div>

                                {/* Dynamic Image Preview */}
                                <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 my-4">
                                  <AnimatePresence mode="wait">
                                    <motion.div
                                      key={hoveredService?.title || 'default'}
                                      initial={{ opacity: 0, scale: 1.05 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.95 }}
                                      transition={{ duration: 0.3 }}
                                      className="absolute inset-0"
                                    >
                                      <img
                                        src={hoveredService?.image || item.dropdown[0]?.image}
                                        alt={hoveredService?.title || item.dropdown[0]?.title}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                      <div className="absolute bottom-3 left-3 right-3">
                                        <p className="text-white font-semibold text-sm">
                                          {hoveredService?.title || item.dropdown[0]?.title}
                                        </p>
                                        <p className="text-white/80 text-xs mt-1">
                                          {hoveredService?.description || item.dropdown[0]?.description}
                                        </p>
                                      </div>
                                    </motion.div>
                                  </AnimatePresence>
                                </div>

                                <Link
                                  to="/contact"
                                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                  <button className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                                    Schedule Consultation
                                  </button>
                                </Link>
                              </div>

                              {/* Right side - Service Items */}
                              <div className="flex flex-col text-sm h-full justify-start space-y-1">
                                {item.dropdown.map((service) => (
                                  <NavigationMenuLink key={service.title} asChild>
                                    <Link
                                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="flex flex-row justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 py-3 px-4 rounded-lg transition-colors group"
                                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                      onMouseEnter={() => setHoveredService(service)}
                                      onMouseLeave={() => setHoveredService(null)}
                                    >
                                      <div className="flex items-center gap-3">
                                        <service.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                        <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium transition-colors">
                                          {service.title}
                                        </span>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className="relative"
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                          <motion.div
                            className={`flex items-center justify-center h-10 px-5 rounded-lg transition-all duration-300 ${
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
                              className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"
                              layoutId="active-indicator"
                            />
                          )}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center justify-end flex-shrink-0">
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <motion.button
                    className="hidden md:flex items-center justify-center h-10 px-5 flex-shrink-0 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 whitespace-nowrap"
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
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <motion.button
                    className="flex items-center justify-center h-10 px-5 flex-shrink-0 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-all duration-300 whitespace-nowrap"
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
                  className="lg:hidden flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-lg bg-gray-100 dark:bg-gray-800"
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
            />

            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="p-8">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-3"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      CD Solutions
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
                <div className="space-y-0 mb-8">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                      {item.dropdown ? (
                        <div className="py-3">
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full text-lg font-medium text-gray-900 dark:text-white"
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
                                <div className="pl-8 pt-3 space-y-2">
                                  {item.dropdown.map((service) => (
                                    <Link
                                      key={service.title}
                                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="flex items-center gap-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                      }}
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
                          className="flex items-center py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
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
                <div className="space-y-2">
                  <Link 
                    to="/contact" 
                    className="block" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <button className="w-full h-12 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book a Call
                    </button>
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="block" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <button className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all flex items-center justify-center">
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