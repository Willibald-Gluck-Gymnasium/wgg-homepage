<template>
    <div ref="cardCluster" class="card-cluster">
        <Card
            v-for="(card, i) in cards"
			:key="i"
			:title="card.title"
			category="Test"
			:timestamp="card.published_on"
    		:image="card.thumbnail"
			:slug="card.link"
			@imageLoaded="isotopeArrange()"
        />
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Isotope from 'isotope-layout'

const props = defineProps({
	cards: {
		require: true
	}
})

const cardCluster = ref(null)

let isotope

let isotopeArrange = ref(() => {
	console.error("isotopeArrange() called before isotope layout was created")
})

onMounted(() => {
	// Resources:
		// https://isotope.metafizzy.co
		// https://masonry.desandro.com
		//

		watch(cardCluster, () => {
			if (cardCluster.value instanceof HTMLDivElement) {

				isotope = new Isotope(cardCluster.value, {
					// options
					itemSelector: '.card',
					layoutMode: 'masonry',
					transitionDuration: 0,
					masonry: {
						gutter: 30
					}
				});

				// Rearrange when images loaded
				isotopeArrange.value = () => {
					isotope.layout()
				}
				
			}
		});

		
		
})

// rearrange isotope when cardCluster is resized
// let lastIsotopeWidth

// onMounted(() => {
// 	lastIsotopeWidth = cardCluster.value.clientWidth
// })

// const eventResizeHandle = () => {
// 	if (lastIsotopeWidth != cardCluster.value.clientWidth) {
// 		isotope.arrange()
// 	}
// 	lastIsotopeWidth = cardCluster.value.clientWidth
// }

// onMounted(() => {
// 	window.addEventListener('resize', eventResizeHandle);
// })

// onUnmounted(() => {
// 	window.removeEventListener('resize', eventResizeHandle);
// })
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