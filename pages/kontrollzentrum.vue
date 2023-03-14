<script setup>
import date from 'date-and-time'

useHead({
    title: 'Kontrollzentrum'
})

onMounted(async () => {
    await nextTick()
    if (process.client) {
        const authToken = localStorage.getItem('authtoken')
        if (typeof authToken !== 'string') {
            navigateTo('/login')
        }
    }
})

const getScheduleAPICallControll = useLazyFetch('/api/getSchedule', {
    key: "getSchedule",
    server: false
})

// const { data: APIScheduleResponse, pending: getSchedulePending, error, refresh } = useLazyFetch('/api/getSchedule', {
//     server: false
// })

// watch(APIScheduleResponse, (val) => {
//     events.value = val?.data?.events
// })

function addNewEvent() {
    const newEvent = {
        timestamp: date.format(new Date(Date.now()), 'YYYY-MM-DDThh:mm'),
        dayonly: true,
        title: "Neues Event",
        details: ""
    }
    getScheduleAPICallControll.data.value.data.events.push(newEvent)
}

const unsavedChanges = ref(false)
const showSaved = ref(false)

// const callAfterInactivity = (threshold, functionToCall) => {
//     let runningInstances = 0
//     const wakeUp = () => {
//         runningInstances++
//         setTimeout(() => {
//             runningInstances--
//             if (runningInstances == 0) {
//                 functionToCall()
//             }
//         }, threshold)
//     }
//     return wakeUp
// }

// const wakeUp = callAfterInactivity(2000, saveData)
const deleteWaitForScheduleAPICall = watch(getScheduleAPICallControll.pending, (newPendingStatus) => {
    deleteWaitForScheduleAPICall()
    watch(getScheduleAPICallControll.data, (newAPIResponse) => {
        unsavedChanges.value = true
        // wakeUp()
    }, {deep: true})
})



const saveScheduleAPICall = ref(null)
function saveData() {
    const events = JSON.parse(JSON.stringify(getScheduleAPICallControll.data.value.data.events))
    saveScheduleAPICall.value = useLazyFetch('/api/saveSchedule', {
        key: "saveSchedule",
        method: 'POST',
        headers: {
            authtoken: localStorage.getItem('authtoken')
        },
        body: {
            events: events
        }
    })
    const deleteWaitForSaveAPICall = watch(saveScheduleAPICall.value.pending, (newPendingState) => {
        deleteWaitForSaveAPICall()
        if (!saveScheduleAPICall.value.error.value) {
            unsavedChanges.value = false
            showSaved.value = true
        }
    })
}

</script>

<template>
<NuxtLayout>
    <NuxtLink to="/logout" class="logout">Abmelden</NuxtLink>
    <h1>Kontrollzentrum</h1>

    <Schedule :events="getScheduleAPICallControll" :limit="100"></Schedule>

    <div class="information" v-if="getScheduleAPICallControll.pending.value">Lädt...</div>

    <div class="information"><b>Info:</b> Auf der Startseite werden nur die nächsten acht Termine gezeigt. Termine vom Vortag oder früher sind unsichtbar.</div>

    <form style="margin-top: 20px" @submit.prevent="saveData()">

        <div class="event-group" v-for="(eventObject, index) in getScheduleAPICallControll?.data.value?.data.events">
            <div class="input-group">
                <label for="timestamp">Zeitpunkt</label>
                <input type="datetime-local" id="timestamp" v-model="eventObject.timestamp">
            </div>

            <div class="input-group">
                <label for="dayonly">Ganztägig</label>
                <input type="checkbox" id="dayonly" v-model="eventObject.dayonly">
            </div>
            
            <div class="input-group">
                <label for="title">Titel</label>
                <input type="text" id="title" v-model="eventObject.title">
            </div>

            <div class="input-group">
                <label for="details">Details</label>
                <textarea id="details" rows="3" v-model="eventObject.details"></textarea>
            </div>

            <input @click="getScheduleAPICallControll.data.value.data.events.splice(index, 1)" class="delete" type="button" value="Löschen">
        </div>

        <div class="notificationbox">
            <div v-if="saveScheduleAPICall?.error.value" class="notification error">Fehler beim Speichern: {{ saveScheduleAPICall.error }}</div>
            <div v-if="saveScheduleAPICall?.data?.value?.status === 'error'" class="notification error">Fehler beim Speichern: {{ saveScheduleAPICall.data.value.message }}</div>
            <div v-if="unsavedChanges" class="notification warning">Achtung, es gibt ungespeicherte Änderungen.</div>
        </div>

        <div style="min-height: 1.5em;">
            <div v-if="showSaved && !unsavedChanges">Gespeichert!</div>
        </div>



        <div class="button-group">

            <button class="new-event" :disabled="getScheduleAPICallControll?.pending.value" @click.prevent="addNewEvent()">Neuer Termin</button>

            <Button :disabled="getScheduleAPICallControll?.pending.value" style="background-color: rgb(37, 62, 254);" type="submit" ref="button" :loading="saveScheduleAPICall?.pending.value">Speichern</Button>
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
    flex-direction: column;
    gap: 20px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
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

            &.warning {
                background-color: hsl(61, 100%, 65%);
            }
            &.error {
                background-color: hsl(0, 100%, 60%);
                color: #FFF;
            }
        }
    }
}
.event-group {
    border-radius: 20px;
    background-color: #FFF;
    padding: 10px;
    display: grid;
    gap: 10px;
    grid-template-rows: repeat(4, auto);

    @media (min-width: 600px) {
        grid-template-rows: none;
        grid-template-columns: min-content min-content 4fr 6fr min-content;
        align-items: flex-end;
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
    margin-left: 5px;
}

input, textarea, button {
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