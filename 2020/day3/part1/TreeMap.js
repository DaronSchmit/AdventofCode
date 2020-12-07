

class Treemap { //takes an array of strings of uniform length, arranged like a grid
  constructor(input){
    this.rows = input;
    this.rowLength = this.rows[0].length;
    this.totalRows = this.rows.length;
  }
  getCoord(coordX,coordY){
    return this.rows[coordY][coordX];
  }
}