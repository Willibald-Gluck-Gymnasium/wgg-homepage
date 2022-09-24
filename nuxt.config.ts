// https://v3.nuxtjs.org/api/configuration/nuxt.config

const imageScaleFactor = 2

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
          width: 50 * imageScaleFactor,
          height: 50 * imageScaleFactor
        }
      },
      card: {
        modifiers: {
          format: 'jpg',
          quality: 60,
          width: 340 * imageScaleFactor,
          height: 160 * imageScaleFactor
        }
      },
      slide: {
        modifiers: {
          format: 'jpg',
          quality: 60,
          width: 1080 * imageScaleFactor,
          height: 300 * imageScaleFactor
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
