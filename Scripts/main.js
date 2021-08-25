
//computer makes a random choice from rock, paper, or scissor and saves to variable
//-- in a function create random number from one to three

randomNumber = Math.floor(Math.random()*3) + 1;

//-- in the same function if one then return string 'rock', if two then 'paper', if three then 'scissor'

if (randomNumber === 1) {
    computerSelection = 'rock';
} else if (randomNumber === 2) {
    computerSelection = 'paper';
} else if (randomNumber === 3) {
        computerSelection = 'scissors';
}

console.log(computerSelection);


//-- create funtion to play one round
function playRound() {

//user makes choice using prompt and typing rock, paper, or scissor and saves to variable
let userSelection = prompt('じゃんけんぽん!!', '');

//change userSelection to lowercase
if (userSelection != '') {
userSelection = userSelection.toLowerCase();
console.log(userSelection);
}

//conditinal determines who won, computer or user then console logs string congratulating or commiserating
if ((userSelection === 'rock' && computerSelection === 'Scissors') || (userSelection === 'scissors' && computerSelection === 'Paper') || (userSelection === 'paper' && computerSelection === 'Rock')) {
    console.log('The battle was long but your brains and might prevailed. You won!');
} else if (userSelection === computerSelection) {
playDraw();
} else if (userSelection === '') {
    console.log('Scared bro? Reload and let\'s do this');
} else {
    console.log('ROFL, Loser!');
}
}

playRound();
playRound();


//function to run if there's a draw
function playDraw() {

    //user makes choice using prompt and typing rock, paper, or scissor and saves to variable
let userSelection = prompt('It was a draw let\s go again big shlong! I got this!', '');

//change userSelection to lowercase
if (userSelection != '') {
userSelection = userSelection.toLowerCase();
console.log(userSelection);
}

//conditinal determines who won, computer or user then console logs string congratulating or commiserating
if ((userSelection === 'rock' && computerSelection === 'Scissors') || (userSelection === 'scissors' && computerSelection === 'Paper') || (userSelection === 'paper' && computerSelection === 'Rock')) {
    console.log('The battle was long but your brains and might prevailed. You won!');
} else if (userSelection === '') {
    console.log('Scared bro? Reload and let\'s do this');
} else {
    console.log('ROFL, Loser!');
}
}