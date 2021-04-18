/*
1. Pre-game settings
*/

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

const arrBoxRefs = [leftTop, leftMid, leftBot, centerTop, centerMid, centerBot, rightTop, rightMid, rightBot];

// Storing game values of 'X' and 'O' in vars

const x = 'X';
const o = 'O';

// Storing first player button references in vars

const computer = document.getElementById('firstCom');
const human = document.getElementById('firstHum');

//Decides who starts the game (computer or human) and displays the result on the screen

let whoStarts = '';

const hideWhoStartsOptions = () => {
    computer.style.display = 'none';
    human.style.display = 'none';
    document.getElementById('who-starts').textContent = `${whoStarts} starts the game!`;
}

const showTheGameField = () => document.getElementById('game-field').style.display = 'grid';

computer.onclick = () => {
    whoStarts = 'computer';
    hideWhoStartsOptions();
    showTheGameField();
}

human.onclick = () => {
    whoStarts = 'human';
    hideWhoStartsOptions();
    showTheGameField();
}

/*
Game mechanics
*/

//Variables (containers) for boxes

let leftTopVal = 0;
let leftMidVal = 0;
let leftBotVal = 0;
let centerTopVal = 0;
let centerMidVal = 0;
let centerBotVal = 0;
let rightTopVal = 0;
let rightMidVal = 0;
let rightBotVal = 0;

const arrBoxVals = [leftTopVal, leftMidVal, leftBotVal, centerTopVal, centerMidVal, centerBotVal, rightTopVal, rightMidVal, rightBotVal];

//Winning combinations

let leftCol = leftTopVal + leftMidVal + leftBotVal;
let centerCol = centerTopVal + centerMidVal + centerBotVal;
let rightCol = rightTopVal + rightMidVal + rightBotVal;
let topRow = leftTopVal + centerTopVal + rightTopVal;
let midRow = leftMidVal + centerMidVal + rightMidVal;
let botRow = leftBotVal + centerBotVal + rightBotVal;
let ltrb = leftTopVal + centerMidVal + rightBotVal;
let rtlb = rightTopVal + centerMidVal + leftBotVal;

//Checks who the winner is and whether the game is over

let whoWon = '';

const computerWon = () => {
    switch (-3) {
        case leftCol:
        case centerCol:
        case rightCol:
        case topRow:
        case midRow:
        case botRow:
        case ltrb:
        case rtlb:
            whoWon = 'computer';
    }
}

const humanWon = () => {
    switch (3) {
        case leftCol:
        case centerCol:
        case rightCol:
        case topRow:
        case midRow:
        case botRow:
        case ltrb:
        case rtlb:
            whoWon = 'human';
    }
}

//Counts which turn it is

let turnCount = 0;

const turnCountIncrements = () => turnCount++;

/*
User-end interactions
*/

//Marking X or O

const markX = val => val.innerHTML = `<p class='marked-x'>${x}</p>`;
const markO = val => val.innerHTML = `<p class='marked-o'>${o}</p>`;

//Computer marking boxes

const compMarks = () => {
    let markVal = -1;
    
    let arrInd = Math.floor(Math.random() * 9);
    arrBoxVals[arrInd] = markVal;

    if (whoStarts === 'computer') {
        markO(arrBoxRefs[arrInd]);
    } else {
        markX(arrBoxRefs[arrInd]);
    }

    turnCountIncrements();
}






//Tests (console output)
console.log(whoStarts);
