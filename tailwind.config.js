module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customGurajada: ['gurajadacustom', 'sans-serif'],
        poppins: ['poppinscustom', 'sans-serif'],
        tajwal: ['tajwalcustom', 'sans-serif'], 
        noto:['notocustom','sans-serif']


      },
      colors: {
        darkPrimary: '#121212',
        darkSecondary: '#1F2937',
        darkTextPrimary: '#E5E7EB',
        darkTextSecondary: '#9CA3AF',
        primaryAccent: '#3B82F6',
        hoverAccent: '#60A5FA',
        darkBorder: '#374151',
        error: '#EF4444',
        success: '#10B981',
      },
      lineClamp: {
        2: '2',
      },
      boxShadow: {
        custom: '2px 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'hero-pattern': "url('/bg.jpg')",
      },
      
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
