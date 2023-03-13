<script setup>
const searchquery = ref('')

const showResults = ref(false)

const { data: searchAPIResponse, pending, error, refresh: refreshSearchAPICall } = await useAsyncData(
    'navbarSearch',
    () => $fetch('/api/search', {
        params: {
            query: searchquery.value,
            limit: 5,
            cropLength: 10
        },
    })
)

const $img = useImage()
function getImageSrc(img) {
    return $img(`/images/${img || 'missing-thumbnail.jpg'}`, {}, { preset: 'card' })
}

watch(searchquery, (query) => {
    console.log(searchquery.value);
    refreshSearchAPICall()
})
</script>

<template>
    <div class="searchbox">
        <form :class="{ searchform: true, 'show-results': showResults}" @submit.prevent="useRouter().push(`/search/${searchquery}`)">
            <input ref="searchinput" @focus="showResults = true" @blur="showResults = false" class="input" type="search" placeholder="Suchen..." v-model="searchquery">
            <div class="pending" v-if="pending">
                <LoadingSpinner class="spinner"/>
            
            </div>
            <input class="submit" type="submit" value=" ">
        </form>

        <div class="resultbox" v-if="showResults">

            <div class="error" v-if="error">
                Ein Fehler ist aufgetreten: {{ error }}.
            </div>

            <ul class="resultlist" v-else-if="searchAPIResponse?.data?.hits?.length > 0">
                <NuxtLink @mousedown.prevent v-for="result in searchAPIResponse?.data?.hits" class="result" role="listitem" :to="result._path">
                    <img class="thumbnail" :src="getImageSrc(result.thumbnail.src)" :alt="result.thumbnail.alt">

                    <div>
                        <h4 v-html="result._formatted.title"></h4>
                        <p v-html="result._formatted.plaintext"></p>
                    </div>
                </NuxtLink>
            </ul>

            <div class="noresults" v-else>
                Keine Artikel für <b>{{ searchquery }}</b> gefunden.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchbox {
    width: 100%;
    max-width: 400px;
    position: relative;

    .searchform {
        position: relative;
        display: grid;
        height: 40px;
        background-color: #FFFFFF;
        border-radius: 20px;
        grid-template-columns: 1fr 38px;
        overflow: hidden;
        border: 1px solid hsl(0, 0%, 90%);

        &.show-results {
            border-radius: 20px 20px 0 0;
        }

        .input, .submit {
            background: none;
            box-shadow: none;
            border: none;
            padding: 0;
            margin: 0;
            outline: none;
        }

        .input {
            padding: 0 0 0 1em;
            font-size: 16px;
            font-family: inherit;
        }

        .submit {
            cursor: pointer;
            background-color: transparent;
            background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%2221%22%20y1%3D%2221%22%20x2%3D%2216.65%22%20y2%3D%2216.65%22%3E%3C%2Fline%3E%3C%2Fsvg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 20px
        }

        .pending {
            background-color: #FFFFFF;
            pointer-events: none;
            position: absolute;
            height: 38px;
            width: 38px;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            .spinner {
                stroke: hsl(0, 0%, 40%);
                width: 20px;
                height: 20px
            }
        }

    }

    .resultbox {
        position: absolute;
        z-index: 900;
        // top: 50px;
        border: 1px solid hsl(0, 0%, 90%);
        border-top: none;
        border-radius: 0 0 20px 20px;
        width: 100%;
        background-color: #FFFFFF;
        padding: 10px;
        .resultlist {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            
            .result {
                background-color: hsl(0, 0%, 100%);
                display: grid;
                width: 100%;
                height: 100%;
                border-radius: 15px;
                overflow: hidden;
                grid-template-columns: 100px 1fr;
                grid-template-rows: 100%;
                

                $box-shadow-color: hsla(0, 0%, 0%, 0.08);
                $box-shadow--default: 0 4px 20px 0 $box-shadow-color;
                $box-shadow--expanded: 0 8px 30px 0 $box-shadow-color;
                box-shadow: $box-shadow--default;
                transition: transform 0.2s, box-shadow 0.2s;

                color: inherit;
                text-decoration: none;

                .thumbnail {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    overflow: hidden;
                }

                div {
                    padding: 10px;
                    h4 {
                        margin: 0;
                        margin-bottom: 0.25em;
                        font-family: 'Montserrat', sans-serif;
                    }
                    p {
                        margin: 0;
                    }
                }


                :deep(mark) {
                    background-color: hsla(29, 100%, 55%, 0.2);
                    color: hsl(29, 100%, 50%);
                    line-height: 1;
                }
                
            }
        }

        .noresults, .error {
            overflow-wrap: anywhere;
        }

    }
}


</style>