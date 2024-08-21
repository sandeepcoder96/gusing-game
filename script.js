document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const attempts = document.getElementById('attempts');
    const restartButton = document.getElementById('restartButton');

    let randomNumber;
    let attemptCount = 0;

    function startGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptCount = 0;
        feedback.textContent = '';
        attempts.textContent = '';
        restartButton.style.display = 'none';
        guessInput.disabled = false;
        submitGuess.disabled = false;
        guessInput.value = '';
        guessInput.focus();
    }

    function checkGuess() {
        const userGuess = Number(guessInput.value);
        attemptCount++;

        if (userGuess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${attemptCount} attempts.`;
            feedback.style.color = 'green';
            guessInput.disabled = true;
            submitGuess.disabled = true;
            restartButton.style.display = 'inline';
        } else if (userGuess < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'red';
        } else if (userGuess > randomNumber) {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'red';
        }

        attempts.textContent = `Attempts: ${attemptCount}`;
    }

    submitGuess.addEventListener('click', checkGuess);
    restartButton.addEventListener('click', startGame);

    // Start the game when the page loads
    startGame();
});
