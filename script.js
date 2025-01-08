function verifyPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'correctpassword'; // Replace with your actual password
  const errorMessage = document.getElementById('error-message');
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');

  if (input === correctPassword) {
    document.getElementById('lockscreen').style.display = 'none'; // Hide the lock screen
    sidebar.classList.add('visible'); // Make the sidebar visible
    hamburger.style.display = 'none'; // Hide the hamburger icon after the sidebar appears
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
    errorMessage.style.color = 'red';
  }
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  
  // Toggle the visibility of the sidebar and the hamburger icon
  sidebar.classList.toggle('visible');
  if (sidebar.classList.contains('visible')) {
    hamburger.style.display = 'none'; // Hide hamburger icon when sidebar is visible
  } else {
    hamburger.style.display = 'block'; // Show hamburger icon when sidebar is hidden
  }
}
