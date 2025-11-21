import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#ffffff',
          dark: '#1f1f1f',
        },
        text: {
          light: '#1d1d1f',
          dark: '#f5f5f7',
        },
        border: {
          light: '#d2d2d7',
          dark: '#424245',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', '游ゴシック体', 'Yu Gothic', 'YuGothic', 'Meiryo', 'メイリオ', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};

