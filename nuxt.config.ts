export default defineNuxtConfig({
  srcDir: 'src',  // 指定資料夾目錄
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }, // nuxtTool
  typescript: {
    strict: true,
    typeCheck: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  }, 
  image: {
    dir: 'assets/img'
  },
  // i18n: {
  //   langDir: 'locales/',
  //   locales: [
  //     { code: 'en', iso: 'en-US', file: 'en.json'},
  //     { code: 'zh-tw', iso: 'zh-TW', file: 'zh-tw.json'}
  //   ],
  //   strategy: 'prefix_except_default',
  //   defaultLocale: 'zh-tw'
  // },
  css: [
    '@/assets/css/tailwind.css',  
    '@/assets/sass/all.scss',  
    '@mdi/font/css/materialdesignicons.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  components: [
    {
      path: '~/components',
      pathPrefix: true, 
    },
  ],
})