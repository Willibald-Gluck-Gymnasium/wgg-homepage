<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h1 {
        margin: 0 auto;
        margin-top: 25px;
        width: calc(100% - 20px);
        max-width: 1080px;
        color: var(--clr-font);
        font-weight: 700;

        @media (min-width: 500px) {
            width: calc(100% - 40px);
        }
        
    }
</style>