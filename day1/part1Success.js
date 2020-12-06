const fs = require('fs');
const fuelEquation = require("./fuelEquation.js")

let fuelTotal = 0;


try {
  const data = fs.readFileSync('day1input.txt', 'utf8')
  let massArray = data.split("\n");
  let totalFuel = 0;
  let fuelArray = [];
  massArray.forEach(mass => fuelArray.push(fuelEquation(mass)));
  console.log(fuelArray);
  fuelArray.forEach(fuel => totalFuel += fuel)
  console.log(totalFuel);
  
  
} catch (err) {
  console.error(err)
}

