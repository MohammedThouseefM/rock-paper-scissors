document.addEventListener("DOMContentLoaded", () => {
    // Game choices
    const choices = ["Rock", "Paper", "Scissors"];
    
    // Selecting elements
    const userPointsElem = document.querySelector(".userpoints");
    const botPointsElem = document.querySelector(".botpoints");
    const botChoiceElem = document.querySelector(".answers:nth-child(1)"); // First <p> in .textanswer
    const userChoiceElem = document.querySelector(".answers:nth-child(2)"); // Second <p> in .textanswer
    const resultElem = document.querySelector(".result");
    const buttons = document.querySelectorAll("input[type='button']");

    // Initial scores
    let userScore = 0;
    let botScore = 0;

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const userChoice = button.value;
            const botChoice = choices[Math.floor(Math.random() * choices.length)];

            // Display choices
            userChoiceElem.textContent = `User choice - ${userChoice}`;
            botChoiceElem.textContent = `Bot choice - ${botChoice}`;

            // Determine winner and update score
            const winner = determineWinner(userChoice, botChoice);
            updateScore(winner);
        });
    });

    // Function to determine the winner
    function determineWinner(user, bot) {
        if (user === bot) return "draw";
        if (
            (user === "Rock" && bot === "Scissors") ||
            (user === "Paper" && bot === "Rock") ||
            (user === "Scissors" && bot === "Paper")
        ) {
            return "user";
        }
        return "bot";
    }

    // Function to update the score and display result
    function updateScore(winner) {
        if (winner === "user") {
            userScore++;
            userPointsElem.textContent = userScore;
            resultElem.textContent = "User Wins 🎉";
        } else if (winner === "bot") {
            botScore++;
            botPointsElem.textContent = botScore;
            resultElem.textContent = "Bot Wins 🤖";
        } else {
            resultElem.textContent = "It's a Draw! 🤝";
        }
    }
});
