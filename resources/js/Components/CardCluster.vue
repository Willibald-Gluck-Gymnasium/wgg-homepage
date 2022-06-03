<template>
    <div ref="cardCluster" class="card-cluster">
        <card
            v-for="(card, i) in cards"
			:key="i"
			:title="card.title"
			:category="card.tags[0]"
			:timestamp="card.published_on"
    		:image="card.thumbnail"
			:slug="card.link"
        />
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, defineProps, ref } from 'vue';
import Card from '@components/Card'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

const props = defineProps(['cards'])

const cardCluster = ref(null)

let isotope

onMounted(() => {
	// Resources:
		// https://isotope.metafizzy.co
		// https://masonry.desandro.com
		//

		isotope = new Isotope(cardCluster.value, {
			// options
			itemSelector: '.card',
			layoutMode: 'masonry',
			transitionDuration: 0,
			masonry: {
				gutter: 30
			}
		});

		// rearrange isotope everytime an image is finished loading
		let imgLoad = imagesLoaded(cardCluster.value);
		imgLoad.on('progress', function(instance, image) {
			isotope.arrange()
		});
})


// rearrange isotope when cardCluster is resized
let lastIsotopeWidth

onMounted(() => {
	lastIsotopeWidth = cardCluster.value.clientWidth
})

const eventResizeHandle = () => {
	if (lastIsotopeWidth != cardCluster.value.clientWidth) {
		isotope.arrange()
	}
	lastIsotopeWidth = cardCluster.value.clientWidth
}

onMounted(() => {
	window.addEventListener('resize', eventResizeHandle);
})

onUnmounted(() => {
	window.removeEventListener('resize', eventResizeHandle);
})
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