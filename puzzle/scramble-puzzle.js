function checkScrambledAnswer() {
  const userAnswer = document.getElementById('scrambled-answer').value.trim().toLowerCase();
  const correctAnswer = 'WRESTLING'; // The correct answer to the scrambled word
  const errorMessage = document.getElementById('error-message');

  if (userAnswer === correctAnswer) {
    document.body.innerHTML = `
      <h1>Skillfully done. Here's your next piece.</h1>
      <img src="WMCPortfolio1.png" alt="Portfolio 1">
      <button onclick="goBackToHome()">Back to Home</button>
    `;
  } else {
    errorMessage.textContent = 'Incorrect answer. Please try again.';
  }
}
