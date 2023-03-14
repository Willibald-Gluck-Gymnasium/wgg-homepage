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

let getScheduleAPIResponse
if (props.events) {
    getScheduleAPIResponse = props.events
} else {
    getScheduleAPIResponse = useLazyFetch('/api/getSchedule', {
        server: false
    })
}

const midnightYesterday = new Date(Date.now()).setHours(0,0,0,0)
</script>

<template>
    <div class="schedule">
        <div class="spinnerbox" v-if="getScheduleAPIResponse?.pending.value">
            <LoadingSpinner class="spinner" />
        </div>
        <template v-for="(event, key) in getScheduleAPIResponse?.data.value?.data?.events" >
            <!-- Event disapears if timestamp is not today or later -->
            <ScheduleEventItem v-if="new Date(event.timestamp).getTime() >= midnightYesterday && key < props.limit" :timestamp="event.timestamp" :dayonly="event.dayonly" :title="event.title" :details="event.details"/>
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
    min-height: 100px;

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