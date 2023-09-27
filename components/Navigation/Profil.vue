<template>
    <div class="container">

        <!--<NavigationMenuItem element="h4" @click="emit('closeNavMenu')" text="Überblick" :link="`/tag/${combineAllMenuItems(menuItems, ['Für Eltern'])}`"/>-->

        <NavigationMenuItem @click="emit('closeNavMenu')" v-for="menuItem in menuItems" :link="menuItem.link || `/tag/${menuItem.text}`" :text="menuItem.text"/>

    </div>
</template>

<script setup>

const emit = defineEmits(['closeNavMenu'])

const menuItems = [
    { text: "Ausbildungswege" },
    { text: "MINT-EC" },
    { text: "Ganztagesklasse" }    
]

function combineAllMenuItems(menuItems, additionalTags) {
    const tags = []

    tags.push(...additionalTags)

    tags.push(...menuItems.map(menuItem => {
        return menuItem.text
    }))

    return tags.join('+')
}
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