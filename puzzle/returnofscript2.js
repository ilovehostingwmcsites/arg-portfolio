let puzzlePieces = [];
let correctPositions = [];
let isSolved = false;

function createPuzzle() {
  const puzzleContainer = document.getElementById('puzzle-container');
  const pieces = [
    'piece1.png', 'piece2.png', 'piece3.png', 'piece4.png',
    'piece5.png', 'piece6.png', 'piece7.png', 'piece8.png',
    'piece9.png',
  ]; // Change these to the actual image filenames
  
  // Shuffle pieces
  pieces.sort(() => Math.random() - 0.5);

  // Create the puzzle pieces
  pieces.forEach((piece, index) => {
    const div = document.createElement('div');
    div.classList.add('puzzle-piece');
    div.setAttribute('draggable', true);
    div.setAttribute('data-id', index);
    div.style.backgroundImage = `url('intro-letter.png')`;
    div.style.backgroundPosition = `${(index % 4) * -100}px ${(Math.floor(index / 4)) * -100}px`; // Adjust according to the image grid
    div.addEventListener('dragstart', onDragStart);
    div.addEventListener('dragover', onDragOver);
    div.addEventListener('drop', onDrop);
    puzzleContainer.appendChild(div);
    puzzlePieces.push(div);
    correctPositions.push(index);
  });
}

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  const draggedPieceId = event.dataTransfer.getData('text/plain');
  const droppedPiece = event.target;

  if (draggedPieceId !== droppedPiece.dataset.id) {
    const draggedPiece = puzzlePieces[draggedPieceId];
    const droppedPieceId = droppedPiece.dataset.id;

    // Swap the positions of the dragged and dropped pieces
    const temp = puzzlePieces[draggedPieceId];
    puzzlePieces[draggedPieceId] = puzzlePieces[droppedPieceId];
    puzzlePieces[droppedPieceId] = temp;

    // Reposition the pieces on the grid
    updateGrid();
  }
  checkPuzzleSolved();
}

function updateGrid() {
  puzzlePieces.forEach((piece, index) => {
    const column = index % 4;
    const row = Math.floor(index / 4);
    piece.style.gridRow = row + 1;
    piece.style.gridColumn = column + 1;
  });
}

function checkPuzzleSolved() {
  const currentPositions = puzzlePieces.map(piece => parseInt(piece.dataset.id));
  if (JSON.stringify(currentPositions) === JSON.stringify(correctPositions)) {
    isSolved = true;
    showNextImage();
  }
}

function showNextImage() {
  if (isSolved) {
    document.body.innerHTML = `
      <h1>Congratulations, you completed the puzzle!</h1>
      <img src="WMCPortfolio3.png" alt="Next Portfolio Image">
    `;
  }
}

createPuzzle();
