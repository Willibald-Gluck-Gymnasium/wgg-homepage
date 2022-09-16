<template>
  <div class="container">
      <search-result
        v-for="(result, i) in results"
        :key="i"
        :title="result.title"
        :category="result.category"
        :timestamp="result.timestamp"
        :imgsrc="result.imgsrc"
        :href="result.href"
        :preview="result.preview"
      />
  </div>
</template>

<script>
import SearchResult from '@components/SearchResult'

export default {
    components: {
        SearchResult
    },
    data: () => ({
        results: [
            {
                href: '/smv',
                imgsrc: '/img/neuesschuljahr.jpg&pipeline=thumbnail',
                category: 'Gemeinschaft',
                timestamp: 'Dec 2 2020 01:50:10 GMT+0100',
                title: 'Die SMV',
                preview: 'Klar, Lehrer organisieren den Schulablauf, richtig? Nicht ganz. Wir, die Schüler Mit Verantwortung (SMV) organisieren ...'
            },
            {
                href: '/schuelergenossenschaft',
                imgsrc: 'img/schuelergenossenschaft.jpg',
                category: 'Aktivitäten',
                timestamp: 'May 4 2016 1:40:32 GMT+0100',
                title: 'Die Schülergenossenschaft',
                preview: 'Unsere Schule hat eine Schülergenossenschaft gegründet und damit die erste in ganz Bayern. Aber was ist eine ...'
            },
            {
                href: '/schulleitung',
                imgsrc: 'img/schulbeginn.jpg',
                category: 'Gemeinschaft',
                timestamp: 'Feb 16 2021 4:50:12 GMT+0100',
                title: 'Die Schulleitung',
                preview: 'Das WGG als Schule muss natürlich auch eine Schulleitung haben. Wir stellen uns hier kurz vor und zeigen wofür wir so zuständig sind. ...'
            },
            {
                href: '/schulgarten',
                imgsrc: 'img/color4.jpg',
                category: 'Aktivitäten',
                timestamp: 'Apr 30 1994 2:30:24 GMT+0100',
                title: 'Die Schulgärtner',
                preview: 'Der Schulgarten des WGGs wächst langsam heran und mit ihm die Schulgärtner. Nun wird Nachwuchs gesucht. Der Schulgarten ist schon länger ...'
            }
        ]
    })
}
</script>

<style scoped lang="scss">
.container {
    margin: 25px auto;
    width: auto !important;
}
@media only screen and (max-width: 700px) {
    .container {
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>