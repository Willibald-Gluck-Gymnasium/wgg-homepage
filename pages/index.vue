<template>
    <NuxtLayout>
        <slideshow :slides="slides"></slideshow>
        <vue-headline class="mt-6">Neuigkeiten</vue-headline>
        <card-cluster :cards="cards" class="mt-5"></card-cluster>
    </NuxtLayout>
</template>

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