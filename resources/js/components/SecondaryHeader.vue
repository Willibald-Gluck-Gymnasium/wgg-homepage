<template>
    <div class="header">
        <div id="rightfade"></div>
        <div id="leftfade"></div>
        <div id="scrollnav" v-on:scroll="updateFading()" class="content">
            <div class="items">
                <a class="item" href="/collection/aktuelles">Aktuelles</a>
                <a class="item" href="/collection/gemeinschaft">Gemeinschaft</a>
                <a class="item" href="/collection/unterricht">Unterricht</a>
                <a class="item" href="/collection/termine">Termine</a>
                <a class="item" href="/collection/aktivitäten">Aktivitäten</a>
                <a class="item" href="/collection/service">Service</a>
                <a class="item" href="/collection/partner">Netzwerk</a>
                <a class="item" href="/collection/partner">Partner</a>
                <a class="item" href="/collection/kontakt">Kontakt</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    // data() {
    //     return {
    //         rightfade: null,
    //         leftfade: null
    //     }
    // },
    methods: {
        updateFading: function () {
            if (scrollnav.scrollLeft >= 10) {
                leftfade.classList.add("show");
            } else {
                leftfade.classList.remove("show");
            }

            var maxScrollLeft = scrollnav.scrollWidth - scrollnav.clientWidth;
            if (scrollnav.scrollLeft <= (maxScrollLeft-10)) {
                rightfade.classList.add("show");
            } else {
                rightfade.classList.remove("show");
            }
        }
    },
    mounted: function(){
        this.updateFading();
    }
}
</script>

<style lang="scss" scoped>
    #app.dark {
        .header {
            background-color: var(--clr-bg-primary);
        }
    }
    @media (prefers-color-scheme: dark) {
        #app.detect-colorscheme {
            .header {
                background-color: var(--clr-bg-primary) !important;
            }
        }
    }
    .header {
        color: var(--clr-font);
        height: var(--sz-header-height);
        background-color: var(--clr-wgg-orange);
        box-shadow: 0 -7px 20px 5px rgba(0,0,0,0.3);
        position: relative;
        z-index: 10;
        transition-duration: .25s;
        overflow: hidden;
        #rightfade, #leftfade {
            opacity: 0;
            top: 0;
            z-index: 100000;
            // background-color: var(--clr-wgg-orange);
            width: 5px;
            height: 100%;
            position: absolute;
            pointer-events: none;
            transition-duration: .5s;
        }
        #leftfade {
            box-shadow: -20px 0px 28px 20px black;
            left: -5px;
            // &:after {
            //     pointer-events: none;
            //     z-index: 100;
            //     background: rgba(0,0,0,0);
            //     position: absolute;
            //     content: '';
            //     left: 5px;
            //     width: 55px;
            //     top: 10%;
            //     height: 80%;
            //     border-radius: 5px;
            //     box-shadow: inset 10px 0px 10px -12px #000000;
            // }
        }
        #rightfade {
            box-shadow: 20px 0px 28px 20px black;
            right: -5px;
            // &:before {
            //     pointer-events: none;
            //     z-index: 100;
            //     background: rgba(0,0,0,0);
            //     position: absolute;
            //     content: '';
            //     right: 5px;
            //     width: 55px;
            //     top: 10%;
            //     height: 80%;
            //     border-radius: 5px;
            //     box-shadow: inset -10px 0px 10px -12px #000000;
            // }
        }
        .content {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            z-index: 1000;
            position: relative;
	        max-width: var(--sz-content-width);
            padding: 0 15px;
            top: 0;

            .items {
                z-index: 1000;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                height: 100%;
                .item {
                    color: var(--clr-font);
                    position: relative;
                    text-decoration: none;
                    margin-right: 25px;

                    &:last-of-type {
                        margin-right: 0;
                    }

                    &::before {
                        content: "";
                        margin: 0 auto;
                        position: absolute;
                        left: -2px;
                        right: -2px;
                        bottom: -3px;
                        height: 2px;
                        width: 0;
                        background-color: var(--clr-font);
                        transition: width 0.2s ease-in-out;
                    }

                    &:hover::before {
                        width: calc(100% + 4px);
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 850px) {
        .header {
            // position: fixed !important;
            // position: absolute !important;
            position: relative;
            // box-shadow: none;
            z-index: 10;
            width: 100%;
            // &.leftshadow {
            //     box-shadow: inset 20px 0px 15px -18px #000;//, 0 -7px 10px 5px black;
            // }
            // &.rightshadow {
            //     box-shadow: inset -20px 0px 15px -18px #000;//, 0 -7px 10px 5px black;
            // }
            // &.rightshadow.leftshadow {
            //     box-shadow: inset -20px 0px 15px -18px #000, inset 20px 0px 15px -18px #000;//, 0 -7px 10px 5px black;
            // }
            #rightfade.show, #leftfade.show {
                opacity: 1;
            }
            .content {
                // margin: 0 25px;
                overflow-x: scroll;
                .items {
                    width: max-content !important;
                    .item {
                        margin-right: 25px !important;
                    }
                }
                @at-root .touchevents .item {
                    &::before {
                        display:none;
                    }
                }
            }
        }
    }
    @media print {
        .header {
            display: none;
        }
    }
</style>