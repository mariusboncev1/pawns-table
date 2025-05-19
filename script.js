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

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (i === 0) {
          if (j % 2 === 1) this.pawns[i][j] = new Pawn(j, i, cellSize, 'black');
        } else if (i === 1) {
          if (j % 2 === 0) this.pawns[i][j] = new Pawn(j, i, cellSize, 'black');
        } else if (i === 2) {
          if (j % 2 === 1 && j !== 7) this.pawns[i][j] = new Pawn(j, i, cellSize, 'black');
        } else if (i === 3) {
          if (j === 0) this.pawns[i][j] = new Pawn(j, i, cellSize, 'white');
        } else if (i === 4) {
          if (j % 2 === 1) this.pawns[i][j] = new Pawn(j, i, cellSize, 'white');
        } else if (i === 5) {
          if (j % 2 === 0) this.pawns[i][j] = new Pawn(j, i, cellSize, 'white');
        }
      }
    }
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


class Pawn {
  constructor(col, row, cellSize, color) {
    this.x = col * cellSize + cellSize / 2;
    this.y = row * cellSize + cellSize / 2;
    this.r = cellSize * 0.4;
    this.color = color;
  }

  display() {
    fill(this.color === 'black' ? 30 : 255);
    stroke(0);
    ellipse(this.x, this.y, this.r * 2);

    // Smiley face
    fill(this.color === 'black' ? 255 : 0);
    ellipse(this.x - 8, this.y - 5, 4); 
    ellipse(this.x + 8, this.y - 5, 4); 
    noFill();
    stroke(this.color === 'black' ? 255 : 0);
    arc(this.x, this.y + 5, 20, 10, 0, PI);
  }
}