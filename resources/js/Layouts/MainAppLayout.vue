<template>
    <main-header></main-header>
    <secondary-header></secondary-header>
    <slot></slot>
    
    <vue-footer></vue-footer>
</template>

<script setup>
import {} from 'vue'

import MainHeader from '@components/MainHeader'
import SecondaryHeader from '@components/SecondaryHeader'
import VueFooter from '@components/VueFooter'

</script>
