
class Toboggan {
  constructor (moveX, moveY) { //set initial Toboggan Parameters
    this.moveX = moveX;
    this.moveY = moveY;
    this.currentX = 0;
    this.currentY = 0;
    this.treesEncountered = 0;
    console.log(`Constructed!`);
  }
  move() {
    this.currentX += this.moveX;
    this.currentY += this.moveY;
  }
  checkTreeMap(treeMap){
    if(this.currentX >= treeMap.row.length){
      this.currentX -= treeMap.row.length;
    }
    if(treeMap.row(this.currentY)[this.currentX] === "#"){
      this.treesEncountered++;
    }
  }
}

module.exports = Toboggan;