<template>
    <div class="container">
        <template v-for="(subjects, categorie) in menuItems">

            <h4>{{ categorie }}</h4>

            <menuItem @click="emit('closeNavMenu')" v-for="menuItem in subjects" :text="menuItem.text" :icon="menuItem.icon" />


        </template>
    </div>
</template>

<script setup>
const menuItem = resolveComponent('Icons/menuItem')

const ArtIcon = resolveComponent('IconsArtIcon')
const BiologyIcon = resolveComponent('IconsBiologyIcon')
const BusinessInformaticsIcon = resolveComponent('IconsBusinessInformaticsIcon')
const ChemistryIcon = resolveComponent('IconsChemistryIcon')
const EconomyIcon = resolveComponent('IconsEconomyIcon')
const EnglishIcon = resolveComponent('IconsEnglishIcon')
const EthicsIcon = resolveComponent('IconsEthicsIcon')
const FrenchIcon = resolveComponent('IconsFrenchIcon')
const GeographyIcon = resolveComponent('IconsGeographyIcon')
const GermanIcon = resolveComponent('IconsGermanIcon')
const HistoryIcon = resolveComponent('IconsHistoryIcon')
const LatinIcon = resolveComponent('IconsLatinIcon')
const MathIcon = resolveComponent('IconsMathIcon')
const MusicIcon = resolveComponent('IconsMusicIcon')
const PhysicsIcon = resolveComponent('IconsPhysicsIcon')
const ProgrammingIcon = resolveComponent('IconsProgrammingIcon')
const ReligionIcon = resolveComponent('IconsReligionIcon')
const SocialStudiesIcon = resolveComponent('IconsSocialStudiesIcon')
const SpanishIcon = resolveComponent('IconsSpanishIcon')
const SportsIcon = resolveComponent('IconsSportsIcon')



const emit = defineEmits(['closeNavMenu'])

const menuItems = {
    Sprachen: [
        { text: "Deutsch", icon: GermanIcon },
        { text: "Latein", icon: LatinIcon },
        { text: "Englisch", icon: EnglishIcon },
        { text: "Französisch", icon: FrenchIcon },
        { text: "Spanisch", icon: SpanishIcon }
    ],
    Naturwissenschaften: [
        { text: "Mathematik", icon: MathIcon },
        { text: "Informatik", icon: ProgrammingIcon },
        { text: "Physik", icon: PhysicsIcon },
        { text: "Chemie", icon: ChemistryIcon },
        { text: "Biologie", icon: BiologyIcon }
    ],
    Gesellschaftswissenschaften: [
        { text: "Geschichte", icon: HistoryIcon },
        { text: "Geograhpie", icon: GeographyIcon },
        { text: "Sozialkunde", icon: SocialStudiesIcon },
        { text: "Wirschaft und Recht", icon: EconomyIcon },
        { text: "Wirschaftsinformatik", icon: BusinessInformaticsIcon },
    ],
    Kultur: [
        { text: "Religion", icon: ReligionIcon },
        { text: "Ethik", icon: EthicsIcon },
        { text: "Kunst", icon: ArtIcon },
        { text: "Musik", icon: MusicIcon },
        { text: "Sport", icon: SportsIcon }
    ],
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
        

    h4 {
        color: hsl(29, 100%, 55%);
        font-weight: bold;
        margin-bottom: 0.7em;
    }

    ::v-deep .menu-item {
        margin-right: 50px;
    }
    
}

</style>