// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
  ],
  head: {
    script: {
      src: '/js/modernizr.js'
    }
  },
  image: {
    presets: {
      footer: {
        modifiers: {
          format: 'jpg',
          quality: 60,
          width: 100,
          height: 100
        }
      },
      card: {
        modifiers: {
          format: 'jpg',
          quality: 60,
          width: 680,
          height: 320
        }
      }
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
