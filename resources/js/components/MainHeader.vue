<template>
    <div class="header">
        <div class="content">
            <a href="/" class="logo-wrapper">
                <img class="logo" src="/img/wgg-logo.svg" alt="">
                <div class="divider"></div>
                <div class="logo-text">WGG</div>
            </a>
            <search-bar></search-bar>
        </div>
    </div>
</template>

<script>
export default {

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
    z-index: 10000;
    box-shadow: 0 -7px 15px 5px rgba(0,0,0,0.3);
    .content {
        // padding-left: 15px;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        max-width: var(--sz-content-width);
        display: flex;
        // justify-content: center;
        align-items: center;
        .logo-wrapper {
            // margin-right: auto;
            display: flex;
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
                margin-right: 12px;
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
@media only screen and (max-width: 1100px) {
    .logo-wrapper {
        margin-left: 15px;
    }
}

@media print {
    .header {
        box-shadow: none;
        border-bottom: 1px solid black;
    }
}
</style>