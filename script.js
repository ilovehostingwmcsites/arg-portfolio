function verifyPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = 'correctpassword'; // Replace with your actual password
  const errorMessage = document.getElementById('error-message');
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const instructionMessage = document.getElementById('instruction-message');

  if (input === correctPassword) {
    document.getElementById('lockscreen').style.display = 'none'; // Hide the lock screen
    sidebar.classList.add('visible'); // Show the sidebar
    hamburger.style.display = 'none'; // Hide the hamburger icon
    instructionMessage.style.display = 'block'; // Show the instruction message

    // Optionally, highlight the first date link in the sidebar
    const firstDateLink = sidebar.querySelector('a'); // Assuming the first link is the first <a> tag
    firstDateLink.style.backgroundColor = '#4CAF50'; // Change background color to highlight
    firstDateLink.style.color = 'white'; // Make text color white for contrast
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
