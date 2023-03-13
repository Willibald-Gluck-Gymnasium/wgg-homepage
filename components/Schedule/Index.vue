<script setup>
const events = ref([])

const props = defineProps({
    events: {
        required: false,
        type: Array
    },
    limit: {
        required: false,
        type: Number,
        default: 8
    }
})

if (props.events === undefined) {
    const { data, pending, error, refresh } = await useFetch('/api/getSchedule', {
        method: 'GET'
    })
    events.value = data.value.data.events
} else {
    events.value = props.events
}

const midnightYesterday = new Date(Date.now()).setHours(0,0,0,0)

function sortByTimestamp(a, b) {
    if (a.timestamp < b.timestamp) return -1
    if (a.timestamp > b.timestamp) return 1
    return 0
}

const sortedEvents = computed(() => {
    const sortedArray = Array.from(events.value)
    sortedArray.sort(sortByTimestamp)
    return sortedArray
})

watch(sortedEvents, (val) => {
    console.log(val);
})

</script>

<template>
    <div class="schedule">

        <template v-for="(event, key) in sortedEvents" >
            <!-- Event disapears if timestamp is not today or later -->
            <ScheduleEventItem v-if="new Date(event.timestamp).getTime() >= midnightYesterday && key < props.limit" :timestamp="event.timestamp" :dayonly="event.dayonly" :title="event.title" :details="event.details"/>
        </template>
    </div>
</template>

<style lang="scss" scoped>

.schedule {
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

    @media (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
	}
	
	@media (min-width: 500px) {
        // padding: 20px;
		width: calc(100% - 40px);
	}
}

</style>