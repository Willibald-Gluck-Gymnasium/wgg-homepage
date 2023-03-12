<script setup>
const slug = useRoute().params.slug
const tags = slug.split('+')
const title = tags.join(', ')

// const cards = await queryContent().where({ tags: { $contains: tag } }).only(['title', 'author', 'category', 'tags', 'thumbnail', '_path']).find()

const now = new Date(Date.now()).toISOString()
const notExpired = {
    $or: [
        { expireOn: { $exists: false } },
        { expireOn: { $gt: now } }
    ]
}

const cards = (await Promise.all([
    queryContent('/').sort({ title: 1, date: -1, }).where({tags: { $containsAny: tags }, pinned: { $eq: true }, ...notExpired, hidden: { $ne: true }}).only(['_path', 'pinned', 'date', 'title', 'tags', 'thumbnail', 'pinned']).find(),
    queryContent('/').sort({ title: 1, date: -1, }).where({tags: { $containsAny: tags }, pinned: { $ne: true }, ...notExpired, hidden: { $ne: true }}).only(['_path', 'pinned', 'date', 'title', 'tags', 'thumbnail', 'pinned']).find(),
])).flat()

useHead({
    title: title
})

</script>

<template>
    <NuxtLayout>
        <main>
            <div class="tags">
                <NuxtLink :to="`/tag/${tag}`" class="tag" v-for="tag in tags">
                    <IconsTag class="icon" />
                    <div>{{ tag }}</div>
                </NuxtLink>
            </div>

            <template v-if="cards.length > 0">
                <CardCluster class="centered" :cards="cards"/>
            </template>

            <template v-else>
                <h1 style="margin-bottom: 4em;">Keine Artikel mit diesen Tags gefunden.</h1>
            </template>
        </main>
    </NuxtLayout>
</template>


<style lang="scss" scoped>
.centered {
    margin: 0 auto;
    width: calc(100% - 20px);
    max-width: 1080px;

    @media (min-width: 500px) {
        width: calc(100% - 40px);
    }
}

.tags {
    @extend .centered;
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto;
    gap: 0.5em;

    .tag {
        .icon {
            height: 18px;
            max-width: 18px;
        }

        flex-shrink: 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5em;
        color: hsl(0, 0%, 30%);
        fill: hsl(0, 0%, 30%);
        font-size: 16px;
        padding: 0.25em 0.7em;
        padding-left: 0.5em;
        background-color: hsl(0, 0%, 100%);
        border: 1px solid hsl(0, 0%, 90%);
        border-radius: 1em;
        transition-duration: 100ms;

        &:hover {
            background-color: hsl(29, 100%, 90%);
            border: 1px solid hsl(29, 100%, 80%);
        }

    }
}


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