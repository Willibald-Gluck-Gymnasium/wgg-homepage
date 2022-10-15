<template>
    <nuxt-img :src="src" :alt="alt" :width="width" :height="height" :preset="preset"/>
</template>
  
<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    },
    preset: {
        type: String,
        default: 'article'
    }
})
</script>
  