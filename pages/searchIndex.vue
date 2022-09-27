<script setup>

if (process.server) {
    const { createHash } = require('crypto');
    const { MeiliSearch } = require('meilisearch')


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


    let articles = await queryContent('/').only(['_path', 'author', 'body', 'thumbnail', 'title']).find()
    
    articles = articles.map((article) => {
        return {
            id: createHash('sha1').update(article._path).digest('base64url'),
            ...article,
            plaintext: renderContent(article.body).replaceAll('\n',' ').replace(/  +/g, ' ').trim()
        }
    })

    const client = new MeiliSearch({
        host: 'http://127.0.0.1:7700',
        apiKey: 'vbMGCSZKMd3hIvseRBdnlN_CYNdd98xffIMT2AHD694rLPpVPlQw2MpLZ2J9cADQ7HZpYL7i5MtKNwqh-rHDyA',
    })
    
    console.log(articles);
    const res = await client.index('articles').addDocuments(articles)
    console.log(res)
}
</script>

<template>
    <div>
        Indexed...
    </div>
</template>