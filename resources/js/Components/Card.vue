<template>
    <div class="card">
        <Link :href="route('artikel.show', slug)" class="content">
            <div class="force-thumbnail-aspect-ratio">
                <!-- <img :v-lazy="thumbnailImage" class="thumbnail"> -->
                <img ref="lazyRef" class="thumbnail">
            </div>

            <div>
                <span class="category mr-2 font-bold">{{ category }}</span>
                <span 
                    v-if="publishedAtUnix"
                    class="timeago" 
                    ref="publishedAt"
                    :datetime="publishedAtUnix"
                ></span>
            </div>

            <div class="title">{{ title }}</div>
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'

import { ref, onBeforeMount, defineProps, defineEmits } from 'vue'

// import images from '@/images'

// import { render, register } from 'timeago.js'
// import de from 'timeago.js/lib/lang/de.js'
// import moment from 'moment'

import { useLazyload } from 'vue3-lazyload'

const emit = defineEmits(['imageLoaded'])

const props = defineProps(['title', 'category', 'timestamp', 'image', 'slug'])

const publishedAtUnix = ref(null)
    
// onBeforeMount(() => {
//     publishedAtUnix.value = moment(props.timestamp, "DD.MM.YYYY HH:mm").unix() * 1000
// })

// const publishedAt = ref(null)

// onMounted(() => {
//     register('de', de);
//     const node = publishedAt.value;
//     if (node != undefined) render([node], 'de');
// })


// If the prop image starts with !!getImageByName!! it will look in 
// the images object from the images.js module to replace the value 
const thumbnailImage = ref(props.image)
const lazyRef = useLazyload(thumbnailImage,{
    lifecycle: {
        loaded: () => {
            emit('imageLoaded')
        }
    }
})

onBeforeMount(() => {
    let imgName = thumbnailImage.value

    if (imgName.startsWith("!!getImageByName!!")) {
        imgName = imgName.replace('!!getImageByName!!','')
        thumbnailImage.value = `/img/${imgName}-thumbnail.jpeg`
    }
})
</script>

<style lang="scss" scoped>

$box-shadow-color: hsla(0, 0%, 0%, 0.08);
$box-shadow--default: 0 4px 20px 0 $box-shadow-color;
$box-shadow--expanded: 0 8px 30px 0 $box-shadow-color;

.card {
    word-wrap: break-word;
    width: calc(100%);
    padding: 10px 0 0;
    margin: 0 0 30px;
    display: flex;
    justify-content: center;
    color: var(--clr-font);

    @media (min-width: 600px) {
        width: calc(50% - 15px);
    }

    @media (min-width: 1000px) {
        width: calc(33.333% - 20px);
    }

    .content {
        display: block;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        width: calc(100% - 20px);
        background: var(--clr-bg-primary);
        padding: 15px;
        box-shadow: $box-shadow--default;
        border-radius: 15px;
        min-height: 200px;
        transition: transform 0.2s, box-shadow 0.2s;

        @at-root html.no-touchevents .card:hover .content {
            transform: scale(1.008) translate(0, -5px);
            box-shadow: $box-shadow--expanded;
        }

        .category {
            font-size: 18px;
            color: var(--clr-wgg-orange);
            font-family: var(--fnt-title);
            font-weight: 600;
        }

        .timeago {
            color: hsl(0, 0%, 50%);

        }

        .title {
            font-family: var(--fnt-title);
            font-size: 24px;
            font-weight: 700;
            word-wrap: break-word;
        }

        .force-thumbnail-aspect-ratio { 
            // CLARIFICATION:
            // This workaround replicates the behavior of the experimental feature 'aspect-ratio'
            // SOURCE:
            // https://pqina.nl/blog/presenting-images-in-an-aspect-ratio-with-css/
            //
            position: relative;
            width: calc(100% + 50px);
            transform: translate(-25px, -25px);
            margin-bottom: -15px;

            &::after {
                display: block;
                content: '';
                padding-bottom: 47%; // aspect ratio
            }

            .thumbnail {
                box-shadow: $box-shadow--default;
                border-radius: 15px;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.2s, box-shadow 0.2s;
                background-color: hsl(0, 0%, 80%);

                @at-root html.no-touchevents .card:hover .thumbnail {
                    box-shadow: $box-shadow--expanded;
                    transform: scale(1.008);
                }
            }
        }
    }
}
</style>