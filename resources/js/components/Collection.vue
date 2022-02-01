<template>
  <form class="container">
      <div class="bar">
        <div class="heading">
          <span>Kollektion: </span><h1 id="header">{{ this.category }}</h1>
        </div>
        <div class="field spread"></div>
        <div class="field">
          <span>Sortieren nach</span>
          <select name="s" id="sort">
            <option value="r">Relevanz</option>
            <option value="a">Alphabet</option>
            <option value="d">Datum</option>
          </select>
        </div>
      </div>
  </form>
</template>

<script>
export default {
    props: ['category', 'sort'],
    mounted() {
      this.$el.querySelector("#header").innerHTML = this.$el.querySelector("#header").innerHTML.charAt(0).toUpperCase() + this.$el.querySelector("#header").innerHTML.substring(1);
    }
}
</script>

<style lang="scss" scoped>

.container {
    // margin-top: 25px;
    // width: 100%;
    color: var(--clr-font);
    // font-size: 20px;
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
      flex-direction: row;
      // justify-content: center;
      h1, span{
        line-height: 30px;
        height: 30px;
        margin: 0;
        transform: translateY(50%);
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