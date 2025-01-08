function checkAnswer(isTrue) {
  const correctAnswer = false; // The correct answer (The Earth is NOT flat)
  const errorMessage = document.getElementById('error-message');

  if (isTrue === correctAnswer) {
    document.getElementById('true-false-container').style.display = 'none';
    document.getElementById('next-clue').style.display = 'block';
  } else {
    errorMessage.textContent = 'Incorrect answer. Please try again.';
  }
}
