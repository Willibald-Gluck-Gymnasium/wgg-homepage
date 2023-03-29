export default defineEventHandler(async (event) => {

    try {
        // Auth
        if (event.context.auth?.user === undefined) {
            throw new Error("You're not logged in")
        }

        let isSuperadmin = false

        if (event.context.auth.user.superadmin === 1) {
            isSuperadmin = true
        }

        return {
            status: "success",
            data: {
                user: {
                    id: event.context.auth.user.id,
                    username: event.context.auth.user.username,
                    superadmin: isSuperadmin
                }
            }
        }
        
    } catch (error) {
        return {
            status: "error",
            message: `${error.name}: ${error.message}`,
        }
    }
});