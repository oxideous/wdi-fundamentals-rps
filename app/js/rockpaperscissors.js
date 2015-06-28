function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(playerMove) {
    return playerMove || getInput(); 
}

function getComputerMove(computerMove) {
    return computerMove || randomPlay();
}
function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    console.log("You choose " + playerMove + ".");
    console.log("The computer chose " + computerMove + ".");
    if (playerMove === computerMove) {
        console.log("It's a tie.")
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        console.log("You win!")
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        console.log("You win!")
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        console.log("You win!")
        winner = "player";
    }
    else {
        console.log("You lose!")
        winner = "computer";
    }
    return winner;
}
function playAgain (answer) {
    var answer = prompt("Would you like to play again?","Y/N");
        if (answer === "Y" || answer === "Yes" || answer === "y" || answer === "yes") {
            playToFive();
        }
        else if (answer === "N" || answer ==="No" || answer === "n" || answer === "no") {
            console.log("Goodbye!");
        }
        else {
            playAgain()
    }
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! Think you can beat the computer?  First to five wins!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) { 
        console.log("Starting round ");   
        var checkWinner = getWinner();
        if (checkWinner === 'player') {
            playerWins = playerWins + 1;
            console.log("You have now won " + playerWins + " rounds.");
            console.log("The computer has won " + computerWins + ".");
        } 
        else if (checkWinner === 'computer') {
            computerWins = computerWins + 1;
            console.log("The computer has now won " + computerWins + " rounds.");
            console.log("You have won " + playerWins + ".");
        }
        if (playerWins === 5) {
            console.log("You win the game!");
            console.log("Play Again!");  
        }
        else if (computerWins === 5) {
            console.log("The computer won the game... Too bad.");
            console.log("Play Again!");
        }
        
    }
    playAgain();  
}