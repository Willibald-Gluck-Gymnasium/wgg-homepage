<template>
    <div>
        <Navigation />
        <slot></slot>
        
        <VueFooter />
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
}

@media print {
    * {
        color: black;
    }
    .contentwrapper {
        margin: 0;
        padding: 0;
        max-width: 100%;
        min-height: 0;
    }
}

html, body {
    overflow-x: hidden;
    background-color: hsl(0deg, 0%, 95%);
}

html {
    min-width: 320px;
}

body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    color: #000000;
}

.link {
    color: hsl(29deg, 100%, 55%);
    text-decoration: none;
    position: relative;

    &::after {
        transition: all 250ms;
        will-change: width;
        width: 0;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0em;
        height: 0.2em;
        background-color: hsl(29deg, 100%, 55%);
    }

    &:hover::after {
        width: 100%;
    }
}
</style>