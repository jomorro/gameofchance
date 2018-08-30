let userChoice = prompt("Do you choose rock, paper, or scissors?");
let computerChoice = Math.ceil(Math.random() * 3);

if (computerChoice == 1) {
    computerChoice = "rock";
} else if (computerChoice == 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

function compareChoices(choice1, choice2) {

    let text;

    if (choice1 === choice2) {
        text = "Draw";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            text = "Rock beats scissors! You win!";
        } else {
            text = "Paper beats rock! Computer wins!";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            text = "Paper beats Rock! You win!";
        } else {
            return "Scissors beats paper! Computer wins!";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            text = "Rock beats scissors. Computer wins!";
        } else {
            text = "Scissors beats paper! You win!";
        }
    }
    document.getElementById("winner").innerHTML = text;
};
compareChoices(userChoice, computerChoice);