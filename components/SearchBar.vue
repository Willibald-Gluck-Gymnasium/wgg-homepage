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
    <ais-instant-search :search-client="searchClient" index-name="movies">
        <ais-search-box ref="searchbox" @focus="showResults = true" @blur="showResults = false" /> 

        <ais-state-results>
            <template v-slot="{ results: { hits, query } }">

                <ais-hits v-if="hits.length > 0 && showResults" :escape-HTML="true">
                    <template v-slot:item="{ item }">
                        <NuxtLink @mousedown.prevent @click="unfocusSearchBox()" :to="item.link">
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
                        </NuxtLink>
                    </template>
                </ais-hits>
        
                <div v-else-if="showResults">
                    <div class="ais-Hits">
                        <ol class="ais-Hits-list">
                            <li class="ais-Hits-item">
                                No results have been found for {{ query }}.
                            </li>
                        </ol>
                    </div>                
                
                </div>
                <div v-else></div>

            </template>
        </ais-state-results>

        <ais-configure
            :attributesToSnippet="['plaintext']"
            snippetEllipsisText="..."
            :hits-per-page.camel="3"
        />
    </ais-instant-search>
</template>

<style lang="scss">
.ais-InstantSearch {
    width: 100%;
    margin-left: auto;
    max-width: 400px;
    height: 42px;
    color: black;
    z-index: 950;
    
    * {
        font-size: 16px;
    }

    .ais-SearchBox-resetIcon {
        fill: hsl(0, 0%, 40%);
    }

    .ais-SearchBox-form {
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
            margin-left: auto;
            max-width: 500px;
            transition: border-radius 150ms;

            &::placeholder {
                color: hsl(0, 0%, 40%);
            } 

            &:focus {
                border-radius: 21px 21px 0 0;
            }
        }
    }

    .ais-Hits {
        border-radius: 0 0 21px 21px;
        overflow: hidden;

        .ais-Hits-list {
            .ais-Hits-item {
                border-radius: 0;
                background-color: hsl(0, 0%, 90%);
                border-top: 1px solid hsl(0, 0%, 70%);

                h2 {
                    * {
                        font-size: 22px;
                    }
                }

                .ais-Highlight-highlighted, .ais-Snippet-highlighted {
                    background-color: hsla(29, 100%, 55%, 0.2);
                    color: hsl(29, 100%, 50%);
                }
                
            }
        }
    }
}
</style>