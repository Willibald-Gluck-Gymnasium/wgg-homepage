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
  head: {
    script: {
      src: '/js/modernizr.js'
    }
  },
  hooks: {
    'build:done': async () => {
      // const articles = await fetch('127.0.0.1:3000/api/_content/query')
      // const client = new MeiliSearch({ 
      //   host: 'http://localhost:7700',
      //   apiKey: 'vbMGCSZKMd3hIvseRBdnlN_CYNdd98xffIMT2AHD694rLPpVPlQw2MpLZ2J9cADQ7HZpYL7i5MtKNwqh-rHDyA',
      // })
      // client.index('articles').addDocuments(articles)
      //   .then((res) => console.log(res))
    }
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
