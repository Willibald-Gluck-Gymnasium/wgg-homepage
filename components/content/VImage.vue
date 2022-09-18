<template>
    <img :src="src" :alt="alt">
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

const props = defineProps(['name', 'alt'])

const src = ref(`/images/${props.name}.jpg`)

</script>

<style>

</style>  