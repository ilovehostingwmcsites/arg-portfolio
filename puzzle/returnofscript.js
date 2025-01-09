function checkPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'AndItEnds'; // Replace with actual password

  const errorMessage = document.getElementById('error-message');

  // Check if the entered password is correct
  if (input === correctPassword) {
    // Store the completion of the first puzzle in localStorage
    localStorage.setItem('firstPuzzleCompleted', 'true');
    
    // Show the portfolio images and the back to home button
    document.body.innerHTML = `
      <h1>Well done! You've solved the puzzle.</h1>
      <img src="WMCPortfolio5.png" alt="Portfolio 5">
      <button onclick="goBackToHome()">Back to Home</button>
    `;
  } else {
    // Show error message
    errorMessage.textContent = 'Incorrect password. Please try again.';
    errorMessage.style.color = 'red';
  }
}
function goBackToHome() {
  window.location.href = 'https://ilovehostingwmcsites.github.io/arg-portfolio/';  // Redirect to your homepage
}
