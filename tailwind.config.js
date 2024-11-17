/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-blue': '#0057A0',
        'custom-light-blue': '#0057A0',
        'custom-dark-blue': '#00203A',
        'custom-sky-blue': '#EFF7FF',
        'custom-navy': '#01203A',
        'custom-navy2': '#01203b',
        'custom-sky-blue2': '#EEF7FF',
        'custom-sky-blue3': '#EAF5FF',
        'custom-gray': '#F3F3F3',
        'custom-dark-gray': '#888888'
      }
    },
    screens: {
      laptop: '1024px'
    }
  },
  plugins: []
};
