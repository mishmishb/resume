'use client'; // Required for useState and useEffect

import React, { useState, useEffect } from 'react'; // Import hooks
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Change background after scrolling 10px
    };

    window.addEventListener('scroll', handleScroll);
    // Call handler once initially in case page loads scrolled
    handleScroll();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-xl border-b border-white/30 ring-1 ring-white/20 ${ // Amplified glassmorphism
        scrolled
          ? 'bg-gradient-to-br from-white/30 via-white/10 to-white/30 dark:from-black/30 dark:via-black/10 dark:to-black/30 shadow-md' // Scrolled state vibrant gradient
          : 'bg-gradient-to-br from-white/20 via-white/5 to-white/20 dark:from-black/20 dark:via-black/5 dark:to-black/20 shadow-none' // Initial state vibrant gradient
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            {/* Dynamically change text color based on scroll */}
            <Link href="/" className={`text-xl font-bold transition-colors ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}> {/* Keep dark text on light, white on dark initially for simplicity, adjust if hero bg clashes */}
              Michael Bennett
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {/* Dynamically change text color based on scroll, use primary for hover */}
            <Link href="#about" className={`transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-white'} hover:text-primary dark:hover:text-primary-light`}>About</Link>
            <Link href="#experience" className={`transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-white'} hover:text-primary dark:hover:text-primary-light`}>Experience</Link>
            <Link href="#skills" className={`transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-white'} hover:text-primary dark:hover:text-primary-light`}>Skills</Link>
            <Link href="#projects" className={`transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-white'} hover:text-primary dark:hover:text-primary-light`}>Projects</Link>
            <Link href="#contact" className={`transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-white'} hover:text-primary dark:hover:text-primary-light`}>Contact</Link>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 dark:text-gray-300 focus:outline-none">
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Placeholder) */}
      {/* <div className="md:hidden"> ... </div> */}
    </nav>
  );
};

export default Navbar;