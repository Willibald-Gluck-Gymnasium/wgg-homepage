<template>
    <div class="container">
        <form action="/results" class="search" autocomplete="off">
            <input type="text" name="q">
            <div id="results">
                <Link v-for="(result, i) in results"
                    :key="i"
                    :href="result.href"
                >{{ result.title }}</Link>
            </div>
            <button id="submit">
                <i class='material-icons'>search</i>
            </button>
        </form>
        <a class="unfocus" href="#">
        </a>
    </div>
</template>

<script>
import { Link} from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link
    },
    data: () => ({
        results: [
            {
                href: '/example',
                title: 'Example Web Page'
            },
            {
                href: '/smv',
                title: 'Die SMV'
            },
            {
                href: '/schuelergenossenschaft',
                title: 'Die Schülergenossenschaft'
            },
            {
                href: '/schulleitung',
                title: 'Die Schulleitung'
            },
            {
                href: '/schulgarten',
                title: 'Die Schulgärtner'
            }
        ]
    })
}

</script>

<style lang="scss" scoped>
$height: 35px;

div.container {
    max-width: 500px;
    // width: 100%;
    margin-left: auto;
    flex: 1 1 auto;
    height: $height;
}

a.unfocus {
    display: none;
    position: fixed;
    top: 0; left: 0;
    background: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    transition-duration: .2s;
}

.search {
    height: $height;
    width: 100%;
    z-index: 950;
    display: flex;
    position: relative;
    &:focus-within {
        input[type=text] {
            background: hsl(0,0%, 20%);
            // border: 3px solid hsl(0,0%,18%);
            outline: none;
            border-bottom-left-radius: 0;
        }
        #results {
            max-height: 300vh;
            border-top-left-radius: 0;
        }
        & + a.unfocus {
            display: block;
        }
    }
    // flex-direction: row-reverse;
    // padding-left: 15px;
    input[type=text] {
        z-index: 2;
        background: hsl(0, 0%, 14%);
        border: none;
        flex: 1 1 auto;
        border-radius: 0;
        margin: 0;
        padding: 0;
        padding-left: 12px;
        width: 10px;
        color: white;
        font-size: 20px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.6);
        transition-duration: .25s;
        &:hover {
            background: hsl(0, 0%, 18%);
        }
    }
    button {
        z-index: 3;
        transition-duration: .1s;
        // width: calc(.5 * var(--sz-header-height));
        width: $height;
        background: hsl(0, 0%, 14%);
        border: none;
        padding: 0;
        margin: 0;
        border-radius: 0;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        cursor: pointer;
        i {
            // width: calc(.5 * var(--sz-header-height));
            // line-height: calc(.5 * var(--sz-header-height));
            width: $height; line-height: $height;
            color: white;
        }
        &:hover {
            background: hsl(0, 0%, 18%);
        }
        &:active {
            background: hsl(0,0%, 20%);
        }
    }
    #results {
        // display: none;
        max-height: 0;
        overflow: hidden;
        position: absolute;
        // transform: translateY(-100%);
        top: $height;
        left: 0;
        width: calc(100% - 35px);
        // padding: 10px;
        background: hsl(0, 0%, 14%);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 0 15px 0 rgba(0,0,0,.6);
        z-index: 1;
        transition-duration: .25s;
        font-size: 16px;
        a {
            display: block;
            padding: 10px 12px;
            color: inherit;
            text-decoration: none;
            // &:first-child {
            //     margin-top: 0;
            // }
            &:hover, &:focus { 
                background: hsl(0, 0%, 18%);
                box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
            }
            &:focus {
                box-shadow: inset 0 0 0 5px white;
            }
            &:active {
                background: hsl(0,0%, 20%);
            }
            @at-root .touchevents #results a {
                // border-bottom: 1px solid rgba(255,255,255,.1);
                border-top: 1px solid rgba(255,255,255,.1);
                &:hover { 
                    background: none;
                    box-shadow: none;
                }
                &:active {
                    background: none;
                }
            }
        }
    }
}
@media only screen and (max-width: 850px) {
    .search {
        // height: calc(.7 * var(--sz-header-height));
        button {
            // width: calc(.7 * var(--sz-header-height));
            background: hsl(0, 0%, 18%);
            // i {
            //     // width: calc(.7 * var(--sz-header-height));
            //     // line-height: calc(.7 * var(--sz-header-height));
            // }
        }
    }
}

@media only screen and (max-width: 1100px) {
    .container {
        margin-right: 15px;
    }
}

@media print {
    .container {
        display: none;
    }
}
</style>