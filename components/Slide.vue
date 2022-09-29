<template>
    <div class="slide">
        <NuxtLink :to="link">
            <!-- <img class="background-image" :src="'/images/' + image"> -->
            <nuxt-img preset="slide" :src="'/images/' + image" class="background-image" />

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
        type: String,
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
    width: 100%;
    max-width: 1080px;
    height: 100%;
    transition: filter 0.5s;
    
    a {
        display: block;
        height: 100%;
    }

    &:not(.is-selected) {
        filter: saturate(0.5) brightness(40%);
    }

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
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        // font-size: 1.8rem;
        line-height: 1.3;
        color: #FFFFFF;
        position: absolute;
        right: 20px;
        bottom: 10px;
        left: 20px;
    }
}
</style>
