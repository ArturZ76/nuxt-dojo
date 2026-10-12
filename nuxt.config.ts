export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {
          name: 'description',
          content: 'Everything about Nuxt.js'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': false
    }
  }
})
