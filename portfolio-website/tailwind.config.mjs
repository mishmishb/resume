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
          light: '#7F7EFF', // Preferred lighter purple
          DEFAULT: '#7F7EFF', // Preferred lighter purple
          dark: '#7F7EFF',   // Preferred lighter purple
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
        sans: ['var(--font-body)', 'sans-serif'], // Body font (Manrope)
        display: ['var(--font-display)', 'sans-serif'], // Heading font (Outfit)
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