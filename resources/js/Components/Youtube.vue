<template>
    <div class="force-iframe-aspect-ratio" id="youtube-container" ref="vid">
        <div class="message">
            <span>Wenn dieses YouTube Video läd, kann es vorkommen, dass YouTube Ihre Daten sammelt und überträgt.</span><span class="more"> Wenn Sie das Risiko eingehen wollen und das Video trotzdem laden wollen, drücken Sie bitte unten auf den Knopf zum Akzeptieren.</span>
            <button ref="button">Akzeptieren und Laden</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['watch'],
    methods: {
        accept: function() {
            // alert("You accepted");
            var container = this.$refs.vid;
            container.innerHTML = '<iframe class="iframe" width="560" height="315" width="100%" src="https://www.youtube-nocookie.com/embed/' + this.watch + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    },
    mounted () {
        var button = this.$refs.button;
        button.onclick = this.accept;
    }
}
</script>

<style lang="scss">
div#youtube-container {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
    iframe {
        width: 100%;
    }
    div.message {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        top: 0;
        left: 0;
        padding: 15px;
        width: 100%;
        height: 100%;
        background: rgb(20,20,20);
        color: white;
        text-align: center;
        font-size: 18px;
        border-radius: 5px;
        button {
            display: block;
            margin: 0 auto;
            margin-top: 15px;
            border-radius: 0;
            background: #eee;
            color: black;
            border: none;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            transition-duration: .2s;
            font-size: 18px;
            &:hover {
                background: #fff;
            }
        }
    }
}
.force-iframe-aspect-ratio { 
    // CLARIFICATION:
    // This workaround replicates the behavior of the experimental feature 'aspect-ratio'
    // SOURCE:
    // https://pqina.nl/blog/presenting-images-in-an-aspect-ratio-with-css/
    //
    position: relative;
    width: calc(100% + 50px);

    &::after {
        display: block;
        content: '';
        padding-bottom: 56%; // aspect ratio
    }

    .iframe {
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        // background-color: hsl(0, 0%, 80%);
    }
}
@media only screen and (max-width: 700px) {
    div.message, iframe {
        width: 100% !important;
        float: none !important;
        margin-left: 0 !important; margin-right: 0 !important;
        border-radius: 0 !important;
    }
}
@media only screen and (min-width: 700px) and (max-width: 900px) {
    .float-right div.message, .float-left div.message, .float-right div.message button, .float-left div.message button {
        font-size: 15px !important;
    }
    .float-right, .float-left {
        div.message span.more {
            display: none;
        }
    }
}
@media only screen and (max-width: 400px) {
    div.message {
        font-size: 15px !important
    }
}
</style>