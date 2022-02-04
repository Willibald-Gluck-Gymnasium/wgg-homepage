<template>
    <div class="tab">
        <button id="header">
            {{ title }}
        </button>
        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>

</style>