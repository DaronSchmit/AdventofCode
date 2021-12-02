const fs = require("fs");

const read = require("../../readAndSplit.js");

//Get data from input
const rawInput = readAndSplit('input.txt');

// console.log(rawInput);
//slice seat IDs between row and column
let input = rawInput.map(seatString =>  {
  return new BoardingPass(seatString);
  });

function BoardingPass(seatString){
  this.rawInput = seatString;
    //translate row to binary
    this.row = parseInt(seatString.slice(0,7).replace(/B/g, "1").replace(/F/g, "0"), 2);
    //translate column to binary
    this.col = parseInt(seatString.slice(7).replace(/R/g, "1").replace(/L/g, "0"), 2);
    //calculate seatID
    this.seatID = (this.row*8)+this.col;
}

BoardingPass.prototype.displayInfo = function(){
  return `row: ${this.row} col:${this.col} seatID: ${this.seatID}`;
};

BoardingPass.prototype.getSeatID = function(){
  return this.seatID;
}

let seatIDs = input.map(passes => passes.getSeatID());
console.log(Math.max(...seatIDs));
