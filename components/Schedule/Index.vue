<script setup>
const events = [
    {
        date: new Date('2023-02-15T08:25:00'),
        title: "Elternsprechtag",
        details: "Wir heißen sie herzlich willkommen in unserer Schule un wünschen ihnen einen guten Aufenthalt."
    },
    {
        date: new Date('2023-02-12T15:02:00'),
        title: "Elternsprechtag",
        details: "Wir heißen sie herzlich willkommen in unserer ihnen einen guten Aufenthalt."
    },
    {
        date: new Date('2023-12-02T08:00:00'),
        title: "Zeugnisausgabe der Oberstufe und Sektempfang",
        details: ""
    },
    
]
</script>

<template>
    <div class="schedule">
        <ScheduleEventItem v-for="event in events" :datetime="event.date" :title="event.title" :details="event.details"/>
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
        padding: 20px;
		width: calc(100% - 40px);
	}
}

</style>