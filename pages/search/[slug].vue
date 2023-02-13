<script setup>
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {
    AisInstantSearch,
    AisSearchBox,
    AisInfiniteHits,
    AisSnippet,
    AisHighlight,
    AisConfigure,
    AisStateResults
} from 'vue-instantsearch/vue3/es/index.js';
import 'instantsearch.css/themes/satellite-min.css';

const slug = useRoute().params.slug

const config = useRuntimeConfig()

const searchClient = ref(instantMeiliSearch(
    config.public.meiliURL,
    config.public.meiliSearchKey
))

const initialUiState = {
    articles: {
        query: slug
    }
}

const $img = useImage()
function getImageSrc(img) {
    return $img(`/images/${img || 'missing-thumbnail.jpg'}`, {}, { preset: 'card' })
}

</script>

<template>
    <NuxtLayout>
        <AisInstantSearch :search-client="searchClient" :initial-ui-state="initialUiState" index-name="articles">
            <AisSearchBox class="searchbox" placeholder="Suche hier..." ref="searchbox" /> 

            <AisStateResults>
                <template v-slot="{ results: { hits, query } }">

                    <AisInfiniteHits class="search-list" v-if="hits.length > 0" :escape-HTML="true">
                        <template v-slot:item="{ item }">
                            <NuxtLink class="search-item" @mousedown.prevent :to="item._path">

                                <img :src="getImageSrc(item.thumbnail.src)" :alt="item.thumbnail.alt">
                                
                                <div>
                                    <h2>
                                        <AisHighlight
                                            attribute="title"
                                            :hit="item"
                                            highlightedTagName="mark"
                                        />
                                    </h2>
                                    <p>
                                        <AisSnippet
                                            attribute="plaintext"
                                            :hit="item"
                                            highlightedTagName="mark"
                                        />
                                    </p>
                                </div>
                                
                            </NuxtLink>
                        </template>
                    </AisInfiniteHits>
            
                    <div v-else class="no-hits">
                        <div class="ais-Hits">
                            <ol class="ais-Hits-list">
                                <li class="ais-Hits-item">
                                    <p class="ais-no-hits">Keine Ergebnisse für <b>{{ query }}</b>.</p>
                                </li>
                            </ol>
                        </div>
                    
                    </div>

                </template>
            </AisStateResults>

            <AisConfigure
                :attributesToSnippet="['plaintext']"
                snippetEllipsisText="..."
                :hits-per-page.camel="10"
            />
        </AisInstantSearch>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.searchbox {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 20px auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }

    :deep(.ais-SearchBox-form) {
        background: none
    }
}

.search-list {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 20px auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }

    .search-item {
        display: grid;
        width: 100%;
        gap: 20px;
        grid-template-columns: min-content 1fr;

        color: inherit;
        text-decoration: none;

        img {
            width: 340px;
            height: 160px;
            object-fit: cover;
            border-radius: 5px;
        }

        div {
            h2 {  
                font-family: 'Montserrat', sans-serif;
            }
        }

        :deep(.ais-Highlight-highlighted), :deep(.ais-Snippet-highlighted) {
            background-color: hsla(29, 100%, 55%, 0.2);
            color: hsl(29, 100%, 50%);
            line-height: 1;
        }


    }
}

.no-hits {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 20px auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}

</style>