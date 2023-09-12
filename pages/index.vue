<script setup>

// path of articles in slide
const articlesInSlide = [
    '/gemeinschaft/ukraine_unterstuetzung',
    '/gemeinschaft/friedenstauben',
    '/gemeinschaft/schwarz_weiss_ball_2023',
]


const slides = (await Promise.all(articlesInSlide.map((path) => {
    return queryContent('/').where({ _path: { $eq: path }}).only(['_path', 'title', 'tags', 'thumbnail']).find()
}))).flat()

const attributesToFetch = ['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']

const highlightedArticlesCards = await queryContent('/').sort({ title: 1, date: -1, }).where({ pinned: { $eq: true }, hidden: { $ne: true } }).only(attributesToFetch).find()

// const now = new Date(Date.now()).toISOString()

// const queryForUnpinnedArticles = { 
//     pinned: { $ne: true },
//     hidden: { $ne: true },
//     $or: [
//         { expireOn: { $exists: false } },
//         { expireOn: { $gt: now } }
//     ]
// }

// const articleCards = ref(await queryContent('/').sort({ title: 1, date: -1, }).where(queryForUnpinnedArticles).only(attributesToFetch).limit(20).find())



// const loadMoreArticlesButtonDisabled = ref(false)
// const allArticlesLoaded = ref(false)
// const getRestOfArticles = async () => {
//     loadMoreArticlesButtonDisabled.value = true

//     const { data, pending, error, refresh } = await useAsyncData(
//         'fetchRemainingArticles', 
//         () => queryContent('/').sort({ title: 1, date: -1, }).where(queryForUnpinnedArticles).only(attributesToFetch).skip(20).find()
//     )

//     if (error.value === null) {
//         articleCards.value.push(...data.value)
//         allArticlesLoaded.value = true
//     } else {
//         loadMoreArticlesButtonDisabled.value = false
//         console.error("Error Loading more articles")   
//     }
// }

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

        <CurrentUserMenu style="margin-top: 20px; margin-bottom: 30px;"/>

        <template v-if="highlightedArticlesCards.length > 0">
            <br>

            <ClientOnly>
                <card-cluster :cards="highlightedArticlesCards"></card-cluster>

                <template #placeholder>
                    <div style="height: 300px; display:grid; place-items: center"></div>
                </template>
            </ClientOnly>
        </template>

        <!--
        <h1>Termine</h1>

        <Schedule style="margin-bottom: 60px"></Schedule>
       
        
        <h1>Neuigkeiten</h1>
        
        <ClientOnly>
            <card-cluster :cards="articleCards"></card-cluster>

            <template #placeholder>
                <div style="height: 1000px; display:grid; place-items: center"></div>
            </template>
        </ClientOnly>

        <Button style="margin: 1rem auto; border-radius: 15px;" v-if="!allArticlesLoaded" :loading="loadMoreArticlesButtonDisabled" @click="getRestOfArticles()">Alle Artikel laden</Button>
        -->


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

