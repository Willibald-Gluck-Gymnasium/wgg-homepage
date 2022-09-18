// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
  ],
  meta: {
    title: 'WGG'
  },
  head: {
    script: {
      src: '/js/modernizr.js'
    }
  },
  googleFonts: {
    download: true,
    families: {
      Montserrat: [400, 600, 700],
      'Nunito Sans': [300, 400, 700]
    }
  }
})
