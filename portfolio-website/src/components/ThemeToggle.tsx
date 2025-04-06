'use client'; // Required for hooks

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Basic Sun and Moon SVG Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707.707m12.728 0l-.707-.707M6.343 17.657l-.707-.707M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Ensure component is mounted on client before rendering UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to prevent layout shift and hydration errors
    return <div className="w-8 h-8 p-2"></div>; // Match button padding
  }

  const toggleTheme = () => {
    // Explicitly toggle between light and dark based on resolved theme
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {/* Show the opposite icon of the current theme */}
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;