function checkRiddleAnswer() {
  const userAnswer = document.getElementById('riddle-answer').value.trim().toLowerCase();
  const correctAnswer = 'tomorrow'; // The correct answer to the riddle
  const errorMessage = document.getElementById('error-message');

  // Check if the answer is correct
  if (userAnswer === correctAnswer) {
    // Display the next clue (portfolio images)
    document.getElementById('riddle-container').style.display = 'none';
    document.getElementById('next-clue').style.display = 'block';
  } else {
    // Show error message
    errorMessage.textContent = 'Incorrect answer. Please try again.';
  }
}
