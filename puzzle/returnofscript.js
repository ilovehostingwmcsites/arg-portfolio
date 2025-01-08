function checkPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'password'; // Replace this with the actual password

  const errorMessage = document.getElementById('error-message');

  // Check if the entered password is correct
  if (input === correctPassword) {
    // Show the two portfolio images and the back to home button
    document.body.innerHTML = `
      <h1>Well done! You've solved the puzzle.</h1>
      <img src="WMCPortfolio1.png" alt="Portfolio 1">
      <img src="WMCPortfolio2.png" alt="Portfolio 2">
      <button onclick="goBackToHome()">Back to Home</button>
    `;
  } else {
    // Show error message
    errorMessage.textContent = 'Incorrect password. Please try again.';
    errorMessage.style.color = 'red';
  }
}

function goBackToHome() {
  window.location.href = 'index.html';  // Redirect to the homepage (index.html)
}
