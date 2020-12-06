const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
  input: fs.createReadStream("day1input.txt"),
  output: process.stdout,
  console: false
})

readInterface.on('line', (line) => {
  mass = parseInt(line);
  fuel =
  console.log(`mass: ${line}`);
  console.log(parseInt(line));
});

fuelEquation = (mass) => {
  let fuel;
  fuel = Math.floor(mass/3)-2;
  console.log(`Mass: ${mass} Fuel: ${fuel}`);
  return fuel;
}


// tests
// fuelEquation(12);
// fuelEquation(14);
// fuelEquation(1969);
// fuelEquation(100756);