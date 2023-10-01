<template>
    <div class="container">

        <!--<NavigationMenuItem element="h4" @click="emit('closeNavMenu')" text="Überblick" :link="`/tag/${combineAllMenuItems(menuItems, ['Für Eltern'])}`"/>-->

        <NavigationMenuItem @click="emit('closeNavMenu')" v-for="menuItem in menuItems" :link="menuItem.link || `/tag/${menuItem.text}`" :text="menuItem.text"/>

    </div>
</template>

<script setup>

const emit = defineEmits(['closeNavMenu'])

const menuItems = [
    { text: "Sekretariat", link: "/gemeinschaft/sekretariat" },
    { text: "Schulleitung", link: "/gemeinschaft/direktorat" },
    { text: "Schulberatung", link: "/gemeinschaft/beratung" },
    { text: "SMV" , link: "/gemeinschaft/smv" },
    { text: "Elternbeirat", link: "/gemeinschaft/elternbeirat" },
    { text: "Förderverein", link: "/gemeinschaft/verein_der_freunde" },
    { text: "Ganztagesschule", link: "/gemeinschaft/ganztagesklasse" },
    { text: "Mensa", link: "/gemeinschaft/mensa" },
    { text: "Ehemalige", link: "https://wgg.alumnii.de/" }
]
function combineAllMenuItems(menuItems, additionalTags) {
    const tags = []

    tags.push(...additionalTags)

    tags.push(...menuItems.map(menuItem => {
        return menuItem.text
    }))

    return tags.join('+')
}


console.log('menuItems:', menuItems);
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