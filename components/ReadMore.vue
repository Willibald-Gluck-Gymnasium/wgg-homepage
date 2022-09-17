<template>
    <div class="readmore">
        <div class="text">Weiterlesen:</div>
        <div class="links">
            <NuxtLink
                v-for="(link, i) in links"
                :key="i"
                :to="link.href"
            >
                <span class="category">{{ link.category }}</span>
                <span class="seperator">-</span>
                <span class="title">{{ link.title }}</span>
                <span class="seperator">-</span>
                <span class="timestamp">Vor einem Jahr</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>

export default {
data: () => ({
        links: [
            {
                href: '/smv',
                imgsrc: 'images/neuesschuljahr.jpg',
                category: 'Gemeinschaft',
                timestamp: 'Dec 2 2020 01:50:10 GMT+0100',
                title: 'Die SMV',
                preview: 'Klar, Lehrer organisieren den Schulablauf, richtig? Nicht ganz. Wir, die Schüler Mit Verantwortung (SMV) organisieren ...'
            },
            {
                href: '/schuelergenossenschaft',
                imgsrc: 'images/schuelergenossenschaft.jpg',
                category: 'Aktivitäten',
                timestamp: 'May 4 2016 1:40:32 GMT+0100',
                title: 'Die Schülergenossenschaft',
                preview: 'Unsere Schule hat eine Schülergenossenschaft gegründet und damit die erste in ganz Bayern. Aber was ist eine ...'
            },
            {
                href: '/schulleitung',
                imgsrc: 'images/schulbeginn.jpg',
                category: 'Gemeinschaft',
                timestamp: 'Feb 16 2021 4:50:12 GMT+0100',
                title: 'Die Schulleitung',
                preview: 'Das WGG als Schule muss natürlich auch eine Schulleitung haben. Wir stellen uns hier kurz vor und zeigen wofür wir so zuständig sind. ...'
            },
            {
                href: '/schulgarten',
                imgsrc: 'images/color4.jpg',
                category: 'Aktivitäten',
                timestamp: 'Apr 30 1994 2:30:24 GMT+0100',
                title: 'Die Schulgärtner',
                preview: 'Der Schulgarten des WGGs wächst langsam heran und mit ihm die Schulgärtner. Nun wird Nachwuchs gesucht. Der Schulgarten ist schon länger ...'
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
$clr-border: rgba(0,0,0,.3);
$clr-border-dark: rgba(255,255,255,.3);
div.readmore {
    // border-top: 1px solid var(--clr-font);
    // border: 1px solid var(--clr-bg-secondary);
    border-radius: 15px;
    // padding: 10px;
    // box-shadow: inset 0 0 15px rgba(0,0,0,0.1);
    // background: var(--clr-bg-secondary);
    // width: 100%;
    display: flex;
    margin-top: 15px;
    div.text {
        font-size: 20px;
        font-weight: bold;
        // margin: 5px;
        margin-right: 15px;
    }
    div.links {
        // background: var(--clr-bg-secondary);
        // box-shadow: inset 0 0 15px rgba(0,0,0,0.1);
        border: 1px solid $clr-border;   
        width: 100%;
        border-radius: 5px;
        // padding: 5px;
        font-size: 18px;
        overflow: hidden;
        a {
            transition-duration: .1s;
            display: block;
            text-decoration: none;
            width: 100%;
            padding: 5px 10px;
            border-bottom: 1px solid $clr-border;
            background: var(--clr-bg-secondary);
            &:last-child {
                border-bottom: none;
            }
            &:hover {
                background: none;
            }
            span.category {
                position: relative;
                color: var(--clr-wgg-orange);
            }
            span.seperator {
                margin: 0 10px;
                opacity: .5;
            }
            span.title {
                font-weight: 600;
                font-family: var(--fnt-title);
            }
            span.timestamp {
                opacity: .7;
            }
        }
    }
}
@media only screen and (max-width: 800px) {
    div.readmore {
        div.links {
            a {
                span {
                    display: block;
                }
                span.seperator {
                    display: none;
                }
            }
        }
    }
}
@media only screen and (max-width: 700px) {
    div.readmore {
        flex-direction: column;
        border-radius: 0;
        border: none;
        padding: 0 15px;
    }
}
@at-root .touchevents {
    div.readmore {
        div.links {
            a {
                &:hover {
                    background: var(--clr-bg-secondary);
                }
                &:active {
                    color: inherit;
                }
            }
        }
    }
}
#app.dark {
    div.links, div.links a {
        border-color: $clr-border-dark;
    }
}
@media (prefers-color-scheme: dark) {
    #app.detect-colorscheme {
        div.links, div.links a {
            border-color: $clr-border-dark;
        }
    }
}
@media print {
    div.readmore {
        display: none;
    }
}
</style>