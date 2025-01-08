// Function to create puzzle pieces from the image
function createPuzzle() {
  const puzzleContainer = document.getElementById('puzzle-container');
  const puzzleImage = new Image();
  puzzleImage.src = 'intro-letter.jpg'; // Replace with the image you want to use for the puzzle
  puzzleImage.onload = () => {
    const pieces = [];
    const rows = 3;  // Number of rows in the grid
    const cols = 3;  // Number of columns in the grid

    // Split the image into puzzle pieces
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundImage = `url(${puzzleImage.src})`;
        piece.style.backgroundPosition = `-${j * 100}px -${i * 100}px`;
        piece.setAttribute('data-position', `${i}-${j}`);
        piece.setAttribute('draggable', true);
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragover', dragOver);
        piece.addEventListener('drop', dropPiece);
        pieces.push(piece);
      }
    }

    // Shuffle pieces
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(piece => puzzleContainer.appendChild(piece));
  };
}

// Drag start function
function dragStart(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-position'));
}

// Allow dropping on puzzle container
function dragOver(e) {
  e.preventDefault();
}

// Drop the piece in the correct position
function dropPiece(e) {
  e.preventDefault();
  const targetPosition = e.target.getAttribute('data-position');
  const draggedPosition = e.dataTransfer.getData('text');
  const target = e.target;
  const draggedPiece = document.querySelector(`.piece[data-position='${draggedPosition}']`);
  
  if (targetPosition === draggedPosition) {
    target.appendChild(draggedPiece);
    checkPuzzleCompletion();
  }
}

// Check if the puzzle is solved
function checkPuzzleCompletion() {
  const pieces = document.querySelectorAll('.piece');
  let solved = true;

  pieces.forEach(piece => {
    const targetPosition = piece.getAttribute('data-position');
    const piecePosition = piece.style.backgroundPosition.split(' ');

    if (piecePosition[0] !== `-${targetPosition.split('-')[1] * 100}px` || piecePosition[1] !== `-${targetPosition.split('-')[0] * 100}px`) {
      solved = false;
    }
  });

  if (solved) {
    document.getElementById('result-container').style.display = 'block'; // Show the next images
  }
}

// Call the function to create the puzzle
createPuzzle();
