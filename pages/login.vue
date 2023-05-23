<script setup>
useHead({
    title: 'Login'
})

onMounted(async () => {
    await nextTick()
    if (process.client) {
        const authToken = localStorage.getItem('authtoken')
        if (typeof authToken === 'string') {
            navigateTo('/')
        }
    }
})

</script>

<template>
    <NuxtLayout>
        <LoginForm @success="navigateTo('/')"/>
    </NuxtLayout>
</template>

<style lang="scss" scoped>

</style>