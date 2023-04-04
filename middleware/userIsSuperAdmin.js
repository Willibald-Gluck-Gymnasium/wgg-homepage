export default defineNuxtRouteMiddleware(async (to, from) => {
    // skip on server
    if (process.server) return

    const authToken = localStorage.getItem('authtoken')

    if (typeof authToken !== 'string') {
        return navigateTo('/login')
    }

    const isSuperAdminRequest = await $fetch('/api/isSuperAdmin', {
        headers: {
            authtoken: localStorage.getItem('authtoken')
        },
    })

    if (isSuperAdminRequest.data.superadmin !== true) {
        return navigateTo('/login')
    }
})