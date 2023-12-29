// https://nuxt.com/docs/api/configurati on/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt CLL', 
      meta: [
        {name: 'description', content: 'everything about nuxt3 I learned?'}
      ], 
      link: [
        { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'}
      ]
    }
  },

  runtimeConfig: {
    currencyKey: process.env.NUXT_CURRENCY_API_KEY
  }
})
