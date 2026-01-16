import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-12 gap-6">
          {/* Company Name */}
          <div>
            <Link to="/" className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
              CD Solutions
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link 
              to="/services" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Industries
            </Link>
            <Link 
              to="/case-studies" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Case Studies
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Company
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-t border-gray-200 dark:border-gray-800 gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 order-2 sm:order-1">
            © {currentYear} CD Solutions. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 order-1 sm:order-2">
            <Link 
              to="/privacy" 
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link 
              to="/terms" 
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Terms
            </Link>
            <span>•</span>
            <Link 
              to="/security" 
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            >
              Security
            </Link>
            <span>•</span>
            <Link 
              to="/compliance" 
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
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