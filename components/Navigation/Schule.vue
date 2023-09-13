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
    Schulprofil: [
        { text: "Ausbildungswege" },
        { text: "MINT-EC" },
        { text: "Ganztagesklasse" },  
    ],
    Schulgemeinschaft: [
        { text: "Sekretariat" },
        { text: "Schulleitung" },
        { text: "SMV" },
        { text: "Elternbeirat" },
        { text: "Verein der Freunde" } 
    ],
    Schulleben: [
        { text: "a" },
        { text: "b" },
        { text: "c" }    
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