//create funtion to play one round
function playRound() {

//computer makes a random choice from rock, paper, or scissor and saves to variable
//in a function create random number from one to three
randomNumber = Math.floor(Math.random()*3) + 1;

//in the same function if one then return string 'rock', if two then 'paper', if three then 'scissor'
if (randomNumber === 1) {
computerSelection = 'rock';
} else if (randomNumber === 2) {
computerSelection = 'paper';
} else if (randomNumber === 3) {
computerSelection = 'scissors';
}

console.log(computerSelection);

//user makes choice using prompt and typing rock, paper, or scissor and saves to variable
let userSelection = prompt('じゃんけんぽん!!', '');

//change userSelection to lowercase
userSelection = userSelection.toLowerCase();

//conditinal determines who won, computer or user then console logs string congratulating or commiserating
if ((userSelection === 'rock' && computerSelection === 'scissors') || (userSelection === 'scissors' && computerSelection === 'paper') || (userSelection === 'paper' && computerSelection === 'rock')) {
alert('The battle was long but your brains and might prevailed. You won!');
} else if (userSelection === computerSelection) {
playDraw();
} else if (userSelection === '') {
alert('Scared bro? Reload and let\'s do this');
} else if (userSelection != 'rock' && userSelection != 'scissors' && userSelection != 'paper') {
alert("The options are 'rock' 'paper' or 'scissors you pillock. Again.");
playRound();
} else {
alert('ROFL, Loser!');
}
playRound();
}

//function to run if there's a draw
function playDraw() {

//computer chooses again
randomNumber = Math.floor(Math.random()*3) + 1;

if (randomNumber === 1) {
computerSelection = 'rock';
} else if (randomNumber === 2) {
computerSelection = 'paper';
} else if (randomNumber === 3) {
computerSelection = 'scissors';
}

console.log(computerSelection);

//user makes choice using new draw prompt
let userSelection = prompt("It was a draw let\'s go again big shlong! I got this!", '');

//change userSelection to lowercase
userSelection = userSelection.toLowerCase();

//conditinal determines who won, computer or user then console logs string congratulating or commiserating
if ((userSelection === 'rock' && computerSelection === 'scissors') || (userSelection === 'scissors' && computerSelection === 'paper') || (userSelection === 'paper' && computerSelection === 'rock')) {
alert('The battle was long but your brains and might prevailed. You won!');
} else if (userSelection === computerSelection) {
    playDraw(); 
} else if (userSelection === '') {
    alert('Scared bro? Reload and let\'s do this');
} else if (userSelection != 'rock' && userSelection != 'scissors' && userSelection != 'paper') {
   alert("The options are 'rock' 'paper' or 'scissors you pillock. Again.");
   playRound();
} else if (userSelection === computerSelection) {
    playDraw(); 
} else {
alert('ROFL, Loser!');
}
playRound();
}

playRound();