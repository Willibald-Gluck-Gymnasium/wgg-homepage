<template>
    <main-header></main-header>
    <secondary-header></secondary-header>
    
    <vue-footer></vue-footer>
</template>

<style>
    
</style>

<script>
    import { defineComponent } from 'vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';

    import MainHeader from '@components/MainHeader'
    import SecondaryHeader from '@components/SecondaryHeader'
    import VueFooter from '@components/VueFooter'

    export default defineComponent({
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            VueFooter
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
        }
    })
</script>
