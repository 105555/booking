/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      // 'ph': '320px',
    },
  },
  plugins: [],
}