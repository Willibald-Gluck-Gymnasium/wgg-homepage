<script setup>
import * as vueStripeMenu from 'vue-stripe-menu'
// import 'vue-stripe-menu/dist/vue-stripe-menu.css'

const { VsmMenu } = vueStripeMenu

// This is to prevent the component from getting reactive, wich can cause problems
const componentsMap = {
    NavigationFächer: resolveComponent('NavigationFächer'),
    NavigationFürEltern: resolveComponent('NavigationFürEltern'),
    NavigationSchule: resolveComponent("NavigationSchule"),
    //NavigationSchulleben: resolveComponent('NavigationSchulleben'),
    NavigationGemeinschaft: resolveComponent('NavigationGemeinschaft'),
    NavigationProfil: resolveComponent('NavigationProfil')
    // ... 
}

const navigationMenu = ref(null)

const searchbar = ref(null)

const closeNavMenu = ref(() => {
    console.log("Not mounted yet")
})


onMounted(async () => {
    await nextTick()
    closeNavMenu.value = navigationMenu.value.closeDropdown
    // navigationMenu.value.closeDropdown = () => {}
})

const menu = [
    // { title: 'Aktuelles', dropdown: 'aktuelles', component: 'comp1' },
    { title: 'Gemeinschaft', dropdown: 'gemeinschaft', component: 'NavigationGemeinschaft' },
    { title: 'Profil', dropdown: 'profil', component: 'NavigationProfil' },
    //{ title: 'Schulleben', dropdown: 'schulleben', component: 'NavigationSchulleben' },
    //{ title: "Schule", dropdown: "schule", component: "NavigationSchule" },
    { title: 'Für Eltern', dropdown: 'füreltern', component: 'NavigationFürEltern' },
    { title: 'Fächer', dropdown: 'fächer', component: 'NavigationFächer' }
]



</script>

<template>
    <header class="main-header-bar">
        <div class="tel">
            <div class = "left"></div>
            <div class="right">
                <a href="tel:+4991814720"> &#9742; +49 (0) 9181-472-0</a> &nbsp;&nbsp;&nbsp;
                <a href="mailto:verwaltung@wgg-neumarkt.de"> &#128231;verwaltung@wgg-neumarkt.de</a>
            </div>
        </div>
        <div class="content">
        
            <NuxtLink class="logo-link logo-with-text" to="/">
                <school-logo-with-text class="" />
            </NuxtLink>

            <NuxtLink v-if="!searchbar?.showResults" class="logo-link logo-small" to="/">
                <school-logo />
            </NuxtLink>

            <SearchBar ref="searchbar" :class="{ 'searchbar': true, 'searchbar--showResults': searchbar?.showResults }" />

            <!-- {{ searchbar }} -->

            <client-only>

                <vsm-menu :menu="menu" class="vsm-menu" element="div" handler="hover" align="center" ref="navigationMenu">
                    <template #default="{ item }">
                        <div class="menu-item">
                            <component @closeNavMenu="closeNavMenu()" :is="componentsMap[item.component]" />
                        </div>
                    </template>
                </vsm-menu>

                <template #placeholder>
                    <nav class="vsm-menu">
                        <ul class="vsm-root">
                            <li class="vsm-link-container vsm-mob-hide">
                                <button class="vsm-link" v-for="menuItem in menu">
                                    <span>{{ menuItem.title }}</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </template>

            </client-only>

        </div>
    </header>
</template>

<style lang="scss">
.main-header-bar {
    color: black;
    background-color: white;
    border-bottom: 3px solid hsl(29, 100%, 55%);
    border-top: 3px solid hsl(29, 100%, 55%);
    display: grid;
    grid-template-rows: auto 1fr; /* First row for .tel, second row for content */
    grid-template-columns: 1fr; /* Single column layout */

    $oneRowBreakPoint: 800px;
    $smallLogoBreakPoint: 500px;

    .tel {
        margin: 0 auto;
        width: calc(100% - 20px);
        max-width: 1080px;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 2px;
        font-size: 10pt;

        .left {
            float: left;
        }

        .right {
            float: right;
        }

        a {
            text-decoration: none;
            color: black;
        }

    }

    .content {
        margin: 0 auto;
        width: calc(100% - 20px);
        max-width: 1080px;
        display: grid;
        grid-template-rows: 67px 54px;
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

                @media (min-width: $smallLogoBreakPoint) {
                    display: initial;
                }
            }

            &.logo-small {
                @media (min-width: $smallLogoBreakPoint) {
                    display: none;
                }
            }

            svg {
                height: 100%;
            }
        }

        .searchbar {
            justify-self: end;
            grid-column: 2 / span 1;
            width: 40%;

            &.searchbar--showResults {
                grid-column: 1 / span 2;

                @media (min-width: $smallLogoBreakPoint) {
                    grid-column: 2;
                }
            }

            @media (min-width: $oneRowBreakPoint) {
                order: 3;
            }
        }

        .vsm-menu {
            grid-column: 1 / span 2;
            opacity: 1;
            z-index: 800;
            height: 100%;
        }
    }

}
</style>

<style lang="scss">
@import "vue-stripe-menu/src/scss/index.scss";

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
    justify-content: center;


    .vsm-link {
        width: 50%;
        max-width: 150px;
        padding: 0;
        color: inherit;

        @media (min-width: 800px) {
            width: min-content;
            padding: 0 15px;
            max-width: unset;

            &:first-of-type {
                padding-left: 0;
            }

            &:last-of-type {
                padding-right: 0;
            }
        }
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
    column-gap: 25px;
    flex-wrap: nowrap;
    max-height: fit-content;
    padding-right: 25px;
    width: auto;

    @media (min-width: 770px) {
        flex-wrap: wrap;
        max-height: 470px;
        padding-right: 0;
    }
}
</style>