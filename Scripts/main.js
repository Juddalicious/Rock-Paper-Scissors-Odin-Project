
//computer makes a random choice from rock, paper, or scissor and saves to variable
//-- in a function create random number from one to three

randomNumber = Math.floor(Math.random()*3) + 1;


//-- in the same function if one then return string 'rock', if two then 'paper', if three then 'scissor'

if (randomNumber === 1) {
    computerSelection = 'Rock';
} else if (randomNumber === 2) {
    computerSelection = 'Paper';
} else if (randomNumber === 3) {
        computerSelection = 'Scissors';
}



//-- call function and asign to variable



//user makes choice using prompt and typing rock, paper, or scissor and saves to variable

let userSelection = prompt('じゃんけんぽん!!', '');

//conditinal determines who won, computer or user then console logs string congratulating or commiserating

if ((userSelection === 'Rock' && computerSelection === 'Scissors') || (userSelection === 'Scissors' && computerSelection === 'Paper') || (userSelection === 'Paper' && computerSelection === 'Rock')) {
    console.log('The battle was long but your brains and might prevailed. You won!');
} else {
    console.log('ROFL, Loser!');
}