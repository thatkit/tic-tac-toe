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

//Winning combinations variables

let leftCol;
let centerCol;
let rightCol;
let topRow;
let midRow;
let botRow;
let ltrb;
let rtlb;

//Updates winning combinations

const updateWinCombs = () => {
    leftCol = arrBoxVals[0] + arrBoxVals[1] + arrBoxVals[2];
    centerCol = arrBoxVals[3] + arrBoxVals[4] + arrBoxVals[5];
    rightCol = arrBoxVals[6] + arrBoxVals[7] + arrBoxVals[8];
    topRow = arrBoxVals[0] + arrBoxVals[3] + arrBoxVals[6];
    midRow = arrBoxVals[1] + arrBoxVals[4] + arrBoxVals[7];
    botRow = arrBoxVals[2] + arrBoxVals[5] + arrBoxVals[8];
    ltrb = arrBoxVals[0] + arrBoxVals[4] + arrBoxVals[8];
    rtlb = arrBoxVals[6] + arrBoxVals[4] + arrBoxVals[2];
}

//Counts which turn it is

let turnCount = 0;

const turnCountIncrements = () => turnCount++;

/*
User-end interactions
*/

//Marking X or O

const x = 'X';
const o = 'O';

const markX = val => val.innerHTML = `<p class='marked x'>${x}</p>`;
const markO = val => val.innerHTML = `<p class='marked o'>${o}</p>`;

//Computer marks boxes, updates the winning combinations, increments round number

let whoWon = '';

const compMarks = () => {
    let markVal = -1;
    
    let arrInd = Math.floor(Math.random() * 9);
    arrBoxVals[arrInd] = markVal;

    if (whoStarts === 'computer') {
        markO(arrBoxRefs[arrInd]);
    } else {
        markX(arrBoxRefs[arrInd]);
    }

    updateWinCombs();

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

    turnCountIncrements();
}

//Human marks

const humMarks = box => {
    let markVal = 1;
    
    switch (box) {
        case leftTop:
            arrBoxVals[0] = markVal;
            break;
        case leftMid:
            arrBoxVals[1] = markVal;
            break;
        case leftBot:
            arrBoxVals[2] = markVal;
            break;
        case centerTop:
            arrBoxVals[3] = markVal;
            break;
        case centerMid:
            arrBoxVals[4] = markVal;
            break;
        case centerBot:
            arrBoxVals[5] = markVal;
            break;
        case rightTop:
            arrBoxVals[6] = markVal;
            break;
        case rightMid:
            arrBoxVals[7] = markVal;
            break;
        case rightBot:
            arrBoxVals[8] = markVal;
            break;
        default:
            console.log('something wrong with humMarks() func');
            break;
    }

    if (whoStarts === 'human') {
        box.onclick = () => box.innerHTML = `<p class='marked o'>${o}</p>`;
    } else {
        box.onclick = () => box.innerHTML = `<p class='marked x'>${x}</p>`;
    }

    updateWinCombs();

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
    
    turnCountIncrements();
}

leftTop.onclick = () => humMarks(leftTop);
leftMid.onclick = () => humMarks(leftMid);
leftBot.onclick = () => humMarks(leftBot);
centerTop.onclick = () => humMarks(centerTop);
centerMid.onclick = () => humMarks(centerMid);
centerBot.onclick = () => humMarks(centerBot);
rightTop.onclick = () => humMarks(rightTop);
rightMid.onclick = () => humMarks(rightMid);
rightBot.onclick = () => humMarks(rightBot);




//Tests (console output)

//Messages for future me
console.log('There has to be a logic to prevent "O" and "X" from overlapping each other.');
