/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary EV Brand Colors
        primary: '#1EE3B5',
        'primary-dark': '#0FB9A6',
        'primary-soft': '#7FF3D6',
        
        // Dark Backgrounds
        'dark-main': '#0B2C2F',
        'dark-soft': '#103A3E',
        
        // Light Backgrounds
        'light-bg': '#F3FFFB',
        'soft-section': '#ECFBF7',
        'card-bg': '#FFFFFF',
        
        // Text Colors
        'heading': '#0F2E2E',
        'text-muted': '#6B8E8B',
        'text-dark': '#FFFFFF',
        'text-muted-white': 'rgba(255,255,255,0.7)',
        
        // Support Colors
        'highlight-yellow': '#FFF3B0',
        'highlight-green': '#CFFAE2',
        'border-color': '#DFF3EC',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
