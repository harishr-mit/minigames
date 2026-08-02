const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function app() {
console.log("================================");
console.log(" Rock Paper Scissor Lizardd Spock Game");
console.log("================================");
console.log("1. Rock");
console.log("2. Paper");
console.log("3. Scissors");
console.log("4. Lizard");
console.log("5. Spock");
console.log("0. Exit");

rl.question("Choose Your Move (Press '0' to Exit): ",
    function (answer) {
        console.log("You entered: ", answer);

        const choice = Number(answer);

        if (choice === 0) {
            console.log("Game Exited. Thanks for playing!");
            rl.close();
            return;
        }

        if (choice < 1 || choice > 5) {
            console.log("Invalid choice.");

            return app();
        }

        const computerChoice = Math.floor(Math.random() * 5) + 1;

        console.log("You chose: ", getChoiceName(choice));
        console.log("Computer chose: ", getChoiceName(computerChoice));

        console.log(determineWinner(choice, computerChoice));
        
        app();
    }
);
}

function getChoiceName(choice) {
    switch (choice) {

        case 1:
            return "Rock";

        case 2:
            return "Paper";

        case 3:
            return "Scissors";

        case 4:
            return "Lizard";

        case 5:
            return "Spock";

        default:
            return "Unknown";
    }
}

function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a Draw!";
    }

    if ((playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 1 && computerChoice === 4) ||

        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 2 && computerChoice === 5) ||

        (playerChoice === 3 && computerChoice === 2) ||
        (playerChoice === 3 && computerChoice === 4) ||

        (playerChoice === 4 && computerChoice === 2) ||
        (playerChoice === 4 && computerChoice === 5) ||

        (playerChoice === 5 && computerChoice === 1) ||
        (playerChoice === 5 && computerChoice === 3)) {
        return "You Win!";
    }

    return "Computer Wins! MWAHAHAHA! Try Again.";
}

app();