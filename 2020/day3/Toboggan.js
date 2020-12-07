const treeMap = require("./TreeMap.js");


class Toboggan {
  constructor (moveX, moveY) { //set initial Toboggan Parameters
    this.moveX = moveX;
    this.moveY = moveY;
    this.currentX = 0;
    this.currentY = 0;
    this.treesEncountered = 0;
    console.log(`Toboggan Constructed!`);
  }
  move(treeMap) { //set new Current Coords when moving
    this.currentX += this.moveX;
    this.currentY += this.moveY;
    this.checkTreeMap(treeMap);
  }
  checkTreeMap(treeMap){
    //check the current coords against a treemap, adding to trees encountered if landing on an #
    if(this.currentX >= treeMap.rowLength){
      //reset X position back to wrap around map (map continues infinitely in the X direction)
      this.currentX = this.currentX - treeMap.rowLength;
    }
    if(treeMap.getCoord(this.currentX, this.currentY) === "#"){
      this.treesEncountered++;
    }
    if(treeMap.totalRows < this.currentY){
      console.log(`Got across! Trees Encountered: ${this.treesEncountered}`);
      return this.treesEncountered;
    }
  }
  crossTreeMap (treeMap){
  while(this.currentY < treeMap.totalRows-1){
    this.move(treeMap);
    //this.printInfo();
  }
  return this.treesEncountered;
}
  printInfo (){
    console.log(`X Movement: ${this.moveX} Y Movement: ${this.moveY}`);
    console.log(`Current Coordinates X: ${this.currentX} Y: ${this.currentY}`);
    console.log(`Trees encountered: ${this.treesEncountered}`);
  }
}

module.exports = Toboggan;