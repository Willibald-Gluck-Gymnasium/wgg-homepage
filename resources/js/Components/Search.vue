<template>
    <form class="container">
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
</template>

<script>
export default {
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

<style scoped lang="scss">

$height: 35px;

.container {
    // margin-top: 25px;
    // width: 100%;
    padding: 15px;
    background: var(--clr-bg-primary);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
}

@media only screen and (max-width: 700px) {
    .container {
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>