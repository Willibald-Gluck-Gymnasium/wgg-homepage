<template>
    <div class="container">
        <ais-instant-search :search-client="searchClient" :index-name="mixScoutPrefix + 'articles'">
            <ais-search-box @focus="showResults = true" @blur="showResults = false"/>

            <ais-hits :escape-HTML="true" v-if="showResults">
                <template v-slot:item="{ item }">
                    <Link @mousedown.prevent :href="item.link">
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
                    </Link>
                </template>
            </ais-hits>

            <ais-configure
                :attributesToSnippet="['plaintext']"
                snippetEllipsisText="…"
                :hits-per-page.camel="3"
            />
        </ais-instant-search>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { Link} from '@inertiajs/inertia-vue3'
import 'instantsearch.css/themes/satellite-min.css';
import algoliasearch from 'algoliasearch/lite';
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisSnippet,
  AisHighlight,
  AisConfigure
} from 'vue-instantsearch/vue3/es';

const showResults = ref(false)

const searchClient = ref(algoliasearch(
    process.env.MIX_ALGOLIA_APP_ID,
    'a485ae5a39f40a9741030971f9ba576a'
))

const mixScoutPrefix = ref(process.env.MIX_SCOUT_PREFIX)
</script>

<style lang="scss" scoped>
div.container {
    max-width: 500px;
    // width: 100%;
    margin-left: auto;
    flex: 1 1 auto;
    height: 35px;
    color: black;
}

</style>