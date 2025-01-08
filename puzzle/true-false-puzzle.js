function checkAnswer(isTrue) {
  const correctAnswer = false; // The correct answer (The Earth is NOT flat)
  const errorMessage = document.getElementById('error-message');

  if (isTrue === correctAnswer) {
    document.body.innerHTML = `
      <h1>Great job on making it this far!</h1>
      <img src="WMCPortfolio1.png" alt="Portfolio 1">
      <button onclick="goBackToHome()">Back to Home</button>
    `;
  } else {
    errorMessage.textContent = 'Incorrect answer. Please try again.';
  }
}
