<template>
    <div class="header">
        <div class="content">
            <Link :href="route('home')" class="logo-wrapper">
                <school-logo class="mr-3"></school-logo>
                <div class="divider mr-3"></div>
                <div class="logo-text">WGG</div>
            </Link>
            <search-bar></search-bar>
        </div>
    </div>
</template>

<script>
import SearchBar from '@components/SearchBar'
import SchoolLogo from '@components/SchoolLogo'

import { Link } from '@inertiajs/inertia-vue3'

export default {

    components: {
        SearchBar,
        SchoolLogo,
        Link
    }

}
</script>

<style lang="scss" scoped>

.header {
    // position: absolute;
    // left: 0;
    // top: 0;
    // right: 0;
    height: var(--sz-header-height);
    background-color: #000;
    color: #FFF;
    position: relative;
    z-index: 900;
    box-shadow: 0 -7px 15px 5px rgba(0,0,0,0.3);

    .content {
        margin: 0 auto;
        height: 100%;
        width: calc(100% - 20px);
        max-width: 1080px;
        display: flex;
        align-items: center;

        .logo-wrapper {
            // margin-right: auto;
            display: flex;
            flex-shrink: 0;
            align-items: center;
            color: inherit;
            text-decoration: none;
            margin-right: 15px;
            .logo {
                height: 32px;
                margin-right: 12px;
            }

            .divider {
                width: 3px;
                background-color: #FFF;
                height: 40px;
            }

            .logo-text {
                font-size: 26px;
                font-family: 'Montserrat', sans-serif;
            }

            @media only screen and (max-width: 500px) {
                .divider, .logo-text {
                    display: none;
                }
                .logo {
                    margin-right: 0;
                }
            }
        }
    }
}


@media print {
    .header {
        box-shadow: none;
        border-bottom: 1px solid black;
    }
}
</style>