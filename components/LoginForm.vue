<script setup>

const loading = ref(false)

const errorMessage = ref("")
const errorUsername = ref(false)
const errorPassword = ref(false)

const username = ref("")
const password = ref("")

const emit = defineEmits(['success'])


async function login() {
    loading.value = true
    errorMessage.value = ""
    errorUsername.value = false
    errorPassword.value = false


    const { data, pending, error, refresh } = await useFetch('/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: {
            username: username.value,
            password: password.value
        }
    })

    loading.value = false

    if (error.value) {
        console.error(error.value)
        errorMessage.value = String(error.value)
        return
    }

    if (data.value.status === "error") {
        errorMessage.value = data.value.message

        errorUsername.value = data.value.data.type == 'user not found'
        errorPassword.value = data.value.data.type == 'password invalid'
        return
    }

    
    if (data.value.status === "success") {
        localStorage.setItem('authtoken', data.value.data.token)
        emit('success')
        return
    }

    errorMessage.value = data.value.message || 'Unbekannter Fehler'
    errorUsername.value = data.value.data.type == 'user not found'
    errorPassword.value = data.value.data.type == 'password invalid'
}

</script>

<template>
    <div class="login-container">
        <!-- <h1>Anmelden</h1> -->

        <form @submit.prevent="login()">

            <div :class="{ 'input-group': true, 'error': errorUsername }">
                <label for="username">Benutzername</label>
                <input v-model="username" required type="text" id="username" placeholder="Benutzername">
            </div>

            <div :class="{ 'input-group': true, 'error': errorPassword }">
                <label for="password">Passwort</label>
                <input v-model="password" required type="password" placeholder="Passwort" id="password">
            </div>

            <div class="error" v-if="errorMessage.length > 0">{{ errorMessage }}</div>

            <Button type="submit" ref="button" :loading="loading">Anmelden</Button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    margin: 50px auto;
    width: calc(100% - 20px);
    max-width: 500px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 4px 20px 0 hsla(0, 0%, 0%, 0.08);
    padding: 10px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
        padding: 20px;
    }

    .error {
        color: hsl(0, 100%, 50%);
        margin-bottom: 0.8rem;
    }

    h1 {
        margin-top: 0;
    }

    .input-group {
        margin-bottom: 1rem;

        label {
            color: hsl(0, 0%, 40%);
            display: block;
            margin-bottom: 2px;
            margin-left: 2px;
        }
        input {
            display: block;
            width: 100%;
            height: 50px;
            font-family: inherit;
            font-size: 1rem;
            border-radius: 10px;
            background-color: hsl(29, 100%, 98%);
            border: 1px solid hsl(29, 100%, 80%);
            padding-left: 1em;
            padding-right: 1em;

            &:focus {
                outline: none;
                box-shadow: 0 0 0 3px hsl(29, 100%, 90%);
            }
        }

        &.error {

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

    }


    
}

</style>