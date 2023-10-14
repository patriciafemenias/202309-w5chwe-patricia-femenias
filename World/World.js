import Cell from "../public/Cell/Cell.js";

class World {
  cell;

  constructor() {
    this.cell = [];
  }

  createWorld(length, isAlive, ...element) {
    for (let positionRow = 0; positionRow < length; positionRow++) {
      this.cell[positionRow] = element;
      for (let positionColumn = 0; positionColumn < length; positionColumn++) {
        this.cell[positionRow][positionColumn] = new Cell(isAlive);
      }
    }

    return this.cell;
  }
}

export default World;
