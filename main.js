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

const arrInd = () => Math.floor(Math.random() * 9);

const compMarks = () => {
    let markVal = -1;
    
    let ind = arrInd();
    while (arrBoxVals[ind] !== 0 && arrBoxVals.includes(0)) {
        ind = arrInd();
    }

    arrBoxVals[ind] = markVal;

    if (whoStarts === 'computer') {
        markO(arrBoxRefs[ind]);
    } else {
        markX(arrBoxRefs[ind]);
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

}

//Human marks

const humMarks = box => {
    let markVal = 1;

    if (box === leftTop && arrBoxVals[0] === 0) {
        arrBoxVals[0] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === leftMid && arrBoxVals[1] === 0) {
        arrBoxVals[1] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === leftBot && arrBoxVals[2] === 0) {
        arrBoxVals[2] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === centerTop && arrBoxVals[3] === 0) {
        arrBoxVals[3] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === centerMid && arrBoxVals[4] === 0) {
        arrBoxVals[4] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === centerBot && arrBoxVals[5] === 0) {
        arrBoxVals[5] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === rightTop && arrBoxVals[6] === 0) {
        arrBoxVals[6] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === rightMid && arrBoxVals[7] === 0) {
        arrBoxVals[7] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else if (box === rightBot && arrBoxVals[8] === 0) {
        arrBoxVals[8] = markVal;
        if (whoStarts === 'human') {
            box.innerHTML = `<p class='marked o'>${o}</p>`;
        } else {
            box.innerHTML = `<p class='marked x'>${x}</p>`;
        }
    } else {
        console.log('already occupied value');
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
    
}

//Game running and magic happening

const getWinner = () => {
    if (whoWon === 'computer') {
        console.log('computer');
    } else if (whoWon === 'human') {
        console.log('human');
    } else {
        console.log('nobody');
    }
}

const gameRun = () => {

    if (whoStarts === 'computer' && whoWon === '') {
        if (turnCount % 2 === 0) {
            compMarks();
            turnCountIncrements();
            getWinner();
        } else {
            leftTop.onclick = () => {
                humMarks(leftTop);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            } 
            leftMid.onclick = () => {
                humMarks(leftMid);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            leftBot.onclick = () => {
                humMarks(leftBot);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            centerTop.onclick = () => {
                humMarks(centerTop);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            centerMid.onclick = () => {
                humMarks(centerMid);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            centerBot.onclick = () => {
                humMarks(centerBot);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            rightTop.onclick = () => {
                humMarks(rightTop);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            rightMid.onclick = () => {
                humMarks(rightMid);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            rightBot.onclick = () => {
                humMarks(rightBot);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
        }
    } else if (whoStarts === 'human' && whoWon === '') {
        if (turnCount % 2 === 0) {
            leftTop.onclick = () => {
                humMarks(leftTop);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            } 
            leftMid.onclick = () => {
                humMarks(leftMid);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            leftBot.onclick = () => {
                humMarks(leftBot);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            centerTop.onclick = () => {
                humMarks(centerTop);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            centerMid.onclick = () => {
                humMarks(centerMid);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            centerBot.onclick = () => {
                humMarks(centerBot);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            rightTop.onclick = () => {
                humMarks(rightTop);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            rightMid.onclick = () => {
                humMarks(rightMid);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
            rightBot.onclick = () => {
                humMarks(rightBot);
                turnCountIncrements();
                compMarks();
                turnCountIncrements();
                getWinner();
            }
        } else {
            compMarks();
            turnCountIncrements();
            getWinner();
        }
    } else {
        console.log('gameRun() bug');
    }


}


//Messages for future me
console.log('Message for the future me: (1) I have to run gameRun() twice ehen computer starts in order for human to be able to make a turn; (2) Computer keeps playing even after the winner is chosen,;');
