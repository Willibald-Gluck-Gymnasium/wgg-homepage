<script setup>

if (process.server) {

    try {
        
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

        const config = useRuntimeConfig()

        const client = new MeiliSearch({
            host: config.public.meiliURL,
            apiKey:  config.meiliAdminKey,
        })
        
        // console.log(articles);
        console.log(await client.deleteIndex('articles'))
        console.log(await client.index('articles').addDocuments(articles))

    } catch (error) {
        
        console.log(error);

    }
    
}
</script>

<template>
    <div>
        Indexed...
    </div>
</template>