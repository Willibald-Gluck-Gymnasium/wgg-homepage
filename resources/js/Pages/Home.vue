<template>
    <Head title="Home"/>

    <slideshow :slides="slides"></slideshow>
    <vue-headline class="mt-6">Neuigkeiten</vue-headline>
    <card-cluster :cards="cards" class="mt-5"></card-cluster>
</template>

<style>
    
</style>

<script setup>
import { Head } from '@inertiajs/inertia-vue3'
// import { defineAsyncComponent } from 'vue'
import Slideshow from '@components/Slideshow'
import CardCluster from '@components/CardCluster'
import VueHeadline from '@components/VueHeadline'

// const Slideshow = defineAsyncComponent(() => import('@components/Slideshow'))

// const CardCluster = defineAsyncComponent(() => import('@components/CardCluster'))

const props = defineProps({
    slides: Array,
    cards: Array,
})
</script>

<script>
import MainAppLayout from '@/Layouts/MainAppLayout.vue'; 

export default {
    layout: MainAppLayout
}
</script>