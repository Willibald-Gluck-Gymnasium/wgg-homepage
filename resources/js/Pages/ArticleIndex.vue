<template>
    <Head title="Collection" />

    <div class="contentwrapper">
        <!-- <div class="top-container">
            <div class="heading">
                <h1 id="header">{{ this.tag }}</h1>
            </div>
           
            <vue-form action="/collection">
                <section>
                    <div class="field">
                        <label for="s">Sortierung</label>
                        <select id="s" name="s">
                            <option value="r">Relevanz</option>
                            <option value="a">Alphabet</option>
                            <option value="d">Datum</option>
                        </select>
                    </div>
                </section>
            </vue-form>
        </div> -->
        <vue-headline>{{ this.tag }}</vue-headline>
        <card-cluster :cards="cards" style="margin-top: 15px"></card-cluster>
    </div>
</template>

<style>
    
</style>

<script>
    import { Link, Head } from '@inertiajs/inertia-vue3';

    import MainAppLayout from '@/Layouts/MainAppLayout.vue'; 

    import CardCluster from '@components/CardCluster'
    import VueForm from '@components/VueForm'
    import VueHeadline from '@components/VueHeadline';

    export default {
        components: {
            VueHeadline,
            Head,
            CardCluster,
            VueForm
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            tag: String,
            cards: Array
        },

        layout: MainAppLayout,
    }
</script>

<style lang="scss" scoped>
.top-container {
    // margin-top: 25px;
    // width: 100%;
    color: var(--clr-font);
    // font-size: 20px;
    display: flex;
    padding: 15px;
    background: var(--clr-bg-primary);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    // display: flex;
    // flex-direction: row;
    div.heading {
      font-size: 30px;
      display: flex;
      flex: 1 0 auto;
      flex-direction: row;
      position: relative;
      // justify-content: center;
      h1, span{
        line-height: 30px;
        height: 30px;
        margin: 0;
        margin-top: auto;
        // transform: translateY(50%);
        font-size: inherit !important;
      }
      span {
        margin-right: 10px;
      }
      h1 {
        font-weight: 600;
      }
    }
}

@media only screen and (max-width: 700px) {
    .container {
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
@media only screen and (max-width: 850px) {
  .container {
    div.heading {
      flex-direction: column;
      font-size: 20px;
      height: auto !important;
      transform: none;
      h1, span {
        transform: none;
        margin: 0; padding: 0;
        line-height: auto !important;
        height: auto !important;
      }
    }
  }
}
</style>