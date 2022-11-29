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



const articleCards = await queryContent('/').sort({ title: 1, date: -1, }).where({pinned: { $ne: true }}).only(['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']).limit(20).find()

const highlightedArticlesCards = await queryContent('/').sort({ title: 1, date: -1, }).where({pinned: { $eq: true } }).only(['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']).find()


const fetchRemainingArticles = async () => {
    const restOfArticles = await queryContent('/').sort({ title: 1, date: -1, }).where({pinned: { $ne: true }}).only(['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']).skip(20).find()
    return restOfArticles
}

let allArticlesLoaded = ref(false)
const getRestOfArticles = async () => {
    console.log("Test");
    console.log(articleCards);
    let articlesToAdd = await fetchRemainingArticles()
    articleCards.value.push(...articlesToAdd)
    allArticlesLoaded.value = true
}

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

        <button class="button" @click.once="getRestOfArticles()" v-if="!allArticlesLoaded">Alle Artikel laden</button>

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

    // .centered {
    //     width: calc(100% - 20px);
    //     max-width: 1080px;
    //     margin: 0 auto;
    // }

    .button {
        border-radius: 15px;
        margin: 1rem auto;
        background-color: rgb(255, 153, 0);
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: block;
        font-size: 1rem;
        cursor: pointer;
        transition: all 150ms;

        &:hover {
            transform: scale(1.02);
        }
    }
</style>

