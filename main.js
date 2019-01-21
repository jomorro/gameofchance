let playerDiv = document.getElementById("playerBox");
let computerDiv = document.getElementById("computerBox");
let computerChoice = "";


let randomNumber1to3 = Math.floor(Math.random() * 3 + 1)

if (randomNumber1to3 == 3) {
    computerChoice = "rock";
} else if (randomNumber1to3 == 2) {
    computerChoice = "scissors"
} else {
    computerChoice = "paper"
};


let playerChoice = prompt("Choose your weapon. Will it be 'paper', 'rock', or 'scissors'?");
    if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper"){
        alert("That is not a weapon you may choose! Refresh the page and choose again!");
    }


let compare = function (playerChoice, computerChoice) {
    console.log("Player chooses--", playerChoice, "Computer chooses--", computerChoice);
    if (playerChoice === computerChoice) {
        alert("The result is a tie!");
        return;
    };
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("You win with rock!");
        } else {
            alert("Computer wins with paper!");
        };
    };
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You win with paper!");
        } else {
            alert("Computer wins with scissors!");
        };
    };
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            alert("You win with scissors");
        } else {
            alert("Computer wins with rock!");
        };
    };
};


compare(playerChoice, computerChoice);
