function verifyPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'correctpassword'; // Replace with your actual password
  const errorMessage = document.getElementById('error-message');
  const sidebar = document.getElementById('sidebar');

  if (input === correctPassword) {
    document.getElementById('lockscreen').style.display = 'none'; // Hide the lock screen
    sidebar.classList.remove('hidden'); // Show the sidebar
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
    errorMessage.style.color = 'red';
  }
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}
