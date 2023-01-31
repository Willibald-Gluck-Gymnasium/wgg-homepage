<script setup>
import dot from './dot.svg'

import date from 'date-and-time'
import de from 'date-and-time/locale/de'
date.locale(de)


const props = defineProps({
    timestamp: {
        required: true
    },
    title: {
        required: true,
        type: String
    },
    details: {
        required: true,
        type: String
    }
})
</script>

<template>
    <div class="item">
        <div class="datetime-row">
            <img class="dot" :src="dot" alt="orange dot">
            <span>{{ date.format(new Date(props.timestamp), 'ddd D. MMM YYYY H:mm') }} Uhr</span>
        </div>
        <h3>{{ props.title }}</h3>
        <div class="details">{{ props.details }}</div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    padding: 10px;
    background-color: hsla(0, 0%, 100%, 0.4);
    border-radius: 10px;
    display: grid;
    grid-template-rows: min-content min-content min-content auto;
    -webkit-backdrop-filter: saturate(180%);
    backdrop-filter: saturate(180%);
    transition: all 0.2s;

    &:hover {
        transform: scale(1.008);
        -webkit-backdrop-filter: saturate(300%);
        backdrop-filter: saturate(300%);
    }

    
    .datetime-row {
        font-size: 0.8em;
        display: flex;
        align-items: center;
        gap: 0.4em;
        color: hsl(29, 20%, 45%);
    }

    h3 {
        align-self: center;
        margin: 0.25em 0 0.25em;
        line-height: 1;
    }

    .details {
        font-size: 0.8em;
        line-height: 1.2;
        color: hsl(29, 20%, 35%);
    }
}
</style>

