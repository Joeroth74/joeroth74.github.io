<template>
    <p>
        Lorem ipsum dolor sit amet <b id="bold">consectetur</b> adipisicing elit. Cumque architecto labore <i
            id="italicized">accusantium</i> asperiores voluptatibus cum, facere expedita corrupti rem, explicabo placeat
        ipsa non ullam sunt doloribus sit esse reprehenderit voluptas!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit facilis, <b
            id="bold">perspiciatis</b>, doloremque officia delectus <i id="italicized">eveniet</i> ad necessitatibus
        quia maiores fuga velit. Qui nostrum neque cum at, magnam incidunt laboriosam.
    </p>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quaerat quae cum sunt corporis consequuntur
        vel provident perspiciatis et <b id="bold">dolores</b> doloribus, ducimus officia consectetur, delectus illo
        voluptate <i id="italicized">fuga</i> molestiae temporibus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem odit modi, magni <i
            id="italicized">accusamus</i> laudantium iure saepe quod nemo, eveniet rerum cum! Eos ipsam iusto laborum
        quia placeat similique <b id="bold">veritatis</b> minus.
    </p>
    <h1 id="title">Play TicTacToe</h1>
    <div v-if="winner" id="turn">Player {{ winner }} Wins!</div>
    <div v-else id="turn">Player {{ player }}'s Turn</div>
    <table>
        <tbody>
            <tr v-for="(row, x) in board" :key="x">
                <td v-for="(cell, y) in row" :key="y" @click="move(x, y)">
                    {{ cell }}
                </td>
            </tr>
        </tbody>
    </table>
    <button id="reset" @click="resetGame">Reset Game</button>
</template>

<style>
p {
    margin: auto;
    padding: 15px;
    color: hsl(0, 0%, 80%);
}

#bold {
    color: hsl(280, 70%, 70%);
}

#italicized {
    color: hsl(280, 70%, 70%);
}

h1 {
    margin: 0;
    padding: 5px;
    color: hsl(0, 0%, 80%);
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}

#turn {
    margin: auto;
    padding: 5px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
    background-color: hsl(0, 0%, 80%);
    width: 340px;
}

table {
    margin: auto;
}

tbody {
    padding: 10px;
    display: block;
}

td {
    border: 5px solid hsl(0, 0%, 80%);
    color: hsl(280, 70%, 60%);
    width: 100px;
    height: 100px;
    font-size: 40px;
    text-align: center;
    font-family: sans;
}

td:hover {
    cursor: pointer;
}

td:nth-child(1) {
    border-left: black;
}

td:nth-child(3) {
    border-right: none;
}

tr:nth-child(1)>td {
    border-top: none;
}

tr:nth-child(3)>td {
    border-bottom: none;
}

#reset {
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 5px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
    background-color: hsl(0, 0%, 80%);
    width: 160px;
}
</style>

<script setup>
import { ref, computed } from "vue";

const player = ref('X');
const board = ref([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]);

const calculateWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const winner = computed(() => calculateWinner(board.value.flat()));

const move = (x, y) => {
    if (winner.value) return;

    if (board.value[x][y] !== '') return;

    board.value[x][y] = player.value;

    if (player.value == 'X') {
        player.value = 'O';
    } else {
        player.value = 'X';
    }
};

const resetGame = () => {
    board.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    player.value = 'X';
};
</script>