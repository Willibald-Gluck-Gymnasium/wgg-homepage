// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  meta: {
    title: 'WGG'
  },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    download: true,
    families: {
      Montserrat: [400, 600, 700],
      'Nunito Sans': [300, 400, 700]
    }
  }
})
