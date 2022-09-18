<template>
    <div class="container">
        <div v-for="(subjects, categorie) in menuItems" class="category">

            <h4>{{ categorie }}</h4>

            <menuItem @click="emit('closeNavMenu')" v-for="menuItem in subjects" :text="menuItem.text" :icon="menuItem.icon" />


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
    box-sizing: content-box;
    min-width: none;
    padding: 25px;
    padding-bottom: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-height: 550px;
    width: 750px;

    .category {
        margin-bottom: 25px;
        width: 250px;
        color: hsl(0, 0%, 20%);
        
        h4 {
            color: hsl(29, 100%, 55%);
            font-weight: bold;
            margin-bottom: 0.7em;
        }

        :v-deep(.menu-item) {
            margin-right: 50px;
        }
    }
    
}

</style>