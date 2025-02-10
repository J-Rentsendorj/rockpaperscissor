function playGame() {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    const choices = ['R', 'P', 'S'];

    do {
        let userChoice = prompt("Enter R for Rock, P for Paper, or S for Scissors:").toUpperCase();
        if (!choices.includes(userChoice)) {
            alert("Invalid input. Please enter R, P, or S.");
            continue;
        }

        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        alert(`Computer chose: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert("It's a tie!");
            ties++;
        } else if (
            (userChoice === 'R' && computerChoice === 'S') ||
            (userChoice === 'P' && computerChoice === 'R') ||
            (userChoice === 'S' && computerChoice === 'P')
        ) {
            alert("You win!");
            wins++;
        } else {
            alert("You lose!");
            losses++;
        }

        alert(`Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`);
    } while (confirm("Do you want to play again?"));

    alert("Thanks for playing!");
}

playGame();
