<script setup>
const slides = await queryContent('/').only(['_path', 'title', 'tags', 'thumbnail']).limit(5).find()
const cards = await queryContent('/').only(['_path', 'title', 'tags', 'thumbnail']).find()

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


        <h1>Neuigkeiten</h1>
        
        <ClientOnly>
            <card-cluster :cards="cards"></card-cluster>

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
        margin: 1em auto 0.2em;

        @media (min-width: 500px) {
            width: calc(100% - 40px);
        }
    }
</style>

