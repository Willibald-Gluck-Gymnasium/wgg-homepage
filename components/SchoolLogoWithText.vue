<template>
    <div class="logo-container">
        <school-logo style="margin-right: 12px;"></school-logo>
        <div class="divider"></div>
        <div class="logo-text">WGG</div>
    </div>
</template>

<script setup>
import SchoolLogo from './SchoolLogo';
</script>

<style lang="scss" scoped>
.logo-container {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    
    .logo {
        height: 32px;
        margin-right: 12px;
    }

    .divider {
        width: 3px;
        background-color: #000;
        height: 40px;
        margin-right: 12px
    }

    .logo-text {
        font-size: 26px;
        font-family: 'Montserrat', sans-serif;
    }
}
</style>