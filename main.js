// Storing references to game boxes in vars

const leftTop = document.querySelector('.left.top');
const leftMid = document.querySelector('.left.mid');
const leftBot = document.querySelector('.left.bot');

const centerTop = document.querySelector('.center.top');
const centerMid = document.querySelector('.center.mid');
const centerBot = document.querySelector('.center.bot');

const rightTop = document.querySelector('.right.top');
const rightMid = document.querySelector('.right.mid');
const rightBot = document.querySelector('.right.bot');

// Storing game values of 'X' and 'O' in vars

const x = 'X';
const o = 'O';

// Storing first player button references in vars

const computer = document.getElementById('firstCom');
const human = document.getElementById('firstHum');

//Decides who starts the game (computer or human)

let whoStarts = '';

computer.onclick = () => whoStarts = 'computer';
human.onclick = () => whoStarts = 'human';

// User-end interactions

const markX = val => val.innerHTML = `<p class='marked-x'>${x}</p>`;
const markO = val => val.innerHTML = `<p class='marked-o'>${o}</p>`;

leftTop.onclick = () => {
    markX(leftTop);
}