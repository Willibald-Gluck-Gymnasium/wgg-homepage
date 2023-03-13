// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { MeiliSearch } from 'meilisearch'
// import movies from './small_movies.json'


const imageScaleFactor = 2

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
  ],

  runtimeConfig: {
    // Private keys are only available on the server 
    JWTSecret: '', // NUXT_JWT_SECRET
    MariaDBHost: '',
    MariaDBDefaultDatabase: '',
    MariaDBUser: '',
    MariaDBPassword: '',
    MariaDBPort: '3306',
    meiliAdminKey: '', // NUXT_MEILI_ADMIN_KEY
    meiliIndexUID: 'articles', // NUXT_MEILI_INDEX_UID
    meiliURL: '', // NUXT_MEILI_URL
    meiliSearchKey: '' // NUXT_MEILI_SEARCH_KEY

    // Public keys that are exposed to the client 
    // public: {}
  },

  content: {
    defaultLocale: 'de'
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
      },
      article: {
        modifiers: {
          format: 'jpg',
          quality: 60,
          width: 1080 * imageScaleFactor
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
