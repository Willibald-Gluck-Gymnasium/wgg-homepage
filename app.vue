<script setup>
  useHead({
    script: [
      {
        src: '/js/modernizr.js',
      }
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - WGG` : 'WGG';
    }
  })
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>