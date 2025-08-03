export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000',
    },
  },
})

