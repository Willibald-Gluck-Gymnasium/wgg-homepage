<template>
    <img :src="src" :alt="alt">
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

// import images from '@/images.js'
// console.log(images)

const props = defineProps(['name', 'alt'])

const src = ref(`/img/${props.name}-article.jpeg`)

</script>

<style>

</style>  