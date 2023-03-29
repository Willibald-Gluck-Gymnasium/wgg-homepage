<script setup>

useHead({
    title: 'Passwort ändern'
})
</script>

<template>
<NuxtLayout>
    <CurrentUserMenu style="margin-top: 20px; margin-bottom: 30px;"/>

    <h1>Passwort ändern</h1>    

    <div class="information">Passwort wurde erfolgreich geändert! <NuxtLink class="link" to="/">Zurück zur Startseite</NuxtLink>.</div>

</NuxtLayout>    
</template>

<style scoped lang="scss">
.centered {
    margin: 0 auto;
    width: calc(100% - 20px);
    max-width: 1080px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}

.information {
    @extend .centered;
    margin: 20px auto;
}

h1, .logout {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 0 auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}

h3 {
    @extend .centered;
}

.logout {
    display: block;
    color: hsl(0, 100%, 50%);
    // text-decoration: none; 
    margin-top: 1rem;
    font-weight: bold;
}
h1 {
    font-weight: 700;
    margin: 0.3em auto 0.3em;
}


</style>