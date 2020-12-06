const fs = require('fs');
const readline = require('readline');

fuelNeeds = [];

fuelEquation = (mass) => {
  let fuel;
  fuel = Math.floor(mass/3)-2;
  console.log(`Mass: ${mass} Fuel: ${fuel}`);
  return fuel;
}

const readInterface = readline.createInterface({
  input: fs.createReadStream("day1input.txt"),
  output: process.stdout,
  console: true
})

readInterface.on('line', (line) => {
  mass = parseInt(line);
  let fuel = fuelEquation(mass);
  fuelNeeds.push(fuel);
});

console.log(fuelNeeds);


// tests
// fuelEquation(12);
// fuelEquation(14);
// fuelEquation(1969);
// fuelEquation(100756);