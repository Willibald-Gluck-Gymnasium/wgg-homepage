<script setup>
const slides = await queryContent('/').limit(5).find()
const cards = await queryContent('/').find()

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
        <card-cluster :cards="cards"></card-cluster>
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

