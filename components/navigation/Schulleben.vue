<template>
    <div class="container">
        <div v-for="(subjects, categorie) in menuItems" class="category">

            <h4>{{ categorie }}</h4>

            <NavigationMenuItem @click="emit('closeNavMenu')" v-for="menuItem in subjects" :text="menuItem.text" :icon="menuItem.icon" />


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
        }
    }
    
}

</style>