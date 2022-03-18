<template>
    <Link :href="href" class="result">
        <div class="img">
            <img :src="imgsrc" :alt="title"> 
        </div>
        <div class="desc">
            <span class="category">
                {{ category }}
            </span>
            <span class="timeago" :datetime="Math.round(new Date(timestamp).getTime())"></span>
            <h2>{{ title }}</h2>
            <span class="preview">
                {{ preview }}
            </span>
        </div>
    </Link>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link
    },
    props: ['href', 'imgsrc', 'category', 'timestamp', 'title', 'preview'],
    mounted () {
		var locale = function(number, index, totalSec) {
			return [
				['gerade eben', 'vor einer Weile'],
				['vor %s Sekunden', 'in %s Sekunden'],
				['vor 1 Minute', 'in 1 Minute'],
				['vor %s Minuten', 'in %s Minuten'],
				['vor 1 Stunde', 'in 1 Stunde'],
				['vor %s Stunden', 'in %s Stunden'],
				['vor 1 Tag', 'in 1 Tag'],
				['vor %s Tagen', 'in %s Tagen'],
				['vor 1 Woche', 'in 1 Woche'],
				['vor %s Wochen', 'in %s Wochen'],
				['vor 1 Monat', 'in 1 Monat'],
				['vor %s Monaten', 'in %s Monaten'],
				['vor 1 Jahr', 'in 1 Jahr'],
				['vor %s Jahren', 'in %s Jahren']
			][index];
		};
		timeago.register('de_DE', locale);

		timeago.render(
			this.$el.querySelector('.timeago'),
			'de_DE'
		)
    }
}
</script>

<style scoped lang="scss">
.result {
    display: flex;
    flex-direction: row;
    transition-duration: .2s;
    margin-bottom: 15px;
    color: inherit;
    text-decoration: none;
    color: var(--clr-font);
    .img {
        // height: 200px;
        overflow: auto;
        border-radius: 15px;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.2);
        z-index: 10;
        // CLARIFICATION:
        // This workaround replicates the behavior of the experimental feature 'aspect-ratio'
        // SOURCE:
        // https://pqina.nl/blog/presenting-images-in-an-aspect-ratio-with-css/
        //
        position: relative;
        width: calc(100% + 50px);

        &::after {
            display: block;
            content: '';
            padding-bottom: 47%; // aspect ratio
        }
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .desc {
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        z-index: 0;
        width: 150%;
        flex: 1 1 auto;
        margin: 15px 0;
        background: var(--clr-bg-primary);
        padding: 15px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
        transition-duration: .2s;
        h2 {
            font-size: 1.5em;
            margin: 0;
            margin-top: 15px;
            font-family: var(--fnt-title);
        }
        span {
            position: relative;
            display: inline-block;
            font-size: .95em;
            &.category {
                // font-size: 18px;
                color: var(--clr-wgg-orange);
                font-family: var(--fnt-title);
                font-weight: 600;

            }
            &.timeago {
                right: 0;
                color: gray;
            }
        }
    }
    @at-root html.no-touchevents {
        a:hover {
            transform: scale(1.008) translate(0, -5px);
            .desc {
                box-shadow: 0 0 20px rgba(0,0,0,.1);
            }
        }
    }
}

@media only screen and (max-width: 580px) {
    .result {
        flex-direction: column;
        // width: 100%;
        .img {
            margin-bottom: 0;
            width: auto;
        }
        .desc {
            width: auto;
            margin: 0 15px;
            border-bottom-left-radius: 15px;
            border-top-right-radius: 0;
        }
    }
}

@media only screen and (max-width: 660px) and (min-width: 580px) {
    h2 {
        font-size: 1.1em !important;
    }
}
</style>