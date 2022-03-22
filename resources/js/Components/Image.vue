<template>
    <img :src="src" :alt="alt">
</template>

<script setup>
import { onBeforeMount, ref, defineProps } from 'vue'

import images from '@/images.js'

const props = defineProps(['name', 'alt'])

const src = ref(images[props.name])

</script>

<style>

</style>