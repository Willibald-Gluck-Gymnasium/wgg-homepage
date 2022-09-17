<template>
    <NuxtLayout>
        <slideshow :slides="slides"></slideshow>
        <vue-headline class="mt-6">Neuigkeiten</vue-headline>
        <card-cluster :cards="cards" class="mt-5"></card-cluster>
    </NuxtLayout>
</template>

<script setup>
const slides = await queryContent('/').find()
const cards = await queryContent('/').find()

</script>