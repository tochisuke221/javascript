'use strict';

(() => {
  class MazeRenderer{
    constructor(canvas){
      this.WALL_SIZE = 10;
      this.ctx = canvas.getContext('2d');
    }

    render(data){
      canvas.height = data.length * this.WALL_SIZE;
      canvas.width = data[0].length * this.WALL_SIZE;


      for (let row = 0; row < data.length; row++) {
        for (let col = 0; col < data[0].length; col++) {
          if (data[row][col] === 1) {
            this.ctx.fillRect(
              col * this.WALL_SIZE,
              row * this.WALL_SIZE,
              this.WALL_SIZE,
              this.WALL_SIZE
            );
          }
        }
      }
    }
  }

  class Maze {
    constructor(row, col, renderer) {
      if (row < 5 || col < 5 || row % 2 === 0 || col % 2 === 0) {
        alert('Size not valid!');
        return;
      }

      this.renderer = renderer; 

      this.row = row;
      this.col = col;
      this.data = this.getData();
    }

    getData() {
      const data = [];

      for (let row = 0; row < this.row; row++) {
        data[row] = [];
        for (let col = 0; col < this.col; col++) {
          data[row][col] = 1;
        }
      }

      for (let row = 1; row < this.row - 1; row++) {
        for (let col = 1; col < this.col - 1; col++) {
          data[row][col] = 0;
        }
      }

      for (let row = 2; row < this.row - 2; row += 2) {
        for (let col = 2; col < this.col - 2; col += 2) {
          data[row][col] = 1;
        }
      }

      for (let row = 2; row < this.row - 2; row += 2) {
        for (let col = 2; col < this.col - 2; col += 2) {
          let destRow;
          let destCol;

          do {
            const dir = row === 2 ?
              Math.floor(Math.random() * 4) :
              Math.floor(Math.random() * 3) + 1;
            switch (dir) {
              case 0: // up
                destRow = row - 1;
                destCol = col;
                break;
              case 1: // down
                destRow = row + 1;
                destCol = col;
                break;
              case 2: // left
                destRow = row;
                destCol = col - 1;
                break;
              case 3: // right
                destRow = row;
                destCol = col + 1;
                break;
            }
          } while (data[destRow][destCol] === 1);

          data[destRow][destCol] = 1;
        }
      }

      return data;
    }

    render() {
      this.renderer.render(this.data);
    }
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const maze = new Maze(21, 15, new MazeRenderer(canvas));
  maze.render();
})();
