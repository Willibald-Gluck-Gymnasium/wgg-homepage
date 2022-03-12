<template>
    <div class="card-cluster">
        <card
            v-for="(card, i) in cards"
			:key="i"
			:title="card.title"
			:category="card.category"
			:timestamp="card.published_on"
    		:image="card.thumbnail"
			:slug="card.link"
        />
    </div>
</template>

<script>
import Card from '@components/Card'

import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'


export default {
	components: {
		Card
	},

	props: [
		'cards'
	],

	mounted() {
		// Resources:
		// https://isotope.metafizzy.co
		// https://masonry.desandro.com
		//
		var cardCluster = this.$el
		var isotope = new Isotope( cardCluster, {
			// options
			itemSelector: '.card',
			layoutMode: 'masonry',
			transitionDuration: 0,
			masonry: {
				gutter: 30
			}
		});

		// rearrange isotope everytime an image is finished loading
		var imgLoad = imagesLoaded(cardCluster);
		imgLoad.on('progress', function(instance, image) {
			isotope.arrange()
		});

		// rearrange isotope when cardCluster is resized
		var lastIsotopeWidth = cardCluster.clientWidth
		window.addEventListener('resize', function(){
			if (lastIsotopeWidth != cardCluster.clientWidth) {
				isotope.arrange()
			}
			lastIsotopeWidth = cardCluster.clientWidth
		});
	},
}
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