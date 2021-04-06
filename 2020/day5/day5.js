const fs = require("fs");

const read = require("../../readAndSplit.js");

//Get data from input
const rawInput = readAndSplit('input.txt');

console.log(rawInput);
//slice seat IDs between row and column
let input = rawInput.map(seatID =>  {
  return {"rowID":seatID.slice(0,7), "columnID": seatID.slice(7)};
  });

//change row IDs to Binary


//change column ID to Binary

//Do some math

//console log