<template>
    <h5 :id="id">
        <slot />
    </h5>
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