export default defineNuxtRouteMiddleware((to, from) => {
    // skip on server
    if (process.server) return

    const authToken = localStorage.getItem('authtoken')

    if (typeof authToken !== 'string') {
        return navigateTo('/login')
    }
})