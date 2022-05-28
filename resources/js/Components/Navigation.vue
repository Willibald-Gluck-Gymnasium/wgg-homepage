<template >
    <vsm-menu
        :menu="menu"
        class="navigation-scoped-P6Wnx vsm-menu"
        element="header"
        handler="hover"
        align="center"
    >
        <template #default="{ item }">
            <!--Dropdown content of each menu item with a "dropdown" property-->
            <!--You can replace it with a separate component if each menu item has its own style-->
            <!--Necessarily need to have at least one element within the slot-->
            <!--An alternate background will be applied from the 2nd element-->
            <div style="width: 300px; padding: 30px">
                <component :is="componentsMap[item.component]" />
            </div>
            <!-- <div style="padding: 30px">
                Second element
            </div> -->
        </template>
        <template #before-nav>
             <Link :href="route('home')" style="flex-shrink: 0">
                <school-logo-with-text class="mr-3" />
            </Link>
        </template>
        <template #after-nav>
            <search-bar></search-bar>
            <vsm-mob>Mobile Content</vsm-mob>
        </template>
    </vsm-menu>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import SchoolLogoWithText from '@components/SchoolLogoWithText'
import { VsmMenu, VsmMob } from 'vue-stripe-menu'
import { ref } from 'vue'
import SearchBar from './SearchBar'

import UnterrichtNav from '@components/navigation/Unterricht'

// This is to prevent the component from getting reactive, wich can cause problems
const componentsMap = {
  UnterrichtNav,
  // ... 
}

const menu = ref([
    { title: 'Aktuelles', dropdown: 'aktuelles', component: 'comp1' },
    { title: 'Schulleben', dropdown: 'schulleben', component: 'comp1' },
    { title: 'Unterricht', dropdown: 'unterricht', component: 'UnterrichtNav' },
    { title: 'Für Eltern', dropdown: 'füreltern', component: 'comp1' },

    // {
    //     title: 'News',
    //     dropdown: 'news',
    //     component: 'comp2',
    //     element: 'span',
    //     align: 'left',
    //     // attributes: {
    //     //     // I want more classes! No problem
    //     //     // string, array, object, not matter
    //     //     class: ['my-class1', { 'my-class2': true }],
    //     //     // Custom attributes
    //     //     'data-big': 'yes'
    //     // }
    // },
    // {
    //     title: 'Aktuelles',
    //     dropdown: 'aktuelles',
    //     element: 'span',
    //     align: 'center',
    // },
    // {
    //     title: 'test',
    //     dropdown: 'tes',
    //     align: 'right',
    // },
    // {
    //     title: 'External Link',
    //     attributes: {
    //         href: 'https://github.com/Alexeykhr/vue-stripe-menu',
    //         target: '_blank'
    //     }
    // }
])

</script>


<style lang="scss">
// @import "~vue-stripe-menu/src/scss/index";
@import 'vue-stripe-menu/dist/vue-stripe-menu.css';

.navigation-scoped-P6Wnx, .vsm-menu {
    color: black;
    background-color: white;
    border-bottom: 3px solid hsl(29,100%,55%);
    opacity: 1;
    position: relative;
    z-index: 825;
    height: 70px;

    .vsm-background {
        // background: none;
    }

    .vsm-dropdown-content {
        background-color: white;
        border-radius: 20px;
    } 

    .vsm-nav {
        height: 100%;
        margin: 0 auto;
        max-width: 1080px;
        width: calc(100% - 20px);
    }

    .vsm-root {
        height: 100%;
    }

    .vsm-link-container {
        justify-content: flex-start;
        .vsm-link {
            padding: 0 20px;
            color: inherit;
        }
    }

    

    .vsm-link-container {
        display: flex;
        flex: 1 1 auto;
        justify-content: center;
    }

    @media screen and (max-width: 1) {
        .vsm-mob-show {
            display: block;
        }
        .vsm-mob-hide {
            display: none;
        }
        .vsm-mob-full {
            flex-grow: 1;
        }
    }
}
</style>