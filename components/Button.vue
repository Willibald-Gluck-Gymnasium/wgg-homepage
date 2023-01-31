<script setup>

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
})

</script>

<template>
    <button class="buttonWithLoader" :disabled="loading">
        <span v-if="!props.loading"><slot /></span>
        <div v-else class="spinner"></div>
    </button>
</template>

<style lang="scss" scoped>
.buttonWithLoader {
    cursor: pointer;
    border: none;
    font-family: inherit;
    font-size: 1rem;
    border-radius: 10px;
    background-color: hsl(29, 100%, 55%);
    color: white;
    width: 200px;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    transition: all 150ms;

    &:hover {
        transform: scale(1.008);
    }

    &:active {
        transform: scale(1.00);
    }


    .spinner {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid #ffffff;
        animation: spinner-bulqg1 0.8s infinite linear alternate,
                spinner-oaa3wk 1.6s infinite linear;
    }

    @keyframes spinner-bulqg1 {
        0% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
        }

        12.5% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
        }

        25% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
        }

        50% {
            clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
        }

        62.5% {
            clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
        }

        75% {
            clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
        }

        100% {
            clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
        }
    }

    @keyframes spinner-oaa3wk {
        0% {
            transform: scaleY(1) rotate(0deg);
        }

        49.99% {
            transform: scaleY(1) rotate(135deg);
        }

        50% {
            transform: scaleY(-1) rotate(0deg);
        }

        100% {
            transform: scaleY(-1) rotate(-135deg);
        }
    }
}
</style>