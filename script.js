let board;

function setup() {
  createCanvas(480, 480);
  board = new Board(8, 8, 60);
}

function draw() {
  background(220);
  board.display();
}


class Board {
  constructor(rows, cols, cellSize) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.pawns = Array.from({ length: rows }, () => Array(cols).fill(null));

    
  }

  display() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let isLight = (i + j) % 2 === 0;
        fill(isLight ? 255 : 0);
        rect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);

        if (this.pawns[i][j]) {
          this.pawns[i][j].display();
        }
      }
    }
  }
}


