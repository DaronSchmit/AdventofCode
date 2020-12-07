
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
    checkTreeMap(treeMap);
  }
  checkTreeMap(treeMap){ //check the current coords against a treemap, adding to trees encountered if landing on an #
    if(this.currentX >= treeMap.rowlength){ //reset X position back to wrap around map (map continues infinitely in the X direction)
      this.currentX -= treeMap.rowlength;
    }
    if(treeMap.getCoord(this.currentX, this.currentY) === "#"){
      this.treesEncountered++;
    }
  }
}

module.exports = Toboggan;