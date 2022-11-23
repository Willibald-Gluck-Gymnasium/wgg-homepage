<script setup>

// path of articles in slide
const articlesInSlide = [
    '/veranstaltungen/benefizlauf_2019',
    '/gemeinschaft/ukraine_unterstuetzung',
    '/schuelergenossenschaft/gruendung-der-schuelergenossenschaft',
    '/gemeinschaft/gluck_codex'
]

const slides = (await Promise.all(articlesInSlide.map((path) => {
    return queryContent('/').where({ _path: { $eq: path }}).only(['_path', 'title', 'tags', 'thumbnail']).find()
}))).flat()



const articleCards = await queryContent('/').sort({ title: 1, date: -1, }).where({pinned: { $ne: true }}).only(['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']).find()

const highlightedArticlesCards = await queryContent('/').sort({ title: 1, date: -1, }).where({pinned: { $eq: true } }).only(['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']).find()

useHead({
    title: '',
    meta: [
        { name: 'description', content: 'Die offizielle Website des Willibald-Gluck-Gymnasiums. Aktuelle Informationen und Artikel.' }
    ]
})
</script>

<template>
    <NuxtLayout>

        <slideshow :slides="slides"></slideshow>


        <template v-if="highlightedArticlesCards.length > 0">
            <h1>Highlights</h1>

            <ClientOnly>
                <card-cluster :cards="highlightedArticlesCards"></card-cluster>

                <template #placeholder>
                    <div style="height: 300px; display:grid; place-items: center"></div>
                </template>
            </ClientOnly>
        </template>
       

        <h1>Neuigkeiten</h1>
        
        <ClientOnly>
            <card-cluster :cards="articleCards"></card-cluster>

            <template #placeholder>
                <div style="height: 1000px; display:grid; place-items: center"></div>
            </template>
        </ClientOnly>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
    h1 {
        width: calc(100% - 20px);
        max-width: 1080px;
        font-weight: 700;
        margin: 0.6em auto 0.3em;

        @media (min-width: 500px) {
            width: calc(100% - 40px);
        }
    }
</style>

