function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    } 
}


function getHumanChoice() {
    const humanChoice = window.prompt("Please choose rock, paper or scissors.");
    return humanChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("You lose this round");
        computerScore ++;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win this round!");
        humanScore ++;
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

   
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Unfortunately, you lost this game!");
    } else {
        console.log("It was a tie!");
    }
}

console.log(playGame());



