/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',  // Azul Tailwind por defecto
        'accent': {
          50: '#F0FDF4',
          500: '#22C55E', 
          900: '#14532D',
        },
      },
      
      fontFamily: {
        'sans': ['system-ui', 'Arial', 'sans-serif'],
      }
    },
  },
  
  plugins: [],
}