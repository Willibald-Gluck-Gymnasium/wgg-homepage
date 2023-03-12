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

                                <img class="thumbnail" :src="getImageSrc(item.thumbnail.src)" :alt="item.thumbnail.alt">
                                
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
                        Keine Ergebnisse für <b>{{ query }}</b>.
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
        background: none;

        .ais-SearchBox-input {
            border: 1px solid hsl(0, 0%, 90%);
            background-color: hsl(0, 0%, 100%);
            box-shadow: unset;
            border-radius: 20px;
            height: 40px;
            margin: 0;

            &:focus {
                box-shadow: 0 0 0 3px hsl(29, 100%, 80%);
            }
        }

    }
}

.search-list {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 20px auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }

    :deep(.ais-InfiniteHits-list) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        
        .ais-InfiniteHits-item {
            border-radius: unset;
            box-shadow: unset;
            padding: unset;
            background-color: unset;

            a {
                background-color: hsl(0, 0%, 100%);
                display: grid;
                width: 100%;
                height: 100%;
                border-radius: 15px;
                overflow: hidden;
                grid-template-rows: minmax(100px, 200px) min-content;
                

                $box-shadow-color: hsla(0, 0%, 0%, 0.08);
                $box-shadow--default: 0 4px 20px 0 $box-shadow-color;
                $box-shadow--expanded: 0 8px 30px 0 $box-shadow-color;
                box-shadow: $box-shadow--default;
                transition: transform 0.2s, box-shadow 0.2s;

                &:hover {
                    transform: scale(1.003) translate(0, -2px);
                    box-shadow: $box-shadow--expanded;
                }

                color: inherit;
                text-decoration: none;

                .thumbnail {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    overflow: hidden;
                }

                div {
                    padding: 20px;
                    h2 {
                        margin: 0;
                        margin-bottom: 0.5em;
                        font-family: 'Montserrat', sans-serif;
                    }
                    p {
                        margin: 0;
                    }
                }


                .ais-Highlight-highlighted, .ais-Snippet-highlighted {
                    background-color: hsla(29, 100%, 55%, 0.2);
                    color: hsl(29, 100%, 50%);
                    line-height: 1;
                }
            }
        }
    }

    :deep(.ais-InfiniteHits-loadMore) {
        box-shadow: none;
        border: none;
        background-color: hsl(29, 100%, 55%);
        background-image: unset;
        color: #FFFFFF;
        height: 40px;
        border-radius: 20px;
        transition: all 150ms;

        &:active {
            transform: scale(0.99);
        }

        &:disabled {
            opacity: 0.5;
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