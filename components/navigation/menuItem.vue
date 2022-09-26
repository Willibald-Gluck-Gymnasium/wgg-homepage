<template>
    <NuxtLink :to="`/tag/${link || text}`" class="menu-item">
        <component v-if="icon" class="icon" :is="icon" />
        <span>{{ text }}</span>
    </NuxtLink>
</template>

<script setup>
    
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    icon: {
        type: Object
    }
})
</script>

<style scoped lang="scss">

.menu-item {
    text-decoration: none;
    width: 225px;
    color: hsl(0, 0%, 20%);
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 850;
    padding: 5px 0;

    .icon {
        width: 24px;
        margin-right: 8px;
        max-height: 24px;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &::before {
        transition: transform 100ms ease-in, opacity 100ms ease-in;
        transform: scale(0.95);
        pointer-events: none;
        opacity: 0;
        content: "";
        position: absolute;
        z-index: -1;
        left: -7px;
        top: -2px;
        right: -7px;
        bottom: -2px;

        background-color: hsl(29,100%,90%);
        border-radius: 10px;
    }

    &:hover {
        // text-decoration: underline;
        &::before {
            transition: transform 150ms ease-out, opacity 150ms ease-out;
            transform: scale(1);
            opacity: 1;
        }
    }
}
</style>