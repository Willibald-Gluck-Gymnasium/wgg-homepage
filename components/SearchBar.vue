<script setup>
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {
    AisInstantSearch,
    AisSearchBox,
    AisHits,
    AisSnippet,
    AisHighlight,
    AisConfigure,
    AisStateResults
} from 'vue-instantsearch/vue3/es';
import 'instantsearch.css/themes/satellite-min.css';

const searchClient = ref(instantMeiliSearch(
    "http://0.0.0.0:7700",
    "vbMGCSZKMd3hIvseRBdnlN_CYNdd98xffIMT2AHD694rLPpVPlQw2MpLZ2J9cADQ7HZpYL7i5MtKNwqh-rHDyA"
))

const showResults = ref(false)
const searchbox = ref(null)

const unfocusSearchBox = () => {
    searchbox.value.$el.querySelector('input').blur()
}
</script>

<template>
    <AisInstantSearch :search-client="searchClient" index-name="articles">
        <AisSearchBox placeholder="Suche hier..." ref="searchbox" @focus="showResults = true" @blur="showResults = false" /> 

        <AisStateResults>
            <template v-slot="{ results: { hits, query } }">

                <AisHits v-if="hits.length > 0 && showResults" :escape-HTML="true">
                    <template v-slot:item="{ item }">
                        <NuxtLink class="link123" @mousedown.prevent @click="unfocusSearchBox()" :to="'test'">
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
                        </NuxtLink>
                    </template>
                </AisHits>
        
                <div v-else-if="showResults">
                    <div class="ais-Hits">
                        <ol class="ais-Hits-list">
                            <li class="ais-Hits-item">
                                <p class="ais-no-hits">No results have been found for <b>{{ query }}</b>.</p>
                            </li>
                        </ol>
                    </div>                
                
                </div>
                <div v-else></div>

            </template>
        </AisStateResults>

        <AisConfigure
            :attributesToSnippet="['plaintext']"
            snippetEllipsisText="..."
            :hits-per-page.camel="3"
        />
    </AisInstantSearch>
</template>

<style lang="scss">
.ais-InstantSearch {
    width: 100%;
    margin-left: auto;
    max-width: 400px;
    height: 42px;
    color: black;
    z-index: 950;

    .ais-SearchBox {
        height: 100%;

        .ais-SearchBox-form {
            height: 100%;
            background: none;

            &::before {
                background: transparent url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%2221%22%20y1%3D%2221%22%20x2%3D%2216.65%22%20y2%3D%2216.65%22%3E%3C%2Fline%3E%3C%2Fsvg%3E") repeat scroll 0 0;
            }

            .ais-SearchBox-input {
                caret-color: hsl(29, 100%, 55%);
                box-shadow: none;
                border: none;
                color: black;
                background-color: hsl(0, 0%, 90%);
                border-radius: 21px;
                width: 100%;
                margin: 0;
                margin-left: auto;
                max-width: 500px;
                // transition: border-radius 150ms;

                &::placeholder {
                    color: hsl(0, 0%, 40%);
                } 

                &:focus {
                    border-radius: 21px 21px 0 0;
                }
            }
        }
    }

    .ais-SearchBox-resetIcon {
        fill: hsl(0, 0%, 40%);
    }

    

    .ais-Hits {
        border-radius: 0 0 21px 21px;
        overflow: hidden;

        .ais-Hits-list {
            .ais-Hits-item {
                border-radius: 0;
                background-color: hsl(0, 0%, 90%);
                border-top: 1px solid hsl(0, 0%, 70%);
                padding: 0;

                &:hover {
                    background-color: hsl(29, 50%, 85%);
                }

                a, .ais-no-hits {
                    padding: 1em 1em;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                    display: block;
                    width: 100%;
                }

                h2 {
                    font-size: 18px;
                    margin: 0;
                    margin-bottom: 0.2em;
                }

                p {
                    font-size: 14px;
                    margin: 0;
                }

                .ais-Highlight-highlighted, .ais-Snippet-highlighted {
                    background-color: hsla(29, 100%, 55%, 0.2);
                    color: hsl(29, 100%, 50%);
                    line-height: 1;
                }
                
            }
        }
    }
}
</style>