<template>
    <Head title="Results" />

    <main-header></main-header>
    <secondary-header></secondary-header>

    <ais-instant-search :search-client="searchClient" :index-name="mixScoutPrefix + 'articles'">
        <ais-search-box />
        <ais-hits>
            <ais-hits :escape-HTML="true">
                <template v-slot:item="{ item }">
                    <h2>
                        <ais-highlight
                            attribute="title"
                            :hit="item"
                            highlightedTagName="mark"
                        />
                    </h2>
                    <p>
                        <ais-snippet
                            attribute="plaintext"
                            :hit="item"
                            highlightedTagName="mark"
                        />
                    </p>
                </template>
                </ais-hits>
                <ais-configure
                    :attributesToSnippet="['plaintext']"
                    snippetEllipsisText="…"
                />
        </ais-hits>
    </ais-instant-search>

    <vue-footer></vue-footer>
</template>

<script setup>
import { ref } from 'vue'

import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

import { Link, Head } from '@inertiajs/inertia-vue3';
import MainHeader from '@components/MainHeader'
import SecondaryHeader from '@components/SecondaryHeader'
import VueFooter from '@components/VueFooter'

const searchClient = ref(algoliasearch(
    process.env.MIX_ALGOLIA_APP_ID,
    'a485ae5a39f40a9741030971f9ba576a'
))

const mixScoutPrefix = ref(process.env.MIX_SCOUT_PREFIX)

</script>

<style lang="scss" scoped>

</style>