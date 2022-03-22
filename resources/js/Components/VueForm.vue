<template>
    <form class="vue-form">
        <slot/>
    </form>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$border-color: rgb(170,170,170);
$shadow-color: rgb(220,220,220);
$border-color-dark: rgb(200,200,200);
$shadow-color-dark: rgb(120,120,120);

form.vue-form {
    position: relative;
    section {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        margin-top: 10px;
        field {
            position: relative;
            display: block;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
            &.fill {
                flex: 1 0 auto;
                input, select, button {
                    width: 100%;
                }
            }
            input, select, button, label {
                display: block;
                color: var(--clr-font) !important;
                font-size: 15px !important;
            }
            label {
                position: absolute;
                top: 0;
                left: 0;
            }
            select, button, input:not([type="range"],[type="radio"],[type="checkbox"]), textarea {
                background: var(--clr-bg-primary);
                background-image: none !important;
                padding: 5px !important;
                appearance: none !important;
                position: relative;
                box-sizing: border-box !important;
                margin-top: 25px;
                border: 1px solid $border-color !important;
                border-radius: 5px !important;
                &:hover {
                    box-shadow: 0 0 0 3px $shadow-color;
                }
                @at-root #app.dark & {
                    background: var(--clr-bg-secondary) !important;
                    &:hover {
                        box-shadow: 0 0 0 3px $shadow-color-dark;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    @at-root #app.detect-colorscheme & {
                        background: var(--clr-bg-secondary) !important;
                        &:hover {
                            box-shadow: 0 0 0 3px $shadow-color-dark;
                        }
                    }
                }
                &:focus {
                    border-color: var(--clr-wgg-orange) !important;
                    box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter) !important;
                }
            }
            textarea {
                width: 100% !important;
            }
            [type="color"] {
                height: 37px;
                width: 37px;
                i {
                    font-size: 15px;
                    text-align: center;
                    margin: 0 auto;
                    padding: 0;
                    width: 100%; height: 100%; line-height: 100%; 
                }
            }
            [type="range"] {
                margin-top: 25px;
                height: calc(100% - 25px);
                // appearance: none !important;
                // height: 37px;
                background: var(--clr-bg-primary) !important;
                // background-image: none !important;
                padding: 5px !important;
                appearance: none !important;
                position: relative;
                box-sizing: border-box !important;
                border: 1px solid $border-color !important;
                border-radius: 5px !important;
                &:active {
                    cursor: grabbing;
                }
                &::-moz-range-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 15px;
                    border: 1px solid $border-color;
                    background: var(--clr-bg-primary);
                    cursor: grab;
                }
                &::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 15px;
                    border: 1px solid $border-color;
                    background: var(--clr-bg-primary);
                    cursor: grab;
                    transform: translateY(-30%);
                }
                &::-ms-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 15px;
                    border: 1px solid $border-color;
                    background: var(--clr-bg-primary);
                    cursor: grab;
                }
                &::-moz-range-track {
                    appearance: none;
                    width: calc(100% - 20px);
                    height: 10px;
                    border: 1px solid $border-color !important;
                    border-radius: 5px !important;
                    background: var(--clr-bg-secondary);
                }
                &::-webkit-slider-runnable-track {
                    appearance: none;
                    width: calc(100% - 20px);
                    height: 10px;
                    border: 1px solid $border-color !important;
                    border-radius: 5px !important;
                    background: var(--clr-bg-secondary);
                }
                &::-ms-track {
                    appearance: none;
                    width: calc(100% - 20px);
                    height: 10px;
                    border: 1px solid $border-color !important;
                    border-radius: 5px !important;
                    background: var(--clr-bg-secondary);
                }
                &:hover {
                    &::-moz-range-thumb {
                        box-shadow: 0 0 0 3px $shadow-color;
                    }
                    &::-webkit-slider-thumb {
                        box-shadow: 0 0 0 3px $shadow-color;
                    }
                    &::-ms-thumb {
                        box-shadow: 0 0 0 3px $shadow-color;
                    }
                    &:focus {
                        &::-moz-range-thumb {
                            border-color: var(--clr-wgg-orange);
                            box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                        }
                        &::-webkit-slider-thumb {
                            border-color: var(--clr-wgg-orange);
                            box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                        }
                        &::-ms-thumb {
                            border-color: var(--clr-wgg-orange);
                            box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                        }   
                    }
                }
                @at-root #app.dark & {
                    background: var(--clr-bg-secondary) !important;
                    box-shadow: none !important;
                    &::-moz-range-thumb {
                        border-color: $border-color-dark;
                    }
                    &::-webkit-slider-thumb {
                        border-color: $border-color-dark;
                    }
                    &::-ms-thumb {
                        border-color: $border-color-dark;
                    }
                    &::-moz-range-track {
                        border-color: $border-color-dark;
                        background-color: var(--clr-bg-primary);
                    }
                    &::-webkit-slider-runnable-track {
                        border-color: $border-color-dark;
                        background-color: var(--clr-bg-primary);
                    }
                    &::-ms-track {
                        border-color: $border-color-dark;
                        background-color: var(--clr-bg-primary);
                    }
                    &:hover {
                        box-shadow: 0 0 0 3px $shadow-color-dark;
                        &::-moz-range-thumb {
                            box-shadow: 0 0 0 3px $shadow-color-dark;
                        }
                        &::-webkit-slider-thumb {
                            box-shadow: 0 0 0 3px $shadow-color-dark;
                        }
                        &::-ms-thumb {
                            box-shadow: 0 0 0 3px $shadow-color-dark;
                        }
                        &:focus {
                            &::-moz-range-thumb {
                                border-color: var(--clr-wgg-orange);
                                box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                            }
                            &::-webkit-slider-thumb {
                                border-color: var(--clr-wgg-orange);
                                box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                            }
                            &::-ms-thumb {
                                border-color: var(--clr-wgg-orange);
                                box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                            }   
                        }
                    }
                }
                @media (prefers-color-scheme: dark) {
                    #app.detect-colorscheme {
                        background: var(--clr-bg-secondary) !important;
                        box-shadow: none !important;
                        &::-moz-range-thumb {
                            border-color: $border-color-dark;
                        }
                        &::-webkit-slider-thumb {
                            border-color: $border-color-dark;
                        }
                        &::-ms-thumb {
                            border-color: $border-color-dark;
                        }
                        &::-moz-range-track {
                            border-color: $border-color-dark;
                            background-color: var(--clr-bg-primary);
                        }
                        &::-webkit-slider-runnable-track {
                            border-color: $border-color-dark;
                            background-color: var(--clr-bg-primary);
                        }
                        &::-ms-track {
                            border-color: $border-color-dark;
                            background-color: var(--clr-bg-primary);
                        }
                        &:hover {
                            box-shadow: 0 0 0 3px $shadow-color-dark;
                            &::-moz-range-thumb {
                                box-shadow: 0 0 0 3px $shadow-color-dark;
                            }
                            &::-webkit-slider-thumb {
                                box-shadow: 0 0 0 3px $shadow-color-dark;
                            }
                            &::-ms-thumb {
                                box-shadow: 0 0 0 3px $shadow-color-dark;
                            }
                            &:focus {
                                &::-moz-range-thumb {
                                    border-color: var(--clr-wgg-orange);
                                    box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                                }
                                &::-webkit-slider-thumb {
                                    border-color: var(--clr-wgg-orange);
                                    box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                                }
                                &::-ms-thumb {
                                    border-color: var(--clr-wgg-orange);
                                    box-shadow: 0 0 0 3px var(--clr-wgg-orange-lighter);
                                }   
                            }
                        }
                    }
                }
            }
            [type="checkbox"], [type="radio"] {
                appearance: none !important;
                height: 37px;
                width: 37px;
                background: var(--clr-bg-primary);
                // background-image: none !important;
                padding: 5px !important;
                appearance: none !important;
                position: relative;
                box-sizing: border-box !important;
                margin-top: 25px;
                border: 1px solid $border-color !important;
                cursor: pointer;
                &:not([type="radio"]) {
                    border-radius: 5px;
                }
                // border-radius: 5px !important;
                box-shadow: inset 0 0 0 10px var(--clr-bg-primary), inset 0 0 0 11px $border-color;
                &:hover {
                    box-shadow: inset 0 0 0 10px var(--clr-bg-primary), inset 0 0 0 11px $border-color, 0 0 0 3px $shadow-color;
                }
                @at-root #app.dark & {
                    background: var(--clr-bg-secondary) !important;
                    &:hover {
                        box-shadow: inset 0 0 0 10px var(--clr-bg-primary), inset 0 0 0 11px $border-color, 0 0 0 3px $shadow-color-dark;
                    }
                    &:checked {
                        background-color: var(--clr-wgg-orange) !important;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    @at-root #app.detect-colorscheme & {
                        background: var(--clr-bg-secondary) !important;
                        &:hover {
                            box-shadow: inset 0 0 0 10px var(--clr-bg-primary), inset 0 0 0 11px $border-color, 0 0 0 3px $shadow-color-dark;
                        }
                        &:checked {
                            background-color: var(--clr-wgg-orange) !important;
                        }
                    }
                }
                &:focus {
                    border-color: var(--clr-wgg-orange) !important;
                    box-shadow: inset 0 0 0 10px var(--clr-bg-primary), inset 0 0 0 11px $border-color, 0 0 0 3px var(--clr-wgg-orange-lighter) !important;
                }
                &:checked {
                    background: var(--clr-wgg-orange) !important;
                }
            }
            input[type="submit"], input[type="button"], input[type="reset"], button  {
                height: 37px;
                cursor: pointer;
            }
        }
    }
}
@media only screen and (max-width: 700px) {
    form.vue-form {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }
}
</style>