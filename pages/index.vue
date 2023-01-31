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

const attributesToFetch = ['_path', 'date', 'title', 'tags', 'thumbnail', 'pinned']

const highlightedArticlesCards = await queryContent('/').sort({ title: 1, date: -1, }).where({ pinned: { $eq: true }, hidden: { $ne: true } }).only(attributesToFetch).find()

const now = new Date(Date.now()).toISOString()

const queryForUnpinnedArticles = { 
    pinned: { $ne: true },
    hidden: { $ne: true },
    $or: [
        { expireOn: { $exists: false } },
        { expireOn: { $gt: now } }
    ]
}

const articleCards = ref(await queryContent('/').sort({ title: 1, date: -1, }).where(queryForUnpinnedArticles).only(attributesToFetch).limit(20).find())



const loadMoreArticlesButtonDisabled = ref(false)
const allArticlesLoaded = ref(false)
const getRestOfArticles = async () => {
    console.log("click")

    loadMoreArticlesButtonDisabled.value = true

    const { data, pending, error, refresh } = await useAsyncData(
        'fetchRemainingArticles', 
        () => queryContent('/').sort({ title: 1, date: -1, }).where(queryForUnpinnedArticles).only(attributesToFetch).skip(20).find()
    )

    console.log({data: data.value, pending: pending.value, error: error.value})
    if (error.value === null) {
        articleCards.value.push(...data.value)
        allArticlesLoaded.value = true
    } else {
        loadMoreArticlesButtonDisabled.value = false
        console.error("Error Loading more articles")   
    }
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

        <h1>Termine</h1>

        <Schedule></Schedule>


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

        <button class="button" :disabled="loadMoreArticlesButtonDisabled" v-if="!allArticlesLoaded" @click="getRestOfArticles()">
            <span v-if="!loadMoreArticlesButtonDisabled">Alle Artikel laden</span>
            <div v-else class="spinner"></div>
        </button>

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
    width: 12em;
    height: 3em;
    padding: 0;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 1rem;
    cursor: pointer;
    transition: all 150ms;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.02);
    }


    .spinner {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid #ffffff;
        animation: spinner-bulqg1 0.8s infinite linear alternate,
                spinner-oaa3wk 1.6s infinite linear;
    }

    @keyframes spinner-bulqg1 {
        0% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
        }

        12.5% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
        }

        25% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
        }

        50% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
        }

        62.5% {
            clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
        }

        75% {
            clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
        }

        100% {
            clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
        }
    }

    @keyframes spinner-oaa3wk {
        0% {
            transform: scaleY(1) rotate(0deg);
        }

        49.99% {
            transform: scaleY(1) rotate(135deg);
        }

        50% {
            transform: scaleY(-1) rotate(0deg);
        }

        100% {
            transform: scaleY(-1) rotate(-135deg);
        }
    }
}
</style>

