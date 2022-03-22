<template>
    <Head title="Results" />

    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        <form class="menu-container">
            <div class="bar search">
                <div class="field spread">
                    <span>Suchbegriff</span>
                    <input name="q" type="text" :value=this.initSearchParam>
                </div>
                <div class="field">
                    <span>Sortieren nach</span>
                    <select name="s" id="sort">
                        <option value="r">Relevanz</option>
                        <option value="a">Alphabet</option>
                        <option value="d">Datum</option>
                    </select>
                </div>
                <div class="field">
                    <span></span>
                    <button id="submit" class="icon">
                        <i class='material-icons'>search</i>
                    </button>
                </div>
            </div>
            <!-- <div class="bar">
            </div> -->
        </form>
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

    export default {
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            SearchResults,
            SearchResult,
            VueFooter
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
        mounted() {
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
    box-shadow: 0 0 15px rgba(0,0,0,.1);
}

@media only screen and (max-width: 700px) {
    .menu-container {
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>