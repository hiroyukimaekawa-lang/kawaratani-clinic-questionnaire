/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5E969E',
          light: '#F2F7F7',
          dark: '#4A7A81',
        },
        surface: '#FFFFFF',
        background: '#F8F9FA',
        accent: '#D1E5E7',
        text: {
          DEFAULT: '#334155',
          muted: '#64748B',
        },
        error: '#EF4444',
      },
      fontFamily: {
        noto: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          'Meiryo',
          'ui-sans-serif',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
