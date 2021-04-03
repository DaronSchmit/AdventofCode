const fs = require('fs');

const rawInput = fs.readFileSync(filename, 'utf8');

const inputToStrings = (input) => {
  input = input.replaceAll("\n\n", "BREAK");
  input = input.replaceAll("\n", " ");
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

let checkYear = (input, lowerLimit, upperLimit) => {
  let yearReg = /\d{4}/;
  let year = parseInt(input);
  let numCheck = (yearReg.test(year))? true:false;
  switch (numCheck){
      case false:
        return false;
    case true:
      return (year <= upperLimit && year >= lowerLimit) ? true:false;
    default:
      return false;
  }
};

let checkHairColor = (inputStr) => {
  return (/^(#)[a-f0-9]{6}$/.test(inputStr));
};

let checkPassportID = (pidString) => {
  return (/[0-9]{9}$/.test(pidString));
};

let checkHeight = (hgtStr) => {
  let isValid = (/^(\d{2,3})(cm|in)$/.test(hgtStr));
  switch (isValid){
    case true:
      let units = hgtStr.slice(hgtStr.length-2);
      let magnitude = hgtStr.slice(0,hgtStr.length-2);
      switch(units){
        case "in":
          return (59 < magnitude && magnitude < 76) ? true:false;
        case "cm":
          return (150 < magnitude && magnitude < 193) ? true:false;
        default:
          console.log("this shouldn't happen");
          return false;
      }
      break;
    case false:
      return false;
    default:
      console.log("how did this happen");
      return false;
  }
};


let theWholeThing = rawInput =>{
  let inputArr = inputToStrings(rawInput);
  let passportArr = inputArr.map(index=>stringToObject(index));
  let requirements = {"ecl":[], "pid":9, "eyr":[2020, 2030], "hcl":null, "byr":[1920, 2002], "iyr":[2010, 2020], "hgt":null};
  let countValidated = 0;
  
  passportArr.forEach(passport => {if(validatePassport(passport, requiredKeys1)){countValidated++}});
  return countValidated;
}

console.log(theWholeThing(rawInput));