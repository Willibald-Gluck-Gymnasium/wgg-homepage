<script setup>
const events = ref([])

const props = defineProps({
    events: {
        required: false,
        type: Array
    }
})

if (props.events === undefined) {
    /*
    const { data, pending, error, refresh } = await useFetch('/api/getSchedule', {
        method: 'GET'
    })
    
    events.value = data.value.data.events
    */
} else {
    events.value = props.events
}
</script>

<template>
    <div class="schedule">
        <ScheduleEventItem v-for="event in events" :timestamp="event.timestamp" :title="event.title" :details="event.details"/>
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