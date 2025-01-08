function checkScrambledAnswer() {
  const userAnswer = document.getElementById('scrambled-answer').value.trim().toLowerCase();
  const correctAnswer = 'wrestling'; // The correct answer to the scrambled word
  const errorMessage = document.getElementById('error-message');

  if (userAnswer === correctAnswer) {
    document.getElementById('scramble-container').style.display = 'none';
    document.getElementById('next-clue').style.display = 'block';
  } else {
    errorMessage.textContent = 'Incorrect answer. Please try again.';
  }
}
