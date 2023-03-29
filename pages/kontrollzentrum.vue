<script setup>
import date from 'date-and-time'

useHead({
    title: 'Kontrollzentrum'
})

definePageMeta({
    middleware: ["user-logged-in"]
})

const unsavedChanges = ref(false)
const showSaved = ref(false)

const getScheduleAPICallControll = await useLazyFetch('/api/getSchedule', {
    server: false,
    immediate: false,
    onResponse({ request, response, options }) {
        if (response._data.status === 'success') {
            const deleteWaitForScheduleAPICall = watch(getScheduleAPICallControll.pending, (newPendingStatus) => {
                // Wait for api call to be finished
                if (!newPendingStatus) {
                    deleteWaitForScheduleAPICall()
    
                    // Activate change observer
                    watch(getScheduleAPICallControll.data, () => {
                        unsavedChanges.value = true
                    }, {deep: true})
                }
            })
        }
    }
})

function addNewEvent() {
    const newEvent = {
        timestamp: date.format(new Date(Date.now()), 'YYYY-MM-DDThh:mm'),
        dayonly: true,
        title: "Neues Event",
        details: ""
    }
    getScheduleAPICallControll.data.value.data.events.push(newEvent)
}

const saveScheduleAPICall = await useLazyAsyncData(
    () => $fetch('/api/saveSchedule', {
        method: 'POST',
        headers: {
            authtoken: process.client && localStorage.getItem('authtoken')
        },
        body: {
            events: getScheduleAPICallControll.data.value?.data.events
        },
        onResponse({ request, response, options }) {
            if (response._data.status === 'success') {
                unsavedChanges.value = false
                showSaved.value = true
            }
        },
    }),
    {
        immediate: false,
        server: false,
    }
)
saveScheduleAPICall.pending.value = false

const midnightYesterday = new Date(Date.now()).setHours(0,0,0,0)
</script>

<template>
<NuxtLayout>
    <CurrentUserMenu style="margin-top: 20px; margin-bottom: 30px;"/>

    <h1>Kontrollzentrum</h1>

    <Schedule :events="getScheduleAPICallControll" :limit="100"></Schedule>

    <div class="information" v-if="getScheduleAPICallControll.pending.value">Lädt...</div>

    <div class="information"><b>Info:</b> Auf der Startseite werden nur die nächsten acht Termine gezeigt. Termine vom Vortag oder früher sind unsichtbar.</div>

    <form style="margin-top: 20px" @submit.prevent="saveScheduleAPICall.execute()">

        <template v-for="(eventObj, index) in getScheduleAPICallControll?.data.value?.data.events">

            <div :class="{ 'event-group': true, 'event-group--old': !(new Date(eventObj.timestamp).getTime() >= midnightYesterday)}">
                <div class="input-group">
                    <label for="timestamp">Zeitpunkt</label>
                    <input type="datetime-local" id="timestamp" v-model="eventObj.timestamp">
                </div>

                <div class="input-group">
                    <label for="dayonly">Ganztägig</label>
                    <input type="checkbox" id="dayonly" v-model="eventObj.dayonly">
                </div>
                
                <div class="input-group">
                    <label for="title" style="margin-left: 5px;">Titel</label>
                    <input class="textinput" type="text" id="title" v-model="eventObj.title">
                </div>

                <div class="input-group">
                    <label for="details" style="margin-left: 5px;">Details</label>
                    <textarea id="details" rows="3" v-model="eventObj.details"></textarea>
                </div>

                <input @click="getScheduleAPICallControll.data.value.data.events.splice(index, 1)" class="button delete" type="button" value="Löschen">
            </div>

        </template>

        <div class="notificationbox">
            <div v-if="saveScheduleAPICall.error.value" class="notification error">Fehler beim Speichern: {{ saveScheduleAPICall.error }}</div>
            <div v-if="saveScheduleAPICall.data.value?.status === 'error'" class="notification error">Fehler beim Speichern: {{ saveScheduleAPICall.data.value.message }}</div>
            <div v-if="unsavedChanges" class="notification warning">
                <span>Achtung, es gibt ungespeicherte Änderungen. </span>
                <input class="submit-save-button" type="submit" value="Speichern" :disabled="getScheduleAPICallControll.pending.value || saveScheduleAPICall.pending.value">
            </div>
        </div>

        


        <div class="button-group">
            <button class="new-event button" :disabled="getScheduleAPICallControll.pending.value" @click.prevent="addNewEvent()">Neuer Termin</button>
            <Button :disabled="getScheduleAPICallControll.pending.value" style="background-color: rgb(37, 62, 254);" type="submit" ref="button" :loading="saveScheduleAPICall.pending.value">Speichern</Button>
        </div>

        <div style="min-height: 1.5em;">
            <div v-if="showSaved && !unsavedChanges">Gespeichert!</div>
        </div>

    
    </form>

    <div style="margin-top: 20px;" class="centered">
        
    </div>

    <div style="margin-top: 100px;"></div>

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

form {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }

    .event-group {
        border-radius: 20px;
        background-color: #FFF;
        padding: 10px;
        display: grid;
        gap: 10px;
        grid-template-rows: repeat(4, min-content);

        @media (min-width: 600px) {
            grid-template-rows: none;
            grid-template-columns: min-content min-content 4fr 6fr min-content;
        }

        &.event-group--old {
            // filter: brightness(0.8);
            opacity: 0.6;
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
}

.button-group {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

label {
    display: block;
    color: hsl(29, 0%, 50%);
    font-size: 14px;
}

.textinput, textarea, .button {
    resize: none;
    display: block;
    width: 100%;
    font-size: 14px;
    font-family: inherit;
    padding: 1em;
    height: 48px;
    margin: 0;
    border: none;
    background-color:  hsl(0, 0%, 98%);
    border-radius: 10px;

    &.delete {
        background-color: hsl(0, 100%, 65%);
        color: #FFFFFF;
        cursor: pointer;
        align-self: flex-end;
    }

    &.confirm {
        width: 200px;
        background-color: hsl(220, 96%, 51%);
        color: #FFFFFF;
        cursor: pointer;
    }

    &.new-event {
        width: 200px;
        background-color: hsl(0, 0%, 100%);
        // color: #FFFFFF;
        cursor: pointer;
    }
    
}

input:not(.confirm, .delete), textarea {
    border: 1px solid hsl(0, 0%, 90%);
}



</style>