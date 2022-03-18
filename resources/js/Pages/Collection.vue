<template>
    <Head title="Collection" />

    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        <div class="top-container">
            <div class="heading">
                <span>Kollektion: </span><h1 id="header">{{ this.category }}</h1>
            </div>
            <vue-form action="/collection">
                <section>
                    <field>
                        <label for="s">Sortierung</label>
                        <select id="s" name="s">
                            <option value="r">Relevanz</option>
                            <option value="a">Alphabet</option>
                            <option value="d">Datum</option>
                        </select>
                    </field>
                </section>
            </vue-form>
        </div>
        <card-cluster style="margin-top: 15px"></card-cluster>
    </div>
    <vue-footer></vue-footer>
</template>

<style>
    
</style>

<script>
    import { Link, Head } from '@inertiajs/inertia-vue3';

    import MainHeader from '@components/MainHeader'
    import SecondaryHeader from '@components/SecondaryHeader'
    import Collection from '@components/Collection'
    import CardCluster from '@components/CardCluster'
    import VueFooter from '@components/VueFooter'
    import VueForm from '@components/VueForm'

    export default {
        components: {
            Head,
            Link,
            MainHeader,
            SecondaryHeader,
            Collection,
            CardCluster,
            VueFooter,
            VueForm
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            category: String
        }
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