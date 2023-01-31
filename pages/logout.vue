<script setup>
useHead({
    title: 'Abmelden'
})

if (process.client) {
    localStorage.removeItem('authtoken')
}

onMounted(async () => {
    await nextTick()
    navigateTo('/')
})

</script>

<template>
    <NuxtLayout>
        <h1>Sie werden abgemeldet...</h1>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
h1 {
    max-width: 1080px;
    width: calc(100% - 20px);
    margin: 50px auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}
</style>