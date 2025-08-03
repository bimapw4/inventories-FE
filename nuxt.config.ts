// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['@/assets/css/tailwind.css'],
  modules: ['@vueuse/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000', // Ganti sesuai alamat backend
    },
  },
})
