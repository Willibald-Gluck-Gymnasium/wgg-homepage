<script setup>
const tag = useRoute().params.slug
const cards = await queryContent().where({ tags: { $contains: tag } }).only(['title', 'author', 'category', 'tags', 'thumbnail', '_path']).find()
</script>

<template>
    <NuxtLayout>
        <main>
            <template v-if="cards.length > 0">
                <h1>Artikel verwandt mit: {{ tag }}</h1>
                <CardCluster  :cards="cards"/>
            </template>

            
            <template v-else>
                <h1 style="margin-bottom: 4em;">Keine Artikel verwandt mit: {{ tag }}</h1>
            </template>
        </main>
    </NuxtLayout>
</template>


<style lang="scss" scoped>
h1 {
    margin-left: auto;
    margin-right: auto;
    margin: 1em auto 0.2em;
    width: calc(100% - 20px);
    max-width: 1080px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}
</style>