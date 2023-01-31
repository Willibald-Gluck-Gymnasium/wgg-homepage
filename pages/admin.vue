<script setup>
import date from 'date-and-time'

const events = ref([
    {
        timestamp: date.format(new Date('2023-02-15T08:25:00'), 'YYYY-MM-DDThh:mm'),
        title: "test",
        details: "Wir heißen sie herzlich willkommen in unserer Schule un wünschen ihnen einen guten Aufenthalt."
    },
    {
        timestamp: date.format(new Date('2023-02-15T08:25:00'), 'YYYY-MM-DDThh:mm'),
        title: "Elternsprechtag",
        details: "Wir heißen sie herzlich willkommen in unserer ihnen einen guten Aufenthalt."
    },
    {
        timestamp: date.format(new Date('2023-02-15T08:25:00'), 'YYYY-MM-DDThh:mm'),
        title: "Zeugnisausgabe der Oberstufe und Sektempfang",
        details: ""
    }
])

if (process.client) {
    let savedEvents = JSON.parse(localStorage.getItem('events'))
    console.table(savedEvents);
    if (savedEvents !== null) {
        events.value = savedEvents
    }
}


function addNewEvent() {
    const newEvent = {
        timestamp: date.format(new Date(Date.now()), 'YYYY-MM-DDThh:mm'),
        title: "Neues Event",
        details: ""
    }
    events.value.push(newEvent)
}

async function saveData() {
    console.log('savingData')
    localStorage.setItem('events', JSON.stringify(events.value))
}
</script>

<template>
<NuxtLayout>
    <h1>Termine</h1>

    <Schedule :events="events"></Schedule>

    <form @submit.prevent="saveData()">

        <div class="event-group" style="margin-top: 20px" v-for="(eventObject, index) in events">
            <div class="input-group">
                <label for="timestamp">Zeitpunkt</label>
                <input type="datetime-local" id="timestamp" v-model="eventObject.timestamp">
            </div>
            
            <div class="input-group">
                <label for="title">Titel</label>
                <input type="text" id="title" v-model="eventObject.title">
            </div>

            <div class="input-group">
                <label for="details">Details</label>
                <textarea id="details" rows="3" v-model="eventObject.details"></textarea>
            </div>

            <input @click="events.splice(index, 1)" class="delete" type="button" value="Löschen">
        </div>

        <div class="button-group" style="margin-top: 20px">

            <button class="new-event" @click.prevent="addNewEvent()">Neuer Termin</button>

            <input class="confirm" type="submit" value="Speichern">

        </div>
    
    </form>

    <div style="margin-top: 20px;" class="centered">
        
    </div>

    <div style="margin-top: 100px;"></div>

</NuxtLayout>
    
</template>

<style scoped lang="scss">
h1 {
    width: calc(100% - 20px);
    max-width: 1080px;
    font-weight: 700;
    margin: 0.6em auto 0.3em;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}

form {
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: 0 auto;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
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
        grid-template-columns: min-content 4fr 6fr min-content;
        align-items: flex-end;
    }
}

.button-group {
    display: flex;
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