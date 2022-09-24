<script setup>
import Flickity from 'flickity'
import "flickity/css/flickity.css"

const props = defineProps(['slides'])

const slider = ref(null)

console.log(props.slides)

const mutationObserver = new MutationObserver(() => {
    if (document.contains(slider.value)) {
        // console.log('Slideshow: Ready!');

        new Flickity(slider.value, {
            wrapAround: true,
            autoPlay: true,
            autoPlay: 6000,
            on: {
                'dragStart': () => {
                    slider.value.style.pointerEvents = 'none'
                },
                'dragEnd': () => {
                    slider.value.style.pointerEvents = 'all'
                }
            }
        });

        mutationObserver.disconnect()
    }
})
mutationObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})

</script>

<template>
    <div ref="slider" class="slider">
        <Slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :image="slide.thumbnail || 'construction-sign.jpg'"
            :link="slide._path"
        ></Slide>
    </div>
</template>



<style lang="scss" scoped>

.slider {
    overflow: hidden;
    width: 100%;
    height: 300px;
}
</style>


<style lang="scss">
.slider {
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

        html.backdropfilter & {
            background: hsla(0, 0%, 0%, 0.1);
            color: hsla(0, 0%, 100%, 1);
            backdrop-filter: blur(8px);

            &:hover {
                background: hsla(0, 0%, 0%, 0.2);
            }

            &:active {
                opacity: 1;
                filter: brightness(0.5);
            }
        }
    }

    .flickity-prev-next-button.previous {
        @media (min-width: 1080px) {
		    left: calc((100% - 1080px) / 2 + 10px)
	    }  
    }

    .flickity-prev-next-button.next {
        @media (min-width: 1080px) {
		    right: calc((100% - 1080px) / 2 + 10px)
	    }
    }
}
</style>
