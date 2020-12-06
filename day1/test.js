const fs = require('fs');
const fuelEquation = require("./fuelEquation.js")

let fuelTotal = 0;


try {
  const data = fs.readFileSync('day1input.txt', 'utf8')
  let massArray = data.split("\n");
  let totalMass = 0;
  let fuelArray = [];
  massArray.forEach(mass => fuelArray.push(fuelEquation(mass)));
  console.log(fuelArray);
  
  
} catch (err) {
  console.error(err)
}

