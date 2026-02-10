import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/CD-IT Images/footer.png"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50 z-[1]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-16 pb-12 gap-6">
          {/* Company Logo */}
          <div>
            <Link to="/" className="block transition-opacity duration-200 hover:opacity-80">
              <img 
                src="/it CD.png" 
                alt="CD Solutions" 
                className="h-10 w-auto drop-shadow-lg"
                style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(93%) saturate(2000%) hue-rotate(200deg) brightness(100%) contrast(101%)' }}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link 
              to="/services" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              Company
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-gray-200 transition-colors duration-150 drop-shadow-lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Tagline */}
        <div className="text-center py-8">
          <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
            Technology should support your business — not slow it down.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-t border-white/30 gap-4">
          {/* Copyright */}
          <div className="text-sm text-white order-2 sm:order-1 drop-shadow-lg">
            © 2026 CD Solutions. All rights reserved.
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