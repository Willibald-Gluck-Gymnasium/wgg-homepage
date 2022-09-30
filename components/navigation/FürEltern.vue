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
    padding-bottom: 25px !important;
    padding-right: 25px !important;
        

    h4 {
        color: hsl(29, 100%, 55%);
        font-weight: bold;
        margin-bottom: 0.7em;
    }

    
}

</style>