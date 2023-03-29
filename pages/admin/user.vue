<script setup>

useHead({
    title: 'Nutzerliste'
})

definePageMeta({
    middleware: ["user-is-super-admin"]
})

const indexUser = await useLazyFetch('/api/user', {
    server: false,
})

// function deleteUser(id) {
//     const test = ref({
//         _data: {
//             id: id
//         },
//         pending: false,
//         response: null,
//         execute() {
//             const self = this
//             self.pending = true
//             self.response = $fetch(`/api/user/${this._data.id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     authtoken: localStorage.getItem('authtoken')
//                 },
//                 onResponse() {
//                     self.pending = false
//                 }
//             })
//         }
//     })
//     watch(test, (newVal) => {
//         console.log(newVal);
//     }, {deep: true})
//     return test
// }

async function deleteUser(id, username) {

    if (!confirm(`Sind sie sich sicher, dass sie '${username}' (${id}) löschen wollen?`)) return false

    return await $fetch(`/api/user/${id}`, {
        method: 'DELETE',
        headers: {
            authtoken: localStorage.getItem('authtoken')
        },
        onResponse() {
            indexUser.refresh()
        }
    })
}

async function resetPassword(key, id, username) {

    if (!confirm(`Sind sie sich sicher, dass sie das Password von '${username}' (${id}) zurücksetzen wollen?`)) return false

    return await $fetch(`/api/user/${id}/resetPassword`, {
        method: 'DELETE',
        headers: {
            authtoken: localStorage.getItem('authtoken')
        },
        onResponse({ response }) {
            if (response._data.status === 'success') {
                indexUser.data.value.data.user[key].newPassword = response._data.data.newpassword
            }
        }
    })
}

</script>

<template>
<NuxtLayout>
    <CurrentUserMenu style="margin-top: 20px; margin-bottom: 30px;"/>

    <h1>Alle Nutzer</h1>    

    <div class="information error" v-if="indexUser.error.value">Fehler beim Laden: {{ saveUserAPICall.error }}</div>
    <div class="information error" v-if="indexUser.data.value?.status === 'error'">Fehler beim Laden: {{ saveUserAPICall.data.value.message }}</div>

    <table class="alluser" v-if="indexUser.data.value?.data?.user.length > 0">
        <tr>
            <th>id</th>
            <th>Nutzername</th>
            <th>Superadmin</th>
            <th>Passwort zurücksetzen</th>
            <th>Löschen</th>
        </tr>
        <template v-for="(user, key) in indexUser.data.value.data.user">
            <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ Boolean(user.superadmin) }}</td>
                <td>
                    <button v-if="!user.newPassword" @click="resetPassword(key, user.id, user.username)">Zurücksetzen</button>
                    <div v-else>{{ user.newPassword }}</div>
                </td>
                <td>
                    <button @click="deleteUser(user.id, user.username)">Löschen</button>
                </td>
            </tr>
        </template>
    </table>

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

    &.error {
        color: hsl(0, 100%, 60%);
    }
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

.alluser {
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