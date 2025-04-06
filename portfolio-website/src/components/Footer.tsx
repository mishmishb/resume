import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-foreground/70 dark:text-foreground-dark/70 py-6 mt-auto transition-colors duration-500"> {/* Lighter gray for light mode */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/michael-a-bennett" // Ensure this is correct
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground dark:hover:text-foreground-dark transition-colors"
            aria-label="LinkedIn Profile"
          >
            {/* Basic SVG Icon for LinkedIn */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          {/* Add other social links here if needed */}
        </div>
        <div className="mb-2">
          {/* Link to Resume PDF - Ensure resume.pdf is in /public later */}
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground dark:hover:text-foreground-dark transition-colors underline underline-offset-2">
              View Resume (PDF)
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Michael Bennett. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;