import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-14 h-7 bg-light-accent dark:bg-dark-accent rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: theme === 'dark' ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-yellow-500" />
        ) : (
          <Moon className="w-3 h-3 text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
