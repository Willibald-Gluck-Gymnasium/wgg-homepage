<template>
    <div class="wrapper">
        <div class="grid-wrapper">
            <div id="one">
                1
            </div>
            <div id="two">
                2
            </div>
            <div id="three">
                3
            </div>
            <div id="four">
                4
            </div>
            <div id="five">
                5
            </div>
            <div id="six">
                6
            </div>
            <div id="seven">
                7
            </div>
            <div id="eight">
                8
            </div>
            <div id="nine">
                9
            </div>
            <div id="ten">
                10
            </div>
            <div id="eleven">
                11
            </div>
            <div id="twelve">
                12
            </div>
            <div id="thirteen">
                13
            </div>
            <div id="fourteen">
                14
            </div>
            <div id="fifteen">
                15
            </div>
            <div id="sixteen">
                16
            </div>
            <div id="seventeen">
                17
            </div>
            <div id="eighteen">
                18
            </div>
            <div id="nineteen">
                19
            </div>
            <div id="twenty">
                20
            </div>
            <div id="twentyone">
                21
            </div>
            <div id="twentytwo">
                22
            </div>
            <div id="twentythree">
                23
            </div>
            <div id="twentyfour">
                24
            </div>
        </div>
        <div class="info-wrapper">
            <div class="info" id="one-info">
                <img><img><img>
                <span>1 (!) Polymer</span>
            </div>
            <div class="info" id="two-info">
                <img><img><img>
                <span>90000</span>
            </div>
            <div class="info" id="three-info">
                <img><img><img>
                <span>118</span>
            </div>
            <div class="info" id="four-info">
                <img><img><img>
                <span>2.3e10</span>
            </div>
            <div class="info" id="five-info">
                <img><img><img>
                <span>60</span>
            </div>
            <div class="info" id="six-info">
                <img><img><img>
                <span>1m</span>
            </div>
            <div class="info" id="seven-info">
                <img><img><img>
                <span>250g</span>
            </div>
            <div class="info" id="eight-info">
                <img><img><img>
                <span>J</span>
            </div>
            <div class="info" id="nine-info">
                <img><img><img>
                <span>40.000</span>
            </div>
            <div class="info" id="ten-info">
                <img><img><img>
                <span>alle 7.7 Mrd</span>
            </div>
            <div class="info" id="eleven-info">
                <img><img><img>
                <span>163.000 Tonnen</span>
            </div>
            <div class="info" id="twelve-info">
                <img><img><img>
                <span>He, Ar,<br> Ne</span>
            </div>
            <div class="info" id="thirteen-info">
                <img><img><img>
                <span>4.9</span>
            </div>
            <div class="info" id="fourteen-info">
                <img><img><img>
                <span>39%</span>
            </div>
            <div class="info" id="fifteen-info">
                <img><img><img>
                <span>Sauerstoff</span>
            </div>
            <div class="info" id="sixteen-info">
                <img><img><img>
                <span>1</span>
            </div>
            <div class="info" id="seventeen-info">
                <img><img><img>
                <span>1855</span>
            </div>
            <div class="info" id="eighteen-info">
                <img><img><img>
                <span>250</span>
            </div>
            <div class="info" id="nineteen-info">
                <img><img><img>
                <span>34°C</span>
            </div>
            <div class="info" id="twenty-info">
                <img><img><img>
                <span>2002</span>
            </div>
            <div class="info" id="twentyone-info">
                <img><img><img>
                <span>15cm</span>
            </div>
            <div class="info" id="twentytwo-info">
                <img><img><img>
                <span>-12°C</span>
            </div>
            <div class="info" id="twentythree-info">
                <img><img><img>
                <span>80%</span>
            </div>
            <div class="info" id="twentyfour-info">
                <img><img><img>
                <span>28g</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    methods: {
        run: function () {
            var gridChildren = Array.from(document.getElementsByClassName("grid-wrapper")[0].children);
            gridChildren.forEach(child => {
                child.onclick = function () {
                    var date = new Date
                    var today = date.getDate()
                    var day = parseFloat(document.getElementById(child.id).innerHTML)
                    if (today > day - 1) {
                        document.getElementById(child.id + "-info").classList.add("visible");
                    }
                }
                // child.style['background-image'] = "url('bilder/thumbnail-" + child.id + ".png');";
                child.style["background-image"] = "url('/images/chemie/advent/thumbnail-" + child.id + ".jpg')";
            });
            var infos = Array.from(document.getElementsByClassName("info-wrapper")[0].children);
            infos.forEach(info => {
                info.children[1].onclick = function () {
                    info.classList.remove("visible");
                }
                info.children[2].onclick = function () {
                    info.children[3].classList.add("visible");
                }
                info.children[0].src = "/images/chemie/advent/chemie-" + info.id + ".jpg";
                info.children[1].src = "/images/chemie/advent/back.png";
                info.children[2].src = "/images/chemie/advent/lsg.png";
            });
        }
    },
    mounted() {
        this.run();
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.wrapper {
    border: 20px solid rgb(6, 145, 187);
    background: white;
    padding: 10px;
    width: 950px;
    height: 700px;
    position: relative;
    overflow: hidden;
}

.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    grid-auto-rows: 83px;
}

.grid-wrapper>div {
    /* background: rgb(76, 145, 145); */
    /* padding: 5px; */
    transition-duration: .1s;
    cursor: pointer;
    background-size: cover;
    color: transparent;
}

.grid-wrapper>div:hover {
    /* background: rgb(6, 141, 141); */
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.info-wrapper>div.info {
    z-index: 10000000;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
}

.info-wrapper>div.info.visible {
    display: block;
}

.info-wrapper>div.info>img:nth-child(1) {
    width: auto;
    height: auto;
}

.info-wrapper>div.info>img:nth-child(2) {
    position: absolute;
    top: 150px;
    left: 40px;
    width: 110px;
    border-radius: 50%;
    cursor: pointer;
}

.info-wrapper>div.info>img:nth-child(3) {
    position: absolute;
    top: -250px;
    right: 100px;
    cursor: pointer;
}

.info-wrapper>div.info>span {
    display: none;
    position: absolute;
    width: 100px;
    top: 265px;
    right: 125px;
    color: white;
    text-align: center;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.info-wrapper>div.info>span.visible {
    display: block;
}

#one {
    grid-column: 1 / 3;
    grid-row: 1 / 5;
}

#two {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
}

#three {
    grid-column: 7 / 8;
    grid-row: 1 / 2;
}

#four {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
}

#five {
    grid-column: 3 / 4;
    grid-row: 3 / 5;
}

#six {
    grid-column: 4 / 5;
    grid-row: 5 / 8;
}

#seven {
    grid-column: 6 / 8;
    grid-row: 3 / 5;
}

#eight {
    grid-column: 5 / 6;
    grid-row: 4 / 5;
}

#nine {
    grid-column: 3 / 4;
    grid-row: 6 / 7;
}

#ten {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
}

#eleven {
    grid-column: 6 / 7;
    grid-row: 7 / 8;
}

#twelve {
    grid-column: 3 / 4;
    grid-row: 5 / 6;
}

#thirteen {
    grid-column: 3 / 4;
    grid-row: 7 / 8;
}

#fourteen {
    grid-column: 1 / 2;
    grid-row: 6 / 7;
}

#fifteen {
    grid-column: 5 / 6;
    grid-row: 3 / 4;
}

#sixteen {
    grid-column: 7 / 8;
    grid-row: 2 / 3;
}

#seventeen {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
}

#eighteen {
    grid-column: 2 / 3;
    grid-row: 6 / 7;
}

#nineteen {
    grid-column: 7 / 8;
    grid-row: 5 / 8;
}

#twenty {
    grid-column: 5 / 6;
    grid-row: 7 / 8;
}

#twentyone {
    grid-column: 1 / 3;
    grid-row: 7 / 8;
}

#twentytwo {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
}

#twentythree {
    grid-column: 6 / 7;
    grid-row: 1 / 3;
}

#twentyfour {
    grid-column: 5 / 7;
    grid-row: 5 / 7;
}
</style>