function checkRiddleAnswer() {
  const userAnswer = document.getElementById('riddle-answer').value.trim().toLowerCase();
  const correctAnswer = 'tomorrow'; // The correct answer to the riddle
  const errorMessage = document.getElementById('error-message');

  // Check if the answer is correct
  if (userAnswer === correctAnswer) {
    // Display the next clue (portfolio images)
    document.body.innerHTML = `
      <h1>Well done! You've solved the puzzle.</h1>
      <img src="WMCPortfolio3.png" alt="Portfolio 3">
      <button onclick="goBackToHome()">Back to Home</button>
    `;
  } else {
    // Show error message
    errorMessage.textContent = 'Incorrect answer. Please try again.';
  }
}
function goBackToHome() {
  window.location.href = 'https://ilovehostingwmcsites.github.io/arg-portfolio/';  // Redirect to your homepage
}
