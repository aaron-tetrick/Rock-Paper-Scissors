//DOM Manipulation selectors
let rock = document.getElementById('rock-btn');
let paper = document.getElementById('paper-btn');
let scissors = document.getElementById('scissors-btn');
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('computer-score');
let results = document.querySelector('#results');
let winner = document.querySelector('#winner');
let restart = document.getElementById('restart');
let buttons = document.getElementById('buttons');

//Starting scores
let playerScore = 0;
let computerScore = 0;


//Selecting a weapon Event Listeners
rock.addEventListener('click', choseRock);
paper.addEventListener('click', chosePaper);
scissors.addEventListener('click', choseScissors);



//Computers' random choice
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection;
    }



//DOM Functions


//If player chooses Rock
function choseRock(){

const computerSelection = computerPlay();

 if (computerSelection === 'Scissors'){ 
    playerScore++;    
    results.textContent = "You win! Rock beats Scissors";
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    results.classList.add('results');
    declareWinner();

 } else if (computerSelection === 'Paper'){
     computerScore++;
    results.textContent = "You lose! Paper beats Rock";
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    results.classList.add('results');
    declareWinner();
    
 } else if (computerSelection === 'Rock') {
     results.textContent = "It's a tie!";
     userScore.textContent = playerScore;
     compScore.textContent = computerScore;
     results.classList.add('results');
     declareWinner();
 }

}


//If player chooses Paper
function chosePaper(){
 
const computerSelection = computerPlay();

 if (computerSelection === 'Rock'){ 
     playerScore++;    
    results.textContent = "You win! Paper beats Rock";
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    results.classList.add('results');
    declareWinner();

 } else if (computerSelection === 'Scissors'){
     computerScore++;
    results.textContent = "You lose! Scissors beats Paper";
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    results.classList.add('results');
    declareWinner();

 } else if (computerSelection === 'Paper') {
     results.textContent = "It's a tie!";
     userScore.textContent = playerScore;
     compScore.textContent = computerScore;
     results.classList.add('results');
     declareWinner();
 }

}




//If player chooses Scissors
function choseScissors(){
    const computerSelection = computerPlay();

 if (computerSelection === 'Paper'){ 
     playerScore++;    
    results.textContent = "You win! Scissors beats Paper";
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    results.classList.add('results');
    declareWinner();

 } else if (computerSelection === 'Rock'){
     computerScore++;
    results.textContent = "You lose! Rock beats Scissors";
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    results.classList.add('results');
    declareWinner();

 } else if (computerSelection === 'Scissors') {
     results.textContent = "It's a tie!";
     userScore.textContent = playerScore;
     compScore.textContent = computerScore;
     results.classList.add('results');
     declareWinner();
 }

}


//Declares a winner after someone reaches 5 points
function declareWinner() {
    if (playerScore === 5) {
        winner.textContent = "Congratulations! You won!";
        winner.style.color = "green";
        userScore.style.fontWeight = 'bold';
        userScore.style.color = "rgb(25, 80, 126)";
        buttons.style.display = 'none'
        restart.style.display = "flex";
        restart.addEventListener('click', restartGame);
    } else if (computerScore === 5){
        winner.textContent = "You lost the game.";
        winner.style.color = "red";
        compScore.style.fontWeight = 'bold';
        compScore.style.color = "rgb(25, 80, 126)";
        buttons.style.display = 'none'
        restart.style.display = "flex";
        restart.addEventListener('click', restartGame);

    } 
}


//Resets the game
function restartGame() {
    results.textContent = "Select a weapon";
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    userScore.style.fontWeight = 'normal';
    compScore.style.fontWeight = 'normal';
    userScore.style.color = "black";
    compScore.style.color = "black";
    winner.textContent = '';
    restart.style.display = 'none';
    buttons.style.display = 'flex';
}