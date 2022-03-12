<template>
    <Head title="Home" />

    <main-header></main-header>
    <secondary-header></secondary-header>
    <flickity-slide></flickity-slide>

    <vue-headline class="mt-6 font-bold">Neuigkeiten</vue-headline>
    <card-cluster :cards="cards" class="mt-5"></card-cluster>
    
    <vue-footer></vue-footer>
</template>

<style>
    
</style>

<script>
    import { Link, Head } from '@inertiajs/inertia-vue3';

    import MainHeader from '@components/MainHeader'
    import SecondaryHeader from '@components/SecondaryHeader'
    import FlickitySlide from '@components/FlickitySlide'
    import CardCluster from '@components/CardCluster'
    import VueFooter from '@components/VueFooter'
    import VueHeadline from '@components/VueHeadline'

    export default {
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            FlickitySlide,
            CardCluster,
            VueFooter,
            VueHeadline
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            cards: Array
        }
    }
</script>
