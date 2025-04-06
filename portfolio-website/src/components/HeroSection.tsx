'use client'; // Need client component for motion

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      {/* Wrap content in motion.div for staggering */}
      <motion.div
        className="max-w-4xl py-16 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3, // Start animating children after 0.3s
              staggerChildren: 0.2, // Stagger children by 0.2s
            },
          },
        }}
      >
        {/* Bolder heading, adjusted tracking */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground dark:text-foreground-dark mb-5"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          MICHAEL BENNETT
        </motion.h1>
        {/* Bolder subheading, wider tracking */}
        <motion.h2
          className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-primary dark:text-primary-light mb-8"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          DevOps Engineer
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-foreground/80 dark:text-foreground-dark/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          7+ years delivering robust automation solutions and driving system reliability. Proven track record automating server error handling and leading performance testing frameworks.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/resume.pdf" // Ensure resume.pdf is in /public
            target="_blank"
            rel="noopener noreferrer"
            // Use primary color classes for button
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md shadow-sm transition-all duration-500 ease-in-out hover:scale-105 w-full sm:w-auto" // Increased duration
          >
            View Resume (PDF)
          </Link>
          <Link
            href="#contact"
            // Added subtle border in light mode
            className="inline-block bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-foreground dark:text-foreground-dark font-medium py-3 px-8 rounded-md shadow-sm transition-all duration-500 ease-in-out hover:scale-105 w-full sm:w-auto" // Use white bg, adjust hover/border
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;