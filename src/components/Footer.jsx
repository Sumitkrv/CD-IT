import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/herolast.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-16 pb-12 gap-6">
          {/* Company Name */}
          <div>
            <Link to="/" className="text-xl font-medium text-white hover:text-gray-200 transition-colors duration-200 drop-shadow-lg">
              CD Solutions
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link 
              to="/services" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
            >
              Services
            </Link>
            <Link 
              to="/case-studies" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
            >
              Case Studies
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
            >
              Company
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-t border-white/30 gap-4">
          {/* Copyright */}
          <div className="text-sm text-white order-2 sm:order-1 drop-shadow-lg">
            © {currentYear} CD Solutions. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-3 text-sm text-white order-1 sm:order-2 drop-shadow-lg">
            <Link 
              to="/privacy" 
              className="hover:text-gray-200 transition-colors duration-150"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link 
              to="/terms" 
              className="hover:text-gray-200 transition-colors duration-150"
            >
              Terms
            </Link>
            <span>•</span>
            <Link 
              to="/security" 
              className="hover:text-gray-200 transition-colors duration-150"
            >
              Security
            </Link>
            <span>•</span>
            <Link 
              to="/compliance" 
              className="hover:text-gray-200 transition-colors duration-150"
            >
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;