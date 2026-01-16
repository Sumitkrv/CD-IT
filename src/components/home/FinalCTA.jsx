import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const FinalCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* High-Impact Unsplash Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
          alt="Innovation and growth"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Strong gradient overlay for text contrast and visual impact */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-pink-900/90" />
        {/* Additional darkening for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Gradient Background with Scroll Movement - Now layered above image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      </motion.div>

      {/* Animated Light Movement */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        {/* CTA content removed */}
      </div>
    </section>
  );
};

export default FinalCTA;
