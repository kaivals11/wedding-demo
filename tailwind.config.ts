import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinematic-dark': '#121212',
        'cinematic-darker': '#1A1A1A',
        'cream': '#F7F5F0',
        'charcoal': '#2A2A2A',
        'champagne': '#D4C8B8',
        'border-inactive': '#D1D1D1',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 8rem)',       
        'h1-standard': 'clamp(3rem, 6vw, 6rem)', 
        'h2-standard': 'clamp(2.5rem, 4vw, 4rem)',
        'quote': 'clamp(2rem, 3vw, 3rem)',       
        'massive-cta': 'clamp(3rem, 10vw, 10vw)', 
      },
      letterSpacing: {
        'utility': '0.1em',
      }
    },
  },
  plugins: [],
};

export default config;