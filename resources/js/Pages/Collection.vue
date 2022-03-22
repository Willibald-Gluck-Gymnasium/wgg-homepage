<template>
    <Head title="Collection" />

    <main-header></main-header>
    <secondary-header></secondary-header>
    <flickity-slide></flickity-slide>
    <div class="contentwrapper">
        <collection :category="category"></collection>
        <card-cluster style="margin-top: 15px"></card-cluster>
    </div>
    <vue-footer></vue-footer>
</template>

<style>
    
</style>

<script>
    import { Link, Head } from '@inertiajs/inertia-vue3';

    import MainHeader from '@components/MainHeader'
    import SecondaryHeader from '@components/SecondaryHeader'
    import Collection from '@components/Collection'
    import CardCluster from '@components/CardCluster'
    import VueFooter from '@components/VueFooter'

    export default {
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            Collection,
            CardCluster,
            VueFooter
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            category: String
        }
    }
</script>
