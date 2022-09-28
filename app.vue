<script setup>
useHead({
  script: [
    {
      src: '/js/modernizr.js',
    }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png'},
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png'},
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png'},
    { rel: 'manifest', href: '/favicons/site.webmanifest'},
    { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg'},
    { rel: 'shortcut icon', href: '/favicons/favicon.ico'}
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
    { name: 'theme-color', content: '#ff881a' }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - WGG` : 'WGG';
  }
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right, hsl(44, 100%, 55%) 0%, hsl(29, 100%, 55%) 55% hsl(20, 100%, 55%) 100%)" /> 
    <NuxtPage />
  </div>
</template>