<script setup>

useHead({
    title: 'Benutzer erstellen'
})

definePageMeta({
    middleware: ["user-is-super-admin"]
})

const newUser = ref({
    username: '',
    superadmin: false
})

const createdUser = ref([])

const saveUserAPICall = await useLazyAsyncData(
    () => $fetch('/api/createUser', {
        method: 'POST',
        headers: {
            authtoken: process.client && localStorage.getItem('authtoken')
        },
        body: {
            user: {
                username: newUser.value.username,
                superadmin: newUser.value.superadmin,
            }
        },
        onResponse({ request, response, options }) {
            if (response._data.status === 'success') {
                const currentUser = {
                    username: newUser.value.username,
                    superadmin: newUser.value.superadmin,
                    password: response._data.data.password
                }
                createdUser.value.push(currentUser)
            }
        },
    }),
    {
        immediate: false,
        server: false,
    }
)
saveUserAPICall.pending.value = false


</script>

<template>
<NuxtLayout>
    <CurrentUserMenu style="margin-top: 20px; margin-bottom: 30px;"/>

    <h1>Benutzer erstellen</h1>    

    <form class="newUserForm" style="margin-top: 20px" @submit.prevent="saveUserAPICall.execute()">
        <div class="input-group">
            <label for="username">Nutzername</label>
            <input placeholder="Nutzername" class="textinput" type="text" id="username" v-model="newUser.username">
        </div>
        <div class="input-group">
            <label for="superadmin">Superadmin</label>
            <input type="checkbox" id="superadmin" v-model="newUser.superadmin">
        </div>
        <Button class="submitbutton" type="submit" ref="button" :loading="saveUserAPICall.pending.value">Speichern</Button>

    </form>

    <div class="information" v-if="newUser.superadmin"><b>Achtung:</b> Superadmins können andere Superadmins erstellen. Diese Rolle ist <b>nur für Website-Administratoren</b>, NICHT für Benutzer, inklusive Lehrer.</div>


    <h3>Erstellte Benutzer:</h3>

    <table class="newusers" v-if="createdUser.length > 0">
        <tr>
            <th>Nutzername</th>
            <th>Superadmin</th>
            <th>Vorläufiges Passwort</th>
        </tr>
        <template v-for="user in createdUser">
            <tr>
                <td>{{ user.username }}</td>
                <td>{{ user.superadmin }}</td>
                <td>{{ user.password }}</td>
            </tr>
        </template>
    </table>
    
    <div class="newuserstext" v-if="createdUser.length > 0"><b>Achtung: </b>Die Tabelle verschwindet beim neuladen der Seite. Sie können die generierten Passwörter dann nicht mehr einsehen.</div>

    <div class="newuserstext" v-else>Hier erscheinen Benutzer die sie erstellen. Sie werden nicht lokal gespeichert und verschwinden beim neuladen der Seite.</div>


    <div class="notificationbox">
        <div v-if="saveUserAPICall.error.value" class="notification error">Fehler beim Speichern: {{ saveUserAPICall.error }}</div>
        <div v-if="saveUserAPICall.data.value?.status === 'error'" class="notification error">Fehler beim Speichern: {{ saveUserAPICall.data.value.message }}</div>
    </div>

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

.newusers {
    @extend .centered;

    border-collapse: collapse;
    margin-bottom: 20px;

    td, th {
        border: 1px solid hsl(0, 0%, 80%);
        text-align: left;
        padding: 0.25rem;
    }
}

.newuserstext {
    @extend .centered;

    margin-bottom: 20px;
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

.newUserForm {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 20px auto;
    display: grid;
    grid-template-rows: min-content min-content min-content;
    gap: 20px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }

    @media (min-width: 500px) {
        grid-template-rows: unset;
        grid-template-columns: minmax(min-content, 500px) min-content min-content;
    }

    label {
        display: block;
        color: hsl(29, 0%, 50%);
        font-size: 14px;
    }

    .textinput, .submitbutton {
        resize: none;
        display: block;
        width: 100%;
        // min-width: 400px;
        font-size: 14px;
        font-family: inherit;
        padding: 1em;
        height: 48px;
        margin: 0;
        border: none;
        background-color:  hsl(0, 0%, 98%);
        border-radius: 10px;

        &.submitbutton {
            background-color: hsl(220, 96%, 51%);
            color: #FFFFFF;
            cursor: pointer;
            align-self: flex-end;
            height: 48px;

            @media (min-width: 500px) {
                width: 200px;
            }
        }


        
    }

    input:not(.confirm, .delete), textarea {
        border: 1px solid hsl(0, 0%, 90%);
    }
}

.notificationbox {
    position: fixed;
    bottom: 10px;
    left: 10px;
    margin-right: 10px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .notification {
        border-radius: 20px;
        padding: 15px 30px;
        overflow-wrap: anywhere;

        &.warning {
            background-color: hsl(61, 100%, 65%);
        }
        &.error {
            background-color: hsl(0, 100%, 60%);
            color: #FFF;
        }

        .submit-save-button {
            text-decoration: underline;
            cursor: pointer;
            background-color: unset;
            color: inherit;
            font: inherit;
            padding: 0;
            display: inline;
            margin: 0;
            border: none;
        }
    }
}

.button-group {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}







</style>