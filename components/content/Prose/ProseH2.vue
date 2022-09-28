<template>
    <h2 :id="id">
        <slot />
    </h2>
  </template>
  
  <script setup >
  defineProps({
    id: {
        type: String,
        required: false,
        default: null
    }
  })
  </script>