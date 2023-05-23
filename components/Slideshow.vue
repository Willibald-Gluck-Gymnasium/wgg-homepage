<template>
    <div>
      
        <div class="navigation-wrapper">

            <div ref="container" class="keen-slider">
                <Slide
                    class="keen-slider__slide"
                    v-for="(slide, i) in slides"
                    :key="i"
                    :title="slide.title"
                    :image="slide.thumbnail || 'construction-sign.jpg'"
                    :link="slide._path"
                ></Slide>
            </div>

            <button 
                v-if="slider"
                @click="slider.prev()"
                :class="{
                    arrow: true,
                    'arrow--left': true,
                    'arrow--disabled': current === slider.track.details.slides.length - 1,
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></svg>
            </button>

            <button 
                v-if="slider"
                @click="slider.next()"
                :class="{
                    arrow: true,
                    'arrow--right': true,
                    'arrow--disabled': current === slider.track.details.slides.length - 1,
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
            </button>

        </div>
        <div class="dots">
            <button
            v-for="(_slide, idx) in dotHelper"
            @click="slider.moveToIdx(idx)"
            :class="{ dot: true, active: current === idx }"
            :key="idx"
            ></button>
        </div>
    </div>

</template>

<script setup>
// import { useKeenSlider } from 'keen-slider/vue.es'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

const props = defineProps({
    slides: {
        required: true,
        type: Array
    }
})

const current = ref(0)
const container = ref(null)
const slider = ref(null)



onMounted(() => {
    slider.value = new KeenSlider(
        container.value,
        {
            initial: current.value,
            loop: true,
            slides: {
                origin: 'center',
                perView: 'auto'
            },
            slideChanged: (s) => {
                current.value = s.track.details.rel
            },
        }
    )
})


const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])


</script>

<style lang="scss" scoped>

.keen-slider {
}

.keen-slider__slide {
    /* background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500; */
    height: 300px;
    width: min(100%,1080px) !important;
    flex-shrink: 0;
    /* max-width: 1080px; */
}

.navigation-wrapper {
    position: relative;
}
.dots {
    display: flex;
    padding: 10px 0;
    height: 30px;
    justify-content: center;
}
.dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
}
.dot:focus {
        outline: none;
}
.dot.active {
    background: #000;
}
.arrow {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: hsla(0, 0%, 0%, 0.5);
    padding: 7px;
    cursor: pointer;
    transition: all 100ms;
    fill: #FFFFFF;

    @at-root html.backdropfilter & {
        // fill: #000000;
        background-color: transparent;
        backdrop-filter: blur(10px) saturate(180%) brightness(0.7);
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
    }

    svg {
        fill: inherit;
        width: 100%;
        height: 100%;
    }

    &.arrow--left {
        svg {
            transform: translateX(-2px);
        }
    }
    &.arrow--right {
        svg {
            transform: translateX(2px);
        }
    }
}

$arrow-screen-padding: 10px;
.arrow--left {
    left: max(calc((100% - 1080px) / 2 + $arrow-screen-padding), $arrow-screen-padding);
}
.arrow--right {
    left: auto;
    right: max(calc((100% - 1080px) / 2 + $arrow-screen-padding), $arrow-screen-padding);
}
/* .arrow--disabled {
fill: rgba(255, 255, 255, 0.5);
} */
</style>