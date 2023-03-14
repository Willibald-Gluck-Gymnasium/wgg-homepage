<template>
<svg xmlns="http://www.w3.org/2000/svg" class="spinner" width="256" height="256" viewBox="0 0 256 256"><path class="a" d="M233,128A105,105,0,1,1,128,23"/></svg></template>

<style scoped>

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spinner {
    animation-name: spin;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.a {
    fill:none;
    stroke:inherit;
    stroke-miterlimit:10;
    stroke-width:29px;
}
</style>