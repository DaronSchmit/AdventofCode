fuelEquation = (mass) => {
  let fuel;
  fuel = Math.floor(mass/3)-2;
  console.log(`Mass: ${mass} Fuel: ${fuel}`);
  return fuel;
}

module.exports = fuelEquation;