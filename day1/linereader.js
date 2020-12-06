const lineReader = require('line-reader');

let fuelTotal = 0;

fuelEquation = (mass) => {
  let fuel;
  fuel = Math.floor(mass/3)-2;
  console.log(`Mass: ${mass} Fuel: ${fuel}`);
  return fuel;
}

async function readLinesDoMath() {
    lineReader.eachLine('day1input.txt', function(line) {
      fuelTotal += fuelEquation(line);
    });
}