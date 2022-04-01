<template>
    <Head title="Results" />

    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        <div class="menu-container">
            <vue-form action="/results">
                <section>
                    <div class="field fill">
                        <label for="q">Suchbegriff</label>
                        <input id="q" name="q" type="search" :value=this.initSearchParam>
                    </div>
                    <div class="field">
                        <button id="submit" class="fill">
                            <i class='material-icons'>search</i>
                        </button>
                    </div>
                </section>
                <section>
                    <div class="field fill">
                        <label for="tags">Kategorien (Kommasepariert)</label>
                        <input type="text" name="tags" id="tags" preview="hello there">
                    </div>
                    <div class="field">
                        <label for="s">Sortierung</label>
                        <select id="s" name="s">
                            <option value="r">Relevanz</option>
                            <option value="a">Alphabet</option>
                            <option value="d">Datum</option>
                        </select>
                    </div>
                </section>
                <!-- <div class="bar">
                </div> -->
            </vue-form>
        </div>
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
    import SearchResults from '@components/SearchResults'
    import SearchResult from '@components/SearchResult'
    import VueFooter from '@components/VueFooter'
    import VueForm from '@components/VueForm'

    export default {
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            SearchResults,
            SearchResult,
            VueFooter,
            VueForm
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean
        },

        //Search Menu
        data: () => ({
        initSearchParam: "Search Param"
        }),
        methods: {
            checkURL() {
                const url = window.location.search;
                const urlParams = new URLSearchParams(url);
                this.initSearchParam = urlParams.get('q');
            }
        },
        beforeMount() {
            this.checkURL();
        }
    }
</script>

<style lang="scss" scoped>
$height: 35px;

.menu-container {
    // margin-top: 25px;
    // width: 100%;
    padding: 15px;
    background: var(--clr-bg-primary);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 0 15px rgba(0,0,0,.05);
}

@media only screen and (max-width: 700px) {
    .menu-container {
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>