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
      },
      spacing: {
        'sidebar-mobile': '4rem', // 모바일에서 사이드바 높이
        'sidebar-desktop': '5rem' // 데스크탑에서 사이드바 너비
      }
    },
    screens: {
      sm: '640px', // Small devices (e.g., mobile)
      md: '768px', // Medium devices (e.g., tablets)
      lg: '1024px', // Large devices (e.g., laptops)
      xl: '1280px', // Extra large devices (e.g., desktops)
      '2xl': '1536px', // Double extra large devices
      mobile: { max: '767px' } // Custom breakpoint for mobile devices
    }
  }
};
