<template>
    <div ref="slider" class="slider">
        <Slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :image="slide.thumbnail || 'test'"
            :link="slide.link || 'link'"
        ></Slide>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Flickity from 'flickity'
import "flickity/css/flickity.css"

const props = defineProps(['slides'])

const slider = ref(null)

onMounted(async () => {
    await nextTick()

    const mutationObserver = new MutationObserver(() => {
	    if (document.contains(slider.value)) {
            console.log('Ready');

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
// .flickity-slide-scoped-css-5mf3i {
    // .flickity-enabled {
    //     position: relative
    // }

    // .flickity-enabled:focus {
    //     outline: 0
    // }

    // .flickity-viewport {
    //     height: 100% !important;
    // }

    // .flickity-slider {
    //     position: absolute;
    //     width: 100%;
    //     height: 100%
    // }

//     .flickity-enabled.is-draggable {
//         -webkit-tap-highlight-color: transparent;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         -ms-user-select: none;
//         user-select: none
//     }

//     .flickity-enabled.is-draggable .flickity-viewport {
//         cursor: move;
//         cursor: -webkit-grab;
//         cursor: grab
//     }

//     .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
//         cursor: -webkit-grabbing;
//         cursor: grabbing
//     }

//     .flickity-button {
//         position: absolute;
//         background: hsla(0, 0%, 100%, 0.3);
//         border: none;
//         color: hsla(0, 0%, 0%, 0.8);
//         filter: brightness(100%);
//         transition: 0.15s background-color; //0.15s filter; // BUG: Filter doesnt work with css transitions

//         &:hover {
//             background: hsla(0, 0%, 100%, 0.5);
//             cursor: pointer
//         }

//         .backdropfilter & {
//             background: hsla(0, 0%, 0%, 0.1);
//             color: hsla(0, 0%, 100%, 1);
//             backdrop-filter: blur(8px);

//             &:hover {
//                 background: hsla(0, 0%, 0%, 0.2);
//             }
//         }
//     }

//     .flickity-button:focus {
//         outline: 0;
//         box-shadow: 0 0 0 5px #19f
//     }

//     .flickity-button:active {
//         filter: brightness(70%);
//     }

//     .flickity-button:disabled {
//         opacity: .3;
//         cursor: auto;
//         pointer-events: none
//     }

//     .flickity-button-icon {
//         fill: currentColor
//     }

//     .flickity-prev-next-button {
//         top: 50%;
//         width: 44px;
//         height: 44px;
//         border-radius: 50%;
//         transform: translateY(-50%)
//     }

//     // Custom positioning
//     .flickity-prev-next-button.previous {
//         left: 10px;
        
//         @media (min-width: 1080px) {
// 		    left: calc((100% - 1080px) / 2 + 10px)
// 	    }  
//     }

//     .flickity-prev-next-button.next {
//         right: 10px;

//         @media (min-width: 1080px) {
// 		    right: calc((100% - 1080px) / 2 + 10px)
// 	    }
//     }
// }
</style>
