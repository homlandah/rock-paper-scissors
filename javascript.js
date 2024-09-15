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
}



