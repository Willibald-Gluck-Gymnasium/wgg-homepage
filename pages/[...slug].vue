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
                <NuxtLink v-if="category" :href="'/tag/' + category" class="category link">{{ category }}</NuxtLink>
                <h1 class="main-title">{{ meta.title }}</h1>
                <div id="info" class="info">
                    <span v-if="meta.author" class="author"> {{ meta.author }} </span>
                    <span v-if="meta.author"> - </span>
                    <span class="readtime">Lesezeit: {{ lesezeit }}</span>
                </div>
                <ContentDoc />
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
            line-height: 1.1;
            font-family: 'Montserrat', sans-serif;
            // font-family: 'Nunito Sans', sans-serif;
        }

        .info {
            font-size: 0.8em;
            color: hsl(0, 0%, 40%);
            margin-bottom: 2em;
        }

        
    }

    // Styles for elements inside the Article
    :deep(article) {


        /* Prevent long strings from overflowing container */
        p, h1, h2, h3, h4, h5, h6 {
            overflow-wrap: break-word;
        }

        /* Fix line height when title wraps */
        h1,
        h2,
        h3 {
            line-height: 1.1;
            font-family: 'Montserrat', sans-serif;
        }

        a {
            color: hsl(29deg, 100%, 55%);
            text-decoration: none;
            position: relative;

            &::after {
                transition: all 250ms;
                will-change: width;
                width: 0;
                content: "";
                position: absolute;
                left: 0;
                bottom: 0em;
                height: 0.2em;
                background-color: hsl(29deg, 100%, 55%);
            }

            &:hover::after {
                width: 100%;
            }
        }

        img, video {
            display: block;
            max-width: 100%;
            max-height: 600px;
            margin: 2rem auto;
            border-radius: 5px;
        }

        figure {
            max-width: 100%;
            margin: 2rem 0;
            margin-bottom: 5px;
            text-align: center;

            img {
                margin: 0 auto;
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
    }
}
</style>