<template>
    <Head title="Results" />

    <main-header></main-header>
    <secondary-header></secondary-header>
    <flickity-slide></flickity-slide>
    <div class="contentwrapper">
        <search></search>
        <search-results><b>TODO</b></search-results>
    </div>
    <vue-footer></vue-footer>
</template>

<style>
    
</style>

<script>
    import { Link, Head } from '@inertiajs/inertia-vue3';

    import MainHeader from '@components/MainHeader'
    import SecondaryHeader from '@components/SecondaryHeader'
    import Search from '@components/Search'
    import SearchResults from '@components/SearchResults'
    import SearchResult from '@components/SearchResult'
    import VueFooter from '@components/VueFooter'

    export default {
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            Search,
            SearchResults,
            SearchResult,
            VueFooter
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean
        }
    }
</script>
