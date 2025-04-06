/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include pages if you use the pages router later
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Include app router directory
  ],
  darkMode: 'class', // Enable class-based dark mode for next-themes
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9999FF', // Lighter shade for dark mode text
          DEFAULT: '#7F7EFF', // Your requested primary color
          dark: '#6A6AFF',   // Darker shade for hover states
        },
        secondary: {
          light: '#4A3BAA', // Lighter shade for dark mode text
          DEFAULT: '#27187E', // Your requested secondary color
          dark: '#1F1365',   // Darker shade for hover states
        },
        background: {
          light: '#FFFFFF', // Reverted to white
          DEFAULT: '#FFFFFF', // Reverted to white
          dark: '#1A1A1A',   // Darker grey for dark background
        },
        foreground: {
          light: '#1A1A1A', // Dark text for light background
          DEFAULT: '#1A1A1A',
          dark: '#EBEBEB',   // Light text for dark background
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Body font
        display: ['var(--font-display)', 'sans-serif'], // Heading font
      },
      backgroundImage: {
        // Subtle radial gradient for hero/background interest
        'radial-gradient-subtle': 'radial-gradient(circle at top center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};

export default config;