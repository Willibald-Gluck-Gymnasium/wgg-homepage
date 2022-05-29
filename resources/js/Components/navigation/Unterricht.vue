<template>
    <div class="container">
        <div class="category" v-for="(subjects, categorie) in menuItems">

            <h4>{{ categorie }}</h4>

            <Link @click="emit('closeNavMenu')" v-for="subject in subjects" :href="`/tag/${subject.link || subject.text}`" class="subject">
                <component class="icon" :is="subject.icon" />
                <span>{{ subject.text }}</span>
            </Link>

        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3' 
import { defineEmits } from 'vue'

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
    Sonstiges: [
        { text: "Mathematik", icon: MathIcon },
        { text: "Informatik", icon: ProgrammingIcon },
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
    max-height: 600px;
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

        .subject {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            margin-right: 50px;
            position: relative;
            z-index: 850;
            padding: 5px 0;

            .icon {
                width: 24px;
                margin-right: 8px;
                max-height: 24px;
            }

            &:last-child {
                margin-bottom: 0;
            }

            &::before {
                transition: transform 100ms ease-in, opacity 100ms ease-in;
                transform: scale(0.95);
                pointer-events: none;
                opacity: 0;
                content: "";
                position: absolute;
                z-index: -1;
                left: -7px;
                top: -2px;
                right: -7px;
                bottom: -2px;

                background-color: hsl(29,100%,90%);
                border-radius: 10px;
            }

            &:hover {
                text-decoration: underline;
                &::before {
                    transition: transform 150ms ease-out, opacity 150ms ease-out;
                    transform: scale(1);
                    opacity: 1;
                }
            }
        }

    }
    
}

</style>