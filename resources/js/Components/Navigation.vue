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
                Custom component: <br>
                <component :is="componentsMap[item.component]" />
            </div>
            <div style="padding: 30px">
                Second element
            </div>
        </template>
        <template #before-nav>
            <!--Image or svg of website logo-->
            <!-- <school-logo class="mr-3"></school-logo> -->
        </template>
        <template #after-nav>
            <!--Mobile Burger, buttons, etc-->
            <!-- <li class="vsm-mob-hide">
                <button>My Button</button>
            </li> -->
            <!--Set "display: block" for the .vsm-mob-show class to display content-->
            <vsm-mob>Mobile Content</vsm-mob>
        </template>
    </vsm-menu>
</template>

<script setup>
import SchoolLogo from '@components/SchoolLogo'
import { VsmMenu, VsmMob } from 'vue-stripe-menu'
import { ref } from 'vue'
import SearchBar from '@components/SearchBar'
import VueHeadline from '@components/VueHeadline'


// This is to prevent the component from getting reactive, wich can cause problems
const componentsMap = {
  comp1: SearchBar,
  comp2: VueHeadline,
  // ... 
}

const menu = ref([
    { title: 'Company', dropdown: 'company', component: 'comp1' },
    {
        title: 'News',
        dropdown: 'news',
        component: 'comp2',
        element: 'span',
        align: 'left',
        // attributes: {
        //     // I want more classes! No problem
        //     // string, array, object, not matter
        //     class: ['my-class1', { 'my-class2': true }],
        //     // Custom attributes
        //     'data-big': 'yes'
        // }
    },
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
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    opacity: 1;
    position: relative;
    z-index: 825;
    --vsm-border-radius: 20px;

    .vsm-background {
        // background: none;
    }

    .vsm-dropdown-content {
        background-color: white;
        border-radius: 20px;
    } 

    .vsm-nav {
        margin: 0 10px;
    }

    .vsm-link {
        color: hsl(0, 0%, 0%);
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