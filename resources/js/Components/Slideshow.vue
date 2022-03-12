<template>
    <div class="flickity-slide-scoped-css-5mf3i">
        <div ref="slider" class="slider">
            <!-- <div class="slide" v-for="(slide, i) in slides" :key="i">
                <img class="background-image" :src="thumbnailImage">
                <div class="background-gradient"></div>
                <div class="title">{{ slide.title }}</div>
            </div> -->
            <slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :image="slide.thumbnail_slider"
                :link="slide.link"
            ></slide>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

import Slide from '@components/Slide'

var Flickity = require('flickity')

const props = defineProps(['slides'])

const slider = ref(null)

onMounted(() => {
    var flickity = new Flickity(slider.value, {
        wrapAround: true,
        autoPlay: true,
        autoPlay: 6000
    });
})

</script>

<style lang="scss" scoped>

.slider {
    width: 100%;
    height: 300px;
}
</style>


<style lang="scss">
// ***********************
// Flickity Styles
.flickity-slide-scoped-css-5mf3i {
    .flickity-enabled {
        position: relative
    }

    .flickity-enabled:focus {
        outline: 0
    }

    .flickity-viewport {
        overflow: hidden;
        position: relative;
        height: 100%;
    }

    .flickity-slider {
        position: absolute;
        width: 100%;
        height: 100%
    }

    .flickity-enabled.is-draggable {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }

    .flickity-enabled.is-draggable .flickity-viewport {
        cursor: move;
        cursor: -webkit-grab;
        cursor: grab
    }

    .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
        cursor: -webkit-grabbing;
        cursor: grabbing
    }

    .flickity-button {
        position: absolute;
        background: hsla(0, 0%, 100%, 0.3);
        border: none;
        color: hsla(0, 0%, 0%, 0.8);
        filter: brightness(100%);
        transition: 0.15s background-color; //0.15s filter; // BUG: Filter doesnt work with css transitions

        &:hover {
            background: hsla(0, 0%, 100%, 0.5);
            cursor: pointer
        }

        .backdropfilter & {
            background: hsla(0, 0%, 0%, 0.1);
            color: hsla(0, 0%, 100%, 1);
            backdrop-filter: blur(8px);

            &:hover {
                background: hsla(0, 0%, 0%, 0.2);
            }
        }
    }

    .flickity-button:focus {
        outline: 0;
        box-shadow: 0 0 0 5px #19f
    }

    .flickity-button:active {
        filter: brightness(70%);
    }

    .flickity-button:disabled {
        opacity: .3;
        cursor: auto;
        pointer-events: none
    }

    .flickity-button-icon {
        fill: currentColor
    }

    .flickity-prev-next-button {
        top: 50%;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        transform: translateY(-50%)
    }

    // Custom positioning
    .flickity-prev-next-button.previous {
        left: 10px;
        
        @media (min-width: 1080px) {
		    left: calc((100% - 1080px) / 2 + 10px)
	    }  
    }

    .flickity-prev-next-button.next {
        right: 10px;

        @media (min-width: 1080px) {
		    right: calc((100% - 1080px) / 2 + 10px)
	    }
    }

    .flickity-rtl .flickity-prev-next-button.previous {
        left: auto;
        right: 10px
    }

    .flickity-rtl .flickity-prev-next-button.next {
        right: auto;
        left: 10px
    }

    .flickity-prev-next-button .flickity-button-icon {
        position: absolute;
        left: 20%;
        top: 20%;
        width: 60%;
        height: 60%
    }

    .flickity-page-dots {
        position: absolute;
        width: 100%;
        bottom: -25px;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        line-height: 1;
        z-index: 100;
    }

    .flickity-rtl .flickity-page-dots {
        direction: rtl
    }

    .flickity-page-dots .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 8px;
        background: var(--clr-font);
        border-radius: 50%;
        opacity: .25;
        cursor: pointer;
        transition-duration: .2s;
    }

    .flickity-page-dots .dot.is-selected {
        opacity: 1;
        transform: scale(1.1);
    }
}
</style>