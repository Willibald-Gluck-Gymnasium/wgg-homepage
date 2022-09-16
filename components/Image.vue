<template>
    <img :src="src" :alt="alt">
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

const props = defineProps(['name', 'alt'])

const src = ref(`/img/${props.name}-article.jpeg`)

</script>

<style>

</style>  