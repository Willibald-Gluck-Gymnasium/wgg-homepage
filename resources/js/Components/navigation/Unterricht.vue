<template>
    <div class="container">
        <template v-for="(subjects, categorie) in menuItems">

            <h4>{{ categorie }}</h4>

            <menuItem @click="emit('closeNavMenu')" v-for="menuItem in subjects" :text="menuItem.text" :icon="menuItem.icon" />


        </template>
    </div>
</template>

<script setup>
import menuItem from '@components/navigation/menuItem'

import ArtIcon from '@components/icons/ArtIcon'
import BiologyIcon from '@components/icons/BiologyIcon'
import BusinessInformaticsIcon from '@components/icons/BusinessInformaticsIcon'
import ChemistryIcon from '@components/icons/ChemistryIcon'
import EconomyIcon from '@components/icons/EconomyIcon'
import EnglishIcon from '@components/icons/EnglishIcon'
import EthicsIcon from '@components/icons/EthicsIcon'
import FrenchIcon from '@components/icons/FrenchIcon'
import GeographyIcon from '@components/icons/GeographyIcon'
import GermanIcon from '@components/icons/GermanIcon'
import HistoryIcon from '@components/icons/HistoryIcon'
import LatinIcon from '@components/icons/LatinIcon'
import MathIcon from '@components/icons/MathIcon'
import MusicIcon from '@components/icons/MusicIcon'
import PhysicsIcon from '@components/icons/PhysicsIcon'
import ProgrammingIcon from '@components/icons/ProgrammingIcon'
import ReligionIcon from '@components/icons/ReligionIcon'
import SocialStudiesIcon from '@components/icons/SocialStudiesIcon'
import SpanishIcon from '@components/icons/SpanishIcon'
import SportsIcon from '@components/icons/SportsIcon'


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