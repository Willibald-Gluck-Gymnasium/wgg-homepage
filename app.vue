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



  // <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=RaUv2">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=RaUv2">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=RaUv2">
  // <link rel="manifest" href="/favicons/site.webmanifest?v=RaUv2">
  // <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=RaUv2" color="#ff881a">
  // <link rel="shortcut icon" href="/favicons/favicon.ico?v=RaUv2">
  // <meta name="msapplication-TileColor" content="#000000">
  // <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=RaUv2">
  // <meta name="theme-color" content="#ff881a">

</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>