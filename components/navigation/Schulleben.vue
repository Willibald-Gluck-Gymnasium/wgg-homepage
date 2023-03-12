<template>
    <div class="container">
        <div v-for="(subjects, category) in menuItems" class="category">

            <!-- <NuxtLink :to="`/tag/${combineAllMenuItems(subjects)}`"> <h4>{{ category }}</h4> </NuxtLink> -->
            <NavigationMenuItem element="h4" @click="emit('closeNavMenu')" :text="category" :link="`/tag/${combineAllMenuItems(subjects, [category])}`"/>

            <NavigationMenuItem @click="emit('closeNavMenu')" v-for="menuItem in subjects" :text="menuItem.text" :link="`/tag/${menuItem.text}`" :icon="menuItem.icon" />


        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['closeNavMenu'])

const menuItems = {
    Events: [
        { text: "Alle Projekte" },
        { text: "Naturwissenschaften" },
        { text: "Wirtschaftswissenschaften" },
        { text: "Übergreifendes" }
    ],
    Schulteam: [
        { text: "Beratung" },
        { text: "Bibliothek" },
        { text: "Elternbeirat" },
        { text: "Schulleitung" },
        { text: "SMV" },
        { text: "Verein der Freunde" }
    ],
    Schulprofil: [
        { text: "Leitbild des WGG" },
        { text: "NTG Zweig" },
        { text: "WWG Zweig" }
    ]
}

function combineAllMenuItems(category, additionalTags) {
    const tags = []

    tags.push(...additionalTags)

    tags.push(...category.map(menuItem => {
        return menuItem.link || menuItem.text
    }))

    return tags.join('+')
}

// console.log(combineAllMenuItems(menuItems.Events))
// console.log(combineAllMenuItems(menuItems.Schulteam))
// console.log(combineAllMenuItems(menuItems.Schulprofil))


</script>

<style lang="scss" scoped>
.container {
    @media (min-width: 770px) {
        width: 750px !important;
    }


    .category {
        margin-bottom: 25px;
        color: hsl(0, 0%, 20%);
        
        h4 {
            color: hsl(29, 100%, 55%);
            font-weight: bold;
            margin-bottom: 0.7em;
            margin-top: 0;

            a {
                color: inherit;
                text-decoration: inherit;
                display: block;
            }
        }
    }
    
}

</style>