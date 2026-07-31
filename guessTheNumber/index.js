const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MAX_ATTEMPTS = 10;
const secretNumber = Math.floor(Math.random()*100) + 1;

let attempts = 0;

function askGuess() {
    rl.question(`Attempt ${attempts + 1}/${MAX_ATTEMPTS}\n Guess a number(1-100): `,
        function(answer) {

        const guess = Number(answer);
        
        if (Number.isNaN(guess)) {
            console.log("Please enter a valid number");
            return askGuess();
        }

        attempts++;
        
        if (guess === secretNumber) {
            console.log(`Correct! You took ${attempts} guesses.`);
            rl.close();
            return;
        }

        if (attempts >= MAX_ATTEMPTS) {
            console.log(`You lost! The number was ${secretNumber}.`);            rl.close();
            return;
        }

        if (guess < secretNumber) {
            console.log("Too Low!");
        } else {
            console.log("Too high!");
        }

        askGuess();
    });
}

askGuess();