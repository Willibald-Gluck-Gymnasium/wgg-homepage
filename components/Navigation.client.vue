<template>
    <header class="navbar">
        <div class="content">
            <NuxtLink class="logo-link logo-with-text" to="/">
                <school-logo-with-text class="" />
            </NuxtLink>

            <NuxtLink class="logo-link logo-small" to="/">
                <school-logo />
            </NuxtLink>

            <SearchBar class="searchbar"/>

            <vsm-menu
                :menu="menu"
                class="vsm-menu"
                element="header"
                handler="hover"
                align="center"
                ref="navigationMenu"
            >
                <template #default="{ item }">
                    <div>
                        <component @closeNavMenu="closeNavMenu()" :is="componentsMap[item.component]" />
                    </div>
                </template>
            </vsm-menu>
        </div>
        

    </header>
    
</template>

<script setup>
import * as vueStripeMenu from 'vue-stripe-menu'
import 'vue-stripe-menu/dist/vue-stripe-menu.css'

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
    navigationMenu.value.closeDropdown = () => {}
})

const menu = [
    // { title: 'Aktuelles', dropdown: 'aktuelles', component: 'comp1' },
    { title: 'Schulleben', dropdown: 'schulleben', component: 'NavigationSchulleben' },
    { title: 'Unterricht', dropdown: 'unterricht', component: 'NavigationUnterricht' },
    { title: 'Für Eltern', dropdown: 'füreltern', component: 'NavigationFürEltern' }
]

</script>


<style lang="scss" scoped>
// @import "~vue-stripe-menu/src/scss/index";

$oneRowBreakPoint: 800px;

.navbar {
    color: black;
    background-color: white;
    border-bottom: 3px solid hsl(29,100%,55%);

    .content {
        margin: 0 auto;
        width: calc(100% - 20px);
        max-width: 1080px;
        display: grid;
        grid-template-rows: 67px 67px;
        grid-template-columns: min-content auto;
        align-items: center;
        column-gap: 20px;
        min-height: 67px;

        @media (min-width: $oneRowBreakPoint) {
            display: flex;
            justify-content: space-between;
        }

        .logo-link {
            grid-column: 1;
            color: inherit; 
            text-decoration: inherit;
            display: block;
            height: min-content;

            &.logo-with-text {
                display: none;

                @media (min-width: 500px) {
                    display: initial;
                }
            }

            &.logo-small {
                @media (min-width: 500px) {
                    display: none;
                }
            }

            svg {
                height: 100%;
            }
        }

        .searchbar { 
            justify-self: end;
            grid-column: 2;

            @media (min-width: $oneRowBreakPoint) {
                order: 3;
            }
        }

        .vsm-menu {
            grid-column: 1 / span 2;
            opacity: 1;
            z-index: 800;
            height: 100%;
            


            :deep() {
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
                }

                .vsm-root {
                    height: 100%;
                }

                .vsm-link-container {
                    display: flex;
                    flex: 1 1 auto;
                    justify-content: space-around;
                    column-gap: 30px;


                    @media (min-width: 500px) {
                        justify-content: center;
                    }

                    .vsm-link {
                        padding: 0 ;
                        color: inherit;
                    }
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

            :deep(.container) {
                box-sizing: content-box;
                min-width: none;
                padding: 25px;
                padding-bottom: 0;
                display: inline-flex;
                flex-direction: column;
                align-items: flex-start;
                align-content: flex-start;
                justify-content: flex-start;
                column-gap: 25px;
                flex-wrap: nowrap;
                max-height: fit-content;
                padding-right: 25px;
                width: auto;

                @media (min-width: 770px) {
                    flex-wrap: wrap;
                    max-height: 500px;
                    padding-right: 0;
                }
            }
        }
    }

}
</style>