const fs = require("fs");
const rawInput = fs.readFileSync("input.txt", "utf8");


const inputToStrings = (input) => {
  input = input.replace(/\n\n/g, "BREAK");
  input = input.replace(/\n/g, " ");
  input = input.split("BREAK");
  return input;
}

const stringToObject = (inputString) => {
    let retObj = {};
    let propvals = inputString.split(" ");
    let objVals = propvals.map(strings => strings.split(":"))
    objVals.forEach(pair => retObj[pair[0]] = pair[1]);
    return retObj;
}

let validatePassport = (passport, requirements) => {
  let passKeys = Object.keys(passport);
  let validated = true;
  requirements.forEach(key => {
    let keyValidated = passKeys.includes(key);
    // console.log(`Key ${key} found in array: ${keyValidated}`)
    if(!keyValidated){
      validated = false;
    }
  });
  return validated;
}

let filterArrays = rawInput =>{
  let inputArr = inputToStrings(rawInput);
  let passportArr = inputArr.map(index=>stringToObject(index));
  let requiredKeys1 = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];
  
  
  let validArrays = passportArr.filter(passport => validatePassport(passport, requiredKeys1));
  console.log(validArrays.length);
  return validArrays;
}

let result = filterArrays(rawInput);

