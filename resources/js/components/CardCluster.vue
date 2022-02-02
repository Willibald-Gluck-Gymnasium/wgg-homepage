<template>
    <div class="card-cluster">
        <card
            v-for="(card, i) in cards"
			:key="i"
			:title="card.title"
			:category="card.main_category"
			:timestamp="card.published_on"
    		:image="card.image"
			:slug="card.slug"
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
				console.log("Test");
			}
			lastIsotopeWidth = cardCluster.clientWidth
		});
	},

    data: () => ({
		cards: [
			{
				title: 'Finish further even graph clear close',
				main_category: 'Aktuelles',
				published_on: 'Thu Dec 24 2020 03:01:21 GMT+0100',
				image: require('@resources/img/color1-thumbnail.jpeg'),
				slug: 'corona-sicherheit'
			},
			{
				title: 'Than indicate ball land brought themselves little path',
				main_category: 'Unterricht',
				published_on: 'Nov 2 2020 01:12:10 GMT+0100',
				image: require('@resources/img/color2-thumbnail.jpeg'),
				slug: 'schulanmeldung'
			},
			{
				title: 'Wife tin mighty court',
				main_category: 'Aktivitäten',
				published_on: 'Dec 19 2020 08:50:10 GMT+0100',
				image: require('@resources/img/color3-thumbnail.jpeg'),
				slug: 'schuljahr2020'
			},
			{
				title: 'Unsere Schülergenossenschaft findet demnächst ihre Anfänge',
				main_category: 'Gemeinschafft',
				published_on: 'Dec 2 2020 01:50:10 GMT+0100',
				image: require('@resources/img/color4-thumbnail.jpeg'),
				slug: 'schuelergenossenschaft'
			},
			{
				title: 'Wie Sie Ihr Kind und unsere Gesellschaft schützen',
				main_category: 'Aktuelles',
				published_on: 'Thu Dec 24 2020 03:01:21 GMT+0100',
				image: require('@resources/img/color5-thumbnail.jpeg'),
				slug: 'corona-sicherheit'
			},
			{
				title: 'Wie Sie Ihr Kind an unserer können',
				main_category: 'Unterricht',
				published_on: 'Nov 2 2020 01:12:10 GMT+0100',
				image: require('@resources/img/color6-thumbnail.jpeg'),
				slug: 'schulanmeldung'
			},
			{
				title: 'Das neue',
				main_category: 'Aktivitäten',
				published_on: 'Dec 14 2020 08:50:10 GMT+0100',
				image: require('@resources/img/color7-thumbnail.jpeg'),
				slug: 'schuljahr2020'
			},
			{
				title: 'Unsere Schülergenossenschaft findet demnächst ihre Anfänge',
				main_category: 'Gemeinschafft',
				published_on: 'Dec 2 2020 01:50:10 GMT+0100',
				image: require('@resources/img/color8-thumbnail.jpeg'),
				slug: 'schuelergenossenschaft'
			},
			{
				title: 'Wie Sie Ihr Kind und unsere Gesellschaft schützen',
				main_category: 'Aktuelles',
				published_on: 'Thu Dec 24 2020 03:01:21 GMT+0100',
				image: require('@resources/img/color9-thumbnail.jpeg'),
				slug: 'corona-sicherheit'
			},
			{
				title: 'Wie Sie Ihr Kind an unserer können',
				main_category: 'Unterricht',
				published_on: 'Nov 2 2020 01:12:10 GMT+0100',
				image: require('@resources/img/color10-thumbnail.jpeg'),
				slug: 'schulanmeldung'
			},
			{
				title: 'Das neue',
				main_category: 'Aktivitäten',
				published_on: 'Dec 14 2020 08:50:10 GMT+0100',
				image: require('@resources/img/color11-thumbnail.jpeg'),
				slug: 'schuljahr2020'
			},
			{
				title: 'Unsere Schülergenossenschaft findet demnächst ihre Anfänge',
				main_category: 'Gemeinschafft',
				published_on: 'Dec 2 2020 01:50:10 GMT+0100',
				image: require('@resources/img/color12-thumbnail.jpeg'),
				slug: 'schuelergenossenschaft'
			},
			{
				title: 'Wie Sie Ihr Kind und unsere Gesellschaft schützen',
				main_category: 'Aktuelles',
				published_on: 'Thu Dec 24 2020 03:01:21 GMT+0100',
				image: require('@resources/img/color13-thumbnail.jpeg'),
				slug: 'corona-sicherheit'
			},
			{
				title: 'Wie Sie Ihr Kind an unserer können',
				main_category: 'Unterricht',
				published_on: 'Nov 2 2020 01:12:10 GMT+0100',
				image: require('@resources/img/color14-thumbnail.jpeg'),
				slug: 'schulanmeldung'
			},
			{
				title: 'Das neue',
				main_category: 'Aktivitäten',
				published_on: 'Dec 14 2020 08:50:10 GMT+0100',
				image: require('@resources/img/color1-thumbnail.jpeg'),
				slug: 'schuljahr2020'
			},
			{
				title: 'Unsere Schülergenossenschaft findet demnächst ihre Anfänge',
				main_category: 'Gemeinschafft',
				published_on: 'Dec 2 2020 01:50:10 GMT+0100',
				image: require('@resources/img/color2-thumbnail.jpeg'),
				slug: 'schuelergenossenschaft'
			}
		]
	})
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