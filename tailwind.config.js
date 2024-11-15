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
        'custom-navy2': '#01203b'
      }
    }
  },
  plugins: []
};
