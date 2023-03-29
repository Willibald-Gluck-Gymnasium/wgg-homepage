<script setup>
useHead({
    title: 'Passwort ändern'
})

definePageMeta({
    middleware: ["user-logged-in"]
})

const formdata = ref({
    old: '',
    new: '',
    check: ''
})

const oldpassword = ref("")
const newpassword = ref("")
const check = ref("")

const saveNewPasswordAPICall = await useLazyAsyncData(
    () => $fetch('/api/changePassword', {
        method: 'POST',
        headers: {
            authtoken: process.client && localStorage.getItem('authtoken')
        },
        body: {
            oldpassword: oldpassword.value,
            newpassword: newpassword.value
        },
        onResponse({ request, response, options }) {
            if (response._data.status === 'success') {
                useRouter().addRoute({
                    path: "/neuespasswort/fertig",
                    component: resolveComponent('TemporaryPagesUserCreated')
                })
                navigateTo('/neuespasswort/fertig')
            }
        },
    }),
    {
        immediate: false,
        server: false,
    }
)
saveNewPasswordAPICall.pending.value = false

const repeatPasswordEqual = computed(() => {
    const newpassword_ = newpassword.value;
    const check_ = check.value;
    return newpassword_ === check_
})

const formFilled = computed(() => {
    const oldpassword_ = oldpassword.value
    const newpassword_ = newpassword.value;
    const check_ = check.value;
    return !(oldpassword_ === '' || newpassword_ === '' || check_ === '')
})

</script>

<template>
<NuxtLayout>
    <CurrentUserMenu style="margin-top: 20px; margin-bottom: 30px;"/>

    <h1>Passwort ändern</h1>    

    <form class="changePasswordForm" style="margin-top: 20px" @submit.prevent="saveNewPasswordAPICall.execute()">
        <div :class="{ 'input-group': true, 'error': saveNewPasswordAPICall.data.value?.message === 'Error: Falsches Passwort.'}">
            <label for="oldpassword">Altes Passwort:</label>
            <input class="textinput" required autocomplete="current-password" type="password" id="username" v-model="oldpassword">
        </div>
        <div class="input-group">
            <label for="username">Neues Passwort:</label>
            <input class="textinput" required autocomplete="new-password" type="password" id="username" v-model="newpassword">
        </div>
        <div :class="{ 'input-group': true, 'error': !repeatPasswordEqual}">
            <label for="username">Neues Passwort wiederholen:</label>
            <input class="textinput" required autocomplete="new-password" type="password" id="username" v-model="check">
        </div>

        <Button :disabled="!repeatPasswordEqual || !formFilled" class="submitbutton" type="submit" ref="button" :loading="saveNewPasswordAPICall.pending.value">Speichern</Button>
    </form>

    <div class="information error" v-if="!repeatPasswordEqual">Passwörter sind nicht gleich</div>

    <div class="notificationbox">
        <div v-if="saveNewPasswordAPICall.error.value" class="notification error">Fehler beim Speichern: {{ saveNewPasswordAPICall.error }}</div>
        <div v-if="saveNewPasswordAPICall.data.value?.status === 'error'" class="notification error">Fehler beim Speichern: {{ saveNewPasswordAPICall.data.value.message }}</div>
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

.information.error {
    color: hsl(0, 100%, 60%);
}

.changePasswordForm {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 20px auto;
    display: grid;
    grid-template-rows: min-content min-content min-content;
    gap: 20px;

    .input-group.error {

        label {
            color: hsl(0, 100%, 50%);
        }

        input {
            background-color: hsl(0, 100%, 98%);
            border: 1px solid hsl(0, 100%, 80%);

            &:focus {
                box-shadow: 0 0 0 3px hsl(0, 100%, 90%);
            }
        }
    }

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }

    @media (min-width: 700px) {
        grid-template-rows: unset;
        grid-template-columns: 1fr 1fr 1fr;
    }

    label {
        white-space: nowrap;
        display: block;
        color: hsl(29, 0%, 50%);
        font-size: 14px;
    }

    // .textinput {
    //     max-width: 2;
    // }

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