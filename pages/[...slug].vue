<script setup>
import readingTime from 'reading-time/lib/reading-time.js'

const meta = await queryContent().where({ _path: useRoute().path }).only(['title', 'author', 'category', 'tags']).findOne()

const category = meta.tags?.[0] || 'Allgemein'

const article = ref(null)

const lesezeit = ref('')

onMounted(() => {
    const text = article.value.innerText
    const minuten = Math.max(Math.round(readingTime(text).minutes), 1)
    lesezeit.value = (() => {
        if (minuten === 1) {
            return `${minuten} Minute`
        } else {
            return `${minuten} Minuten`
        }
    })()
})
</script>

<template>
    <NuxtLayout>
        <main>
            <article ref="article">
                <NuxtLink v-if="category" :href="'tag/' + category" class="category link">{{ category }}</NuxtLink>
                <h1 class="main-title">{{ meta.title }}</h1>
                <div id="info" class="info">
                    <span v-if="meta.author" class="author"> {{ meta.author }} </span>
                    <span v-if="meta.author"> - </span>
                    <span class="readtime">Lesezeit: {{ lesezeit }}</span>
                </div>
                <ContentDoc />
                <!-- <div class="clear"></div> -->
            </article>
        </main>
    </NuxtLayout>
</template>


<style lang="scss" scoped>

main {
    margin: 0 auto;
    width: calc(100% - 20px);
    max-width: 1080px;

    @media  (min-width: 500px) {
        width: calc(100% - 40px);
    }

    article {
        overflow: auto;
        font-size: 1rem;
        padding-top: 2em;
        @media (min-width: 500px) {
            font-size: 1.25em;
        }
        

        .category {
            font-size: 1em;
            font-weight: bold;
        }

        .main-title {
            margin: 0;
            font-size: 2.75em;
            line-height: 1.15;
        }

        .info {
            font-size: 0.8em;
            color: hsl(0, 0%, 40%);
            margin-bottom: 2em;
        }

        
    }

    // Styles for elements inside the Article
    :deep(article) {
        p {
            
        }

        figure {
            max-width: 100%;
            margin: 0;
            margin-bottom: 5px;

            img {
                border-radius: 5px;
                width: 100%;
            }
            
            figcaption {
                margin: .5em 0;
                font-style: italic;
                text-align: center;
                opacity: .8;
                font-size: 16px;
                display: block;
            }
        }

        .float-left {
            float: left;
            margin-right: 15px;
            width: 50%;
        }

        .float-right {
            float: right;
            margin-left: 15px;
            width: 50%;
        }

        .clear {
            clear: both;
        }
    }
}
</style>