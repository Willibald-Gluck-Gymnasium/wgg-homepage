<template>
    <table>
        <tr>
            <td>
                <p><span id="text_word" style="text-align:center"></span></p>
                <p>Try Whole Word:</p>
                <p><input id="text_answer" type="text" size="20" value="" /></p>
                <p><input id="button_try" type="button" Value="Try Word" /></p>
            </td>
            <td><img id="image_hangman" src="/images/wahlkurse/theHomepageGames/hangman/start.png" format="png" alt="" />
            </td>
        </tr>
        <tr>
            <td style="width:20em"><input id="button_new" type="button" value="Start New Game" /></td>
            <td>
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
            </td>
        </tr>
    </table>
</template>

<script>
const WORDS = ['monkey', 'gymnasium', 'gluck', 'spotify', 'amazon', 'steuererklaerung', 'wettervorhersage'];

let hasGame = false;
let failCount = 0;
let solution = '';
let already = [];

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateUI() {

    const img = (failCount > 9 ? 'game_over' : failCount > 0 ? 'fail_' + failCount : 'start');

    const image_hangman = document.getElementById('image_hangman');
    image_hangman.setAttribute('src', '/images/wahlkurse/theHomepageGames/hangman/' + img + '.png');

    let word = '';
    for (let i = 0; i < solution.length; i++) {
        const index = already.indexOf(solution.at(i));
        if (index < 0) word += '*';
        else word += solution.at(i);
    }

    const text_word = document.getElementById('text_word');
    text_word.textContent = word;
}

/**
 * start a new game
 */
function newGame() {
    solution = WORDS[randomInt(WORDS.length)];
    already = [];

    failCount = 0;
    hasGame = true;

    updateUI();
}

function onGameOver(isWin) {
    if (!hasGame) return;

    failCount = 0;
    hasGame = false;

    updateUI();
}

/**
 * function for checking for a single character
 */
function checkCharacter(character) {
    if (!hasGame) return;

    if (already.indexOf(character) >= 0) return;
    already.push(character);

    const index = solution.search(character);
    if (index < 0) onFail();

    updateUI();
}

/**
 * function for checking for a full word
 */
function checkWord(word) {
    if (!hasGame) return;

    if (already.indexOf(word) >= 0) return;

    if (word === solution) onGameOver(true);
    else onFail();

    updateUI();
}

function onFail() {
    if (!hasGame) return;

    failCount++;
    if (failCount > 9) onGameOver(false);

    updateUI();
}

export default {
    mounted() {
        // Set up all the input listeners for the different buttons
        const button_new = document.getElementById('button_new');
        button_new.addEventListener('click', () => newGame());

        const button_try = document.getElementById('button_try');
        button_try.addEventListener('click', () => {
            const text_answer = document.getElementById('text_answer');
            checkWord(text_answer.value);
        })

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < alphabet.length; i++) {
            const character = alphabet.charAt(i);
            const button = document.getElementById('button_' + character);
            button.addEventListener('click', () => checkCharacter(character));
        }

        const text_answer = document.getElementById('text_answer');
        text_answer.addEventListener('keydown', (event) => {
            if (event.key === 'Enter')
                checkWord(text_answer.value);
        });
    }
}
</script>