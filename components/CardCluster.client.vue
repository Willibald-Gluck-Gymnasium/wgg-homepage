<template>
    <div ref="cardCluster" class="card-cluster">
        <Card
            v-for="(card, i) in cards"
			:key="i"
			:title="card.title"
			category="Test"
			:timestamp="card.published_on"
    		:image="card.thumbnail"
			:link="card._path"
			@imageLoadede="isotopeArrange()"
        />
		<!-- <div v-for="card in [1,2,3,4,5]" style="width: 300px; height:200px">test</div> -->
    </div>
</template>

<script setup>
import Isotope from 'isotope-layout'

const props = defineProps({
	cards: {
		required: true
	}
})

const cardCluster = ref(null)

// const resizeObserver = new ResizeObserver(() => {
// 	isotopeArrange.value()
// })

// Resources:
// https://isotope.metafizzy.co
// https://masonry.desandro.com

const mutationObserver = new MutationObserver(() => {
	if (document.contains(cardCluster.value)) {
		// console.log('Cluster: Ready!');

		new Isotope(cardCluster.value, {
			// options
			itemSelector: '.card',
			layoutMode: 'masonry',
			transitionDuration: 0,
			// resize: false,
			masonry: {
				gutter: 30
			}
		})

		mutationObserver.disconnect()
	}
})
mutationObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})

</script>

<style lang="scss" scoped>
.card-cluster {
	position: relative;
	width: calc(100% - 20px);
    max-width: 1080px;
	margin: 0 auto;
	color: var(--clr-font);
	
	@media (min-width: 500px) {
		width: calc(100% - 40px);
	}
}

@media print {
	.card-cluster {
		display: none;
	}
}
</style>