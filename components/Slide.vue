<template>
    <div class="slide">
        <NuxtLink :to="link">
            <nuxt-img preset="slide" :src="'/images/' + (image.src || 'missing-thumbnail.jpg')" :alt="image.alt" class="background-image" />

            <div class="background-gradient"></div>
            <div class="title">{{ title }}</div>
        </NuxtLink>
    </div>
    
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

</script>

<style lang="scss" scoped>
.slide {
    position: relative;
    height: 300px;
    width: min(100%,1080px) !important;
    flex-shrink: 0;
    transition: filter 0.5s;
    
    a {
        display: block;
        height: 100%;
    }

    // &:not(.is-selected) {
    //     filter: saturate(0.5) brightness(40%);
    // }

    .background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .background-gradient {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%);
    }

    .title {
        overflow-wrap: break-word;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        hyphens: auto;
        font-size: 1.8rem;
        line-height: 1.3;
        color: #FFFFFF;
        position: absolute;
        right: 20px;
        bottom: 10px;
        left: 20px;

        @media (min-width: 500px) {
            font-size: 2.1rem;
        }

        @media (min-width: 600px) {
            font-size: 2.5rem;
        }
    }
}
</style>
