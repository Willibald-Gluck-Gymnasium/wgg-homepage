<template >
    <vsm-menu
        :menu="menu"
        class="vsm-menu"
        element="header"
        handler="hover"
        align="center"
        ref="navigationMenu"
    >
        <template #default="{ item }">
            <!--Dropdown content of each menu item with a "dropdown" property-->
            <!--You can replace it with a separate component if each menu item has its own style-->
            <!--Necessarily need to have at least one element within the slot-->
            <!--An alternate background will be applied from the 2nd element-->
            <div>
                <component @closeNavMenu="closeNavMenu()" :is="componentsMap[item.component]" />
            </div>
            <!-- <div style="padding: 30px">
                Second element
            </div> -->
        </template>
        <template #before-nav>
             <NuxtLink to="/" style="flex-shrink: 0; color: inherit; text-decoration: inherit;">
                <school-logo-with-text class="mr-3" />
            </NuxtLink>
        </template>
        <template #after-nav>
            <SearchBar />
            <vsm-mob>Mobile Content</vsm-mob>
        </template>
    </vsm-menu>
</template>

<script setup>
import * as vueStripeMenu from 'vue-stripe-menu'

const { VsmMenu, VsmMob} = vueStripeMenu

// This is to prevent the component from getting reactive, wich can cause problems
const componentsMap = {
    NavigationUnterricht: resolveComponent('NavigationUnterricht'),
    NavigationFürEltern: resolveComponent('NavigationFürEltern'),
    NavigationSchulleben: resolveComponent('NavigationSchulleben')
  // ... 
}

const navigationMenu = ref(null)

const closeNavMenu = ref(() => {
    console.log("Not mounted yet")
})


onMounted(async () => {
    await nextTick()
    closeNavMenu.value = navigationMenu.value.closeDropdown
    setTimeout(() => {
        navigationMenu.value.closeDropdown = () => {}
    }, 1000)
})

const menu = [
    // { title: 'Aktuelles', dropdown: 'aktuelles', component: 'comp1' },
    { title: 'Schulleben', dropdown: 'schulleben', component: 'NavigationSchulleben' },
    { title: 'Unterricht', dropdown: 'unterricht', component: 'NavigationUnterricht' },
    { title: 'Für Eltern', dropdown: 'füreltern', component: 'NavigationFürEltern' }
]

</script>


<style lang="scss">
// @import "~vue-stripe-menu/src/scss/index";
@import 'vue-stripe-menu/dist/vue-stripe-menu.css';

.vsm-menu {
    color: black;
    background-color: white;
    border-bottom: 3px solid hsl(29,100%,55%);
    opacity: 1;
    position: relative;
    z-index: 800;
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