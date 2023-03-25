<template>
    <table>
        <tr>
            <td style="width:20em">
                Wähle einen Wort<br />
                <input id="button_new" type="button" value="Wort" />
            </td>
            <td>
                <form name="TestForm">
                    <input id="button_a" type="button" value="A" />
                    <input id="button_b" type="button" value="B" />
                    <input id="button_c" type="button" value="C" />
                    <input id="button_d" type="button" value="D" />
                    <input id="button_e" type="button" value="E" />
                    <input id="button_f" type="button" value="F" />
                    <input id="button_g" type="button" value="G" />
                    <input id="button_h" type="button" value="H" />
                    <input id="button_i" type="button" value="I" />
                    <input id="button_j" type="button" value="J" />
                    <input id="button_k" type="button" value="K" />
                    <input id="button_l" type="button" value="L" />
                    <input id="button_m" type="button" value="M" />
                    <input id="button_n" type="button" value="N" />
                    <input id="button_o" type="button" value="O" />
                    <input id="button_p" type="button" value="P" />
                    <input id="button_q" type="button" value="Q" />
                    <input id="button_r" type="button" value="R" />
                    <input id="button_s" type="button" value="S" />
                    <input id="button_t" type="button" value="T" />
                    <input id="button_u" type="button" value="U" />
                    <input id="button_v" type="button" value="V" />
                    <input id="button_w" type="button" value="W" />
                    <input id="button_x" type="button" value="X" />
                    <input id="button_y" type="button" value="Y" />
                    <input id="button_z" type="button" value="Z" />
                </form>
            </td>
        </tr>
        <tr>
            <td>
                <p><span id="wort_iv" style="text-align:center"></span></p>
                <p>Ich will raten:</p>
                <form id="raten">
                    <p><input id="geraten" type="text" size="20" value="" /></p>
                    <p><input id="button_stimmts" type="button" Value="Stimmt's?" /></p>
                </form>
            </td>
            <td><img id="mann" src="/images/wahlkurse/theHomepageGames/hangman0.png" alt="" format="png" /></td>
        </tr>
    </table>
</template>

<script>
export default {
    props: [],
    mounted() {
        document.getElementById("button_new").onClick(function () { get_rnd_word_from_array(wortListe); });
        document.getElementById("button_a").onClick(function () { test('a'); });
        document.getElementById("button_b").onClick(function () { test('b'); });
        document.getElementById("button_c").onClick(function () { test('c'); });
        document.getElementById("button_d").onClick(function () { test('d'); });
        document.getElementById("button_e").onClick(function () { test('e'); });
        document.getElementById("button_f").onClick(function () { test('f'); });
        document.getElementById("button_g").onClick(function () { test('g'); });
        document.getElementById("button_h").onClick(function () { test('h'); });
        document.getElementById("button_i").onClick(function () { test('i'); });
        document.getElementById("button_j").onClick(function () { test('j'); });
        document.getElementById("button_k").onClick(function () { test('k'); });
        document.getElementById("button_l").onClick(function () { test('l'); });
        document.getElementById("button_m").onClick(function () { test('m'); });
        document.getElementById("button_n").onClick(function () { test('n'); });
        document.getElementById("button_o").onClick(function () { test('o'); });
        document.getElementById("button_p").onClick(function () { test('p'); });
        document.getElementById("button_q").onClick(function () { test('q'); });
        document.getElementById("button_r").onClick(function () { test('r'); });
        document.getElementById("button_s").onClick(function () { test('s'); });
        document.getElementById("button_t").onClick(function () { test('t'); });
        document.getElementById("button_u").onClick(function () { test('u'); });
        document.getElementById("button_v").onClick(function () { test('v'); });
        document.getElementById("button_w").onClick(function () { test('w'); });
        document.getElementById("button_x").onClick(function () { test('x'); });
        document.getElementById("button_y").onClick(function () { test('y'); });
        document.getElementById("button_z").onClick(function () { test('z'); });
        document.getElementById("button_stimmts").onClick(function () { worttest(document.getElementById("geraten").value); });
    }
}

var zufallswort = new String();
var wortklein = new String();
var richtige_b = 0;
var liste = new String();
var listeklein = new String();
var listeklein = new Array();
var alt = new Array();
var bstaben = new Array();
var FehlVersuche = 0;
var geratenw = new String();

const wortListe = new Array("Hausaufgabe", "Brahmaputra", "Otto", "Oblivion", "Nilpferd", "Mampfred", "Hangman", "Haifisch", "Brille", "Hippopotamus", "Zwergflusspferd", "Textlaufrichtung", "Liebesgedicht", "Sommerhimmel", "Phasenverschiebung", "Auszeichnung", "Beutelwolf", "Trochilidae", "Segler", "Wirbeltier", "Fortpflanzung", "Rinderbandwurm", "siebenbundzwanzig", "Erkrankung", "Autohof", "Wurm", "Projektor", "Homepage", "Willibald", "Laufwerk", "Flugzeugmontagenhallenchefhut", "Symptome", "Finne", "Lebenszyklus", "Opfer", "Velociraptor", "Computer", "Hauptbahnhof", "Megalodon", "Luftzirkulation", "Schornstein");

function bildwechsel(bildnummer) {
    //bildnummer++;
    document.getElementById("mann").src = "/images/wahlkurse/theHomepageGames/hangman" + bildnummer + ".png";
}

function get_rnd_word_from_array(altes) {
    var zufall = Math.random();
    zufall = zufall * (altes.length - 1);
    zufall = Math.round(zufall);
    zufallswort = altes[zufall];
    richtige_b = 0;
    liste = zufallswort;
    listeklein = liste.toLowerCase();
    wortklein = listeklein;
    listeklein = listeklein.split("");
    alt = liste.split("");
    bstaben = liste.split("");
    FehlVersuche = 0;

    for (var x = 0; x < bstaben.length; x++) {
        bstaben[x] = "_ ";
        if (x == 0) {
            document.getElementById("wort_iv").firstChild.nodeValue = bstaben[x];
        }
        else {
            document.getElementById("wort_iv").firstChild.appendData(bstaben[x]);
        }
    }

    var ausstring = new String();

    for (x = 0; x < bstaben.length; x++) {
        ausstring = ausstring + "_ ";
    }
    document.getElementById("mann").src = "/images/wahlkurse/theHomepageGames/hangman0.png";
}

function test(bt) {
    testf = 1;
    for (x = 0; x < bstaben.length; x++) {
        if (bt == listeklein[x]) {
            bstaben[x] = alt[x];
            richtige_b++;
            rb = richtige_b;
            testf = 0;

            if (bt == listeklein[x + 1]) {
                alt[x] = bstaben[x + 1];
                richtige_b++;
                testf = 0;
            }
            richtig();

        }
    }
    if (testf != 0) {
        falsch();
    }
}


function richtig() {
    var output = bstaben.join(" ");
    geratenw = bstaben.join("");
    ausstring = output;

    for (y = 0; y < bstaben.length; y++) {
        if (y == 0) {
            document.getElementById("wort_iv").firstChild.nodeValue = bstaben[y];
        }
        else {
            document.getElementById("wort_iv").firstChild.appendData(bstaben[y]);
        }
    }
    if (geratenw == zufallswort) endegut();
}

function falsch() {
    FehlVersuche++;
    bildwechsel(FehlVersuche);
    if (FehlVersuche > 9) {
        verloren();
        return;
    }
}

function worttest(gw) {
    kgw = gw.toLowerCase();
    if (kgw == wortklein) {
        endegut();
    }
    else {
        falsch();
    }
}

function endegut() {
    if (FehlVersuche == 0) {
        alert("Prima, du hattest alles richtig!");
    }
    if (FehlVersuche == 1) {
        alert("Prima, du hattest nur einen Fehlversuch.");
    }
    if (FehlVersuche > 1) {
        alert("Prima, du hattest nur " + FehlVersuche + " Fehlversuche.");
    }
    history.go(0);
}

function verloren() {
    alert("Leider verloren :-(");
    history.go(0);
}
</script>