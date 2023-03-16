<script setup>
const props = defineProps({
    events: {
        required: false,
    },
    limit: {
        required: false,
        type: Number,
        default: 8
    }
})

function sortByTimestamp(a, b) {
    if (a.timestamp < b.timestamp) return -1
    if (a.timestamp > b.timestamp) return 1
    return 0
}

let getScheduleAPIResponse
let sortedEvents
if (props.events) {
    getScheduleAPIResponse = props.events
    getScheduleAPIResponse.execute()
    sortedEvents = computed(() => {
        return JSON.parse(JSON.stringify(getScheduleAPIResponse.data.value?.data.events)).sort(sortByTimestamp)
    })
} else {
    getScheduleAPIResponse = await useLazyFetch('/api/getSchedule', {
        server: false
    })
}

const midnightYesterday = new Date(Date.now()).setHours(0,0,0,0)

const activeEvents = computed(() => {
    let events = sortedEvents?.value ||  JSON.parse(JSON.stringify(getScheduleAPIResponse?.data.value?.data.events || []))
    events = events.filter(eventObj => new Date(eventObj.timestamp).getTime() >= midnightYesterday)
    return events
})

</script>

<template>
    <div class="schedule">
        <div class="spinnerbox" v-if="getScheduleAPIResponse?.pending.value">
            <LoadingSpinner class="spinner" />
        </div>
        <template v-else v-for="(event, key) in activeEvents" >
            <!-- Event disapears if timestamp is not today or later -->
            <ScheduleEventItem v-if="key < props.limit" :timestamp="event.timestamp" :dayonly="event.dayonly" :title="event.title" :details="event.details"/>
            <!-- <ScheduleEventItem :timestamp="event.timestamp" :dayonly="event.dayonly" :title="event.title" :details="event.details"/> -->
        </template>
    </div>
</template>

<style lang="scss" scoped>

.schedule {
    position: relative;
    width: calc(100% - 20px);
    max-width: 1080px;
    // height: 260px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 4px 20px 0 hsla(0, 0%, 0%, 0.08);
    background-image: url("background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10px;
    gap: 10px;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 310px;

    @media (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
	}
	
	@media (min-width: 500px) {
        // padding: 20px;
		width: calc(100% - 40px);
	}

    .spinnerbox {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 50px;
        width: 50px;
        stroke: #FFFFFF;

        .spinner {
            height: 100%;
            width: 100%;
        }
    }
}

</style>