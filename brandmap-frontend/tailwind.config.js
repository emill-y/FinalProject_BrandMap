
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // tailwind.config.js
  theme: {
    extend: {
      fontFamily: {
        inter: ['InterVariable', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0f172a',  // dark navy
          secondary: '#f1f5f9', // light gray background
          accent: '#6366f1', // indigo-500
        },
      },
    },
  },


  plugins: [require('@tailwindcss/forms')],
};

