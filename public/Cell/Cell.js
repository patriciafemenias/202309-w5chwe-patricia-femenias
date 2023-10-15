class Cell {
  isAlive;
  neighbors;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  reBorn() {
    this.isAlive = true;
  }
}

export default Cell;
