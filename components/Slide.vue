<template>
    <NuxtLink class="slide" :to="'/' + link">
        <img class="background-image" src="/images/construction-sign.jpg">
        <div class="background-gradient"></div>
        <div class="title">{{ title }}</div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['image', 'title', 'link'])
</script>

<style lang="scss" scoped>
.slide {
    width: 100%;
    max-width: 1080px;
    height: 100%;
    position: relative;
    transition: filter 0.5s;

    &:not(.is-selected) {
        filter: saturate(0.5) brightness(40%);
    }

    .background-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .background-gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%);
    }

    .title {
        font-family: var(--fnt-title);
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