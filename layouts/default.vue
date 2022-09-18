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
</style>