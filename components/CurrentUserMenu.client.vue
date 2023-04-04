<script setup>

let currentUserInfo = useLazyAsyncData(() => {})
if(typeof localStorage.getItem('authtoken') === 'string') {
    currentUserInfo = await useLazyFetch('/api/user/current/info', {
        server: false,
        headers: {
            authtoken: localStorage.getItem('authtoken')
        }
    })
}
</script>

<template>
    <div v-if="currentUserInfo.data.value?.data?.user.id" class="user-menu-container">
        <!-- {{ currentUserInfo.data.value?.data.user }} -->

        <div class="item no-hover">
            <IconsUser class="icon"/>
            <div class="text">Herzlich Willkommen, <b>{{ currentUserInfo.data.value.data.user.username }}</b>.</div>
        </div>

        <NuxtLink class="item" to="/kontrollzentrum">
            <IconsSchedule class="icon"/>
            <div class="text">Termine ändern</div>
        </NuxtLink>

        <NuxtLink class="item" to="/neuespasswort">
            <IconsKey class="icon"/>
            <div class="text">Passwort ändern</div>
        </NuxtLink>

        <NuxtLink class="item" to="/admin/user" v-if="currentUserInfo.data.value.data.user.superadmin">
            <IconsAdmin class="icon"/>
            <div class="text">Nutzerliste</div>
        </NuxtLink>

        <NuxtLink class="item" to="/admin/createUser" v-if="currentUserInfo.data.value.data.user.superadmin"> 
            <IconsAdmin class="icon"/>
            <div class="text">Neue Nutzer erstellen</div>
        </NuxtLink>

        <NuxtLink class="item" to="/logout">
            <IconsLogout class="icon"/>
            <div class="text">Abmelden</div>
        </NuxtLink>


    </div>
</template>

<style lang="scss" scoped>
.centered {
    margin: 0 auto;
    width: calc(100% - 20px);
    max-width: 1080px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}

.user-menu-container {
    @extend .centered;

    border-radius: 20px;
    box-shadow: 0 4px 20px 0 hsla(0, 0%, 0%, 0.08);
    background-image: url("~/assets/images/colorful-blur.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10px;
    gap: 10px;
    display: flex;
    flex-wrap: wrap;

    .item {
        padding: 10px;
        background-color: hsla(0, 0%, 100%, 0.4);
        border-radius: 10px;
        backdrop-filter: saturate(180%);
        transition: all 0.2s;
        display: flex;
        align-items: center;
        height: 45px;
        gap: 13px;
        grid-template-columns: min-content 1fr;
        text-decoration: none;
        color: inherit;

        &:hover {
            transform: scale(1.008);
            -webkit-backdrop-filter: saturate(300%);
            backdrop-filter: saturate(300%);
        }

        &.no-hover {
            &:hover {
                transform: scale(1);
                backdrop-filter: saturate(180%);
            }
        }

        .icon {
            // align-self: center;
            height: 25px;
            width: 25px;
        }
    }
}
</style>