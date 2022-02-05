<template>
    <div id="breadcrumbs">
      <div class="breadcrumbs">
        <breadcrumb
          v-for="(breadcrumb, i) in breadcrumbs"
          :key="i"
          :href="breadcrumb.href"
          :text="breadcrumb.text"
        />
        <span><slot/></span>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
		breadcrumbs: [
			{
				href: '/',
				text: 'Home'
			},
      {
        href: '/allgemeines',
        text: 'Allgemeines'
      }
		]
	}),
  mounted () {
    // axios
    //   .get()
    //   .then(response => (this.breadcrumbs = response))
  }
}
</script>

<style lang="scss" scoped>
#breadcrumbs {
  max-width: var(--sz-content-width);
  width: 100%;
  margin: 0 auto;
  background: var(--clr-bg-primary);
  box-shadow: 0 0 25px 0 rgba(0,0,0,.2);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0;
  overflow: auto;
  position: relative;
  // z-index: 100;
  color: var(--clr-font);
  .breadcrumbs {
    height: 35px;
    padding: 5px 15px;
    // width: 200vh;
    display: flex;
    width: max-content;
    span {
      display: flex;
      a, i {
        height: 25px;
        display: inline-block;
      }
      // display: block;
      // line-height: 25px;
    }
  }
}
@media print {
  #breadcrumbs {
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid black;
    margin: 0;
  }
}
</style>