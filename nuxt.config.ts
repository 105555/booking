export default defineNuxtConfig({
  srcDir: 'src', 
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    locales: ['en', 'zhcn'],
    defaultLocale: 'zhcn'
  },
  css: [
    '@/assets/css/tailwind.css',  
    '@mdi/font/css/materialdesignicons.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  components: true,
})