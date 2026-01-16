import { useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for creating scroll-triggered parallax effects
 * @param {number} speed - Speed multiplier for parallax effect (default: 0.5)
 * @returns {object} - Motion values for transforms
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return { ref, y };
};

/**
 * Hook for fade in on scroll
 * @returns {object} - Ref and motion values
 */
export const useFadeInOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return { ref, opacity, scale };
};

/**
 * Hook for scale on scroll
 * @param {number} scaleAmount - Amount to scale (default: 1.2)
 * @returns {object} - Ref and scale value
 */
export const useScaleOnScroll = (scaleAmount = 1.2) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, scaleAmount]);

  return { ref, scale };
};

/**
 * Hook for rotating elements on scroll
 * @param {number} rotationDegrees - Degrees to rotate (default: 45)
 * @returns {object} - Ref and rotate value
 */
export const useRotateOnScroll = (rotationDegrees = 45) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotationDegrees]);

  return { ref, rotate };
};

/**
 * Hook for horizontal parallax movement
 * @param {number} distance - Distance to move horizontally
 * @returns {object} - Ref and x value
 */
export const useHorizontalParallax = (distance = 100) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { ref, x };
};

/**
 * Hook for gradient shift on scroll
 * @returns {object} - Ref and scroll progress
 */
export const useGradientShift = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return { ref, scrollYProgress };
};
