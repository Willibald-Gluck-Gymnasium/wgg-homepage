export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  const query = getQuery(event)
  

  let hits
  try {
    const data = await $fetch(`${config.meiliURL}/indexes/${config.meiliIndexUID}/search`, {
      query: {
        attributesToHighlight: 'title,plaintext',
        attributesToCrop: 'plaintext',
        cropLength: query.cropLength || '15',
        cropMarker: '...',
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>',
        attributesToRetrieve: '_path,thumbnail',
        limit: query.limit || 9999999,
        q: query.query
      },
      headers: {
        authorization: `Bearer ${config.meiliSearchKey}`
      }
    })
    hits = data.hits
  } catch (error) {
    return {
      status: 'error',
      message: 'An unknown error occured.',
      data: {
        name: error.name,
        message: error.message
      },
    }
  }

  return {
    status: "success",
    data: {
      hits
    }
  }

});