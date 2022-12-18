<template>
    <div class="container">
        <template v-for="(subjects, categorie) in menuItems">

            <h4>{{ categorie }}</h4>

            <NavigationMenuItem @click="emit('closeNavMenu')" v-for="menuItem in subjects" :text="menuItem.text"
                :icon="menuItem.icon" />


        </template>
    </div>
</template>

<script setup>
const ArtIcon = resolveComponent('IconsArt')
const BiologyIcon = resolveComponent('IconsBiology')
const BusinessInformaticsIcon = resolveComponent('IconsBusinessInformatics')
const ChemistryIcon = resolveComponent('IconsChemistry')
const EconomyIcon = resolveComponent('IconsEconomy')
const EnglishIcon = resolveComponent('IconsEnglish')
const EthicsIcon = resolveComponent('IconsEthics')
const FrenchIcon = resolveComponent('IconsFrench')
const GeographyIcon = resolveComponent('IconsGeography')
const GermanIcon = resolveComponent('IconsGerman')
const HistoryIcon = resolveComponent('IconsHistory')
const LatinIcon = resolveComponent('IconsLatin')
const MathIcon = resolveComponent('IconsMath')
const MusicIcon = resolveComponent('IconsMusic')
const PhysicsIcon = resolveComponent('IconsPhysics')
const ProgrammingIcon = resolveComponent('IconsProgramming')
const ReligionIcon = resolveComponent('IconsReligion')
const SocialStudiesIcon = resolveComponent('IconsSocialStudies')
const SpanishIcon = resolveComponent('IconsSpanish')
const SportsIcon = resolveComponent('IconsSports')



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
        { text: "Geographie", icon: GeographyIcon },
        { text: "Politik und Gesellschaft", icon: SocialStudiesIcon },
        { text: "Wirtschaft und Recht", icon: EconomyIcon },
        { text: "Wirtschaftsinformatik", icon: BusinessInformaticsIcon },
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
    padding-bottom: 25px !important;

    @media (min-width: 770px) {
        width: 750px !important;

    }


    h4 {
        color: hsl(29, 100%, 55%);
        font-weight: bold;
        margin-bottom: 0.7em;
        margin-top: 0;
    }

    :v-deep(.menu-item) {
        margin-right: 50px;
    }

}
</style>