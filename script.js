function verifyPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'correctpassword'; // replace this later cuh
  const errorMessage = document.getElementById('error-message');
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const instructionMessage = document.getElementById('instruction-message');

  if (input === correctPassword) {
    document.getElementById('lockscreen').style.display = 'none'; // Hide the lock screen
    sidebar.classList.add('visible'); // Show the sidebar
    hamburger.style.display = 'none'; // Hide the hamburger icon
    instructionMessage.style.display = 'block'; // Show the instruction message

    // highlight the first date link in the sidebar
    const firstDateLink = sidebar.querySelector('a'); // assuming the first link is the first <a> tag -- bit hacky but yknow it works LOL
    firstDateLink.style.backgroundColor = '#4CAF50'; // high lighter
    firstDateLink.style.color = 'white'; // return of the white text
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
    errorMessage.style.color = 'red';
  }
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  
  // make burger and sidebar invis or nah
  sidebar.classList.toggle('visible');
  if (sidebar.classList.contains('visible')) {
    hamburger.style.display = 'none'; // Hide hamburger icon when sidebar is visible
  } else {
    hamburger.style.display = 'block'; // Show hamburger icon when sidebar is hidden
  }
}

function checkPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'password'; // Replace this with the actual password

  const errorMessage = document.getElementById('error-message');

  // Check if the entered password is correct
  if (input === correctPassword) {
    // Clear the current content and add the success content
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
  alert("Going back to home...");  // This is just for debugging
  window.location.href = 'index.html';  // Redirect to the homepage
}
