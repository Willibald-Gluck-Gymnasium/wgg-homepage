import { serverQueryContent } from '#content/server'
import { createHash } from 'crypto'
import { MeiliSearch } from 'meilisearch'

export default defineEventHandler(async (event) => {

  try {
    const renderContent = (node) => {
      let text = ''

      if (node.value != undefined) {
          text += node.value;
          text += ' '
      }

      if (node.children != undefined) {
          node.children.forEach(childNode => {
              text += renderContent(childNode)
          })
      }

      return text
    }


    // let articles = await queryContent('/').only(['_path', 'author', 'body', 'thumbnail', 'title']).find()
    let articles = await serverQueryContent(event).only(['_path', 'author', 'body', 'thumbnail', 'title']).find()

      
    articles = articles.map((article) => ({
        id: createHash('sha1').update(article._path).digest('base64url'),
        title: article.title,
        _path: article._path,
        thumbnail: article.thumbnail,
        plaintext: renderContent(article.body).replaceAll('\n',' ').replace(/  +/g, ' ').trim()
      }))

    const config = useRuntimeConfig()

    const client = new MeiliSearch({
      host: config.meiliURL,
      apiKey: config.meiliAdminKey,
    })

    await client.deleteIndex(config.meiliIndexUID)
    await client.index(config.meiliIndexUID).addDocuments(articles)

    return "ok"

  } catch (error) {
    return error
  }
})