<template>
    <div class="container">

        <NavigationMenuItem @click="emit('closeNavMenu')" v-for="menuItem in menuItems" :text="menuItem.text"/>

    </div>
</template>

<script setup>

const emit = defineEmits(['closeNavMenu'])

const menuItems = [
    // { text: "WGG von A bis Z", icon: '' },
    { text: "Downloads" },
    { text: "Infoportal" },
    { text: "Bücher" },
    { text: "Busse" }
]


</script>

<style lang="scss" scoped>
.container {
    box-sizing: content-box;
    min-width: none;
    padding: 25px;
    // padding-bottom: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-height: 550px;
        

    h4 {
        color: hsl(29, 100%, 55%);
        font-weight: bold;
        margin-bottom: 0.7em;
    }

    
}

</style>