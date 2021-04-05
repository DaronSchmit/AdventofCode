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

let validateKeys = (passport) => {
  let passKeys = Object.keys(passport);
  let validated = true;
  let requirements = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];
  requirements.forEach(key => {
    let keyValidated = passKeys.includes(key);
    // console.log(`Key ${key} found in array: ${keyValidated}`)
    if(!keyValidated){
      validated = false;
    }
  });
  return validated;
}

let validateValues = (passport, requirements) => {
  let passKeys = Object.keys(passport);
  let validatedArray = passKeys.map(key => {
    let value = passport[key];
      switch (key) {
        case "byr":
          validated = checkYear(
            value,
            requirements.byr[0],
            requirements.byr[1]
          );
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "iyr":
          validated = checkYear(
            value,
            requirements.iyr[0],
            requirements.iyr[1]
          );
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "eyr":
          validated = checkYear(
            value,
            requirements.eyr[0],
            requirements.eyr[1]
          );
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "hgt":
          validated = checkHeight(value);
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "hcl":
          validated = checkHairColor(value);
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "ecl":
          validated = checkEcl(value);
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "pid":
          validated = checkPassportID(value);
          // console.log(`checking ${key}:${value}`, validated);
          return validated;
          break;
        case "cid":
          return true;
          break;
        case "":
          return true;
          break;
        default:
          validated = false;
          console.log("something went wrong");
          return validated;
          break;
      }
    }
  );
  // console.log(validatedArray)
  return (!validatedArray.includes(false));
};

let checkYear = (input, lowerLimit, upperLimit) => {
  let yearReg = /\d{4}/;
  let year = parseInt(input);
  let numCheck = yearReg.test(year) ? true : false;
  switch (numCheck) {
    case false:
      return false;
    case true:
      return year <= upperLimit && year >= lowerLimit ? true : false;
    default:
      return false;
  }
};

let checkHairColor = (inputStr) => {
  return /^(#)[a-f0-9]{6}$/.test(inputStr);
};

let checkPassportID = (pidString) => {
  return /^[0-9]{9}$/.test(pidString);
};

let checkHeight = (hgtStr) => {
  let isValid = /^(\d{2,3})(cm|in)$/.test(hgtStr);
  switch (isValid) {
    case true:
      let units = hgtStr.slice(hgtStr.length - 2);
      let magnitude = hgtStr.slice(0, hgtStr.length - 2);
      switch (units) {
        case "in":
          let retval = 59 <= magnitude && magnitude <= 76 ? true : false;
          return retval;
        case "cm":
          return 150 <= magnitude && magnitude <= 193 ? true : false;
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

let checkEcl = (eclStr) => {
  return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(eclStr);
};

let theWholeThing = (rawInput) => {
  countValidated = 0;
  const requirements = {
  ecl: [],
  pid: 9,
  eyr: [2020, 2030],
  hcl: null,
  byr: [1920, 2002],
  iyr: [2010, 2020],
  hgt: null,
  };

  let inputArr = inputToStrings(rawInput);
  let objectArr = inputArr.map(string => stringToObject(string));
  console.log(objectArr);
  let validatedKeys = objectArr.filter(passport => validateKeys(passport));
  let validatedValues = validatedKeys.filter(passport => validateValues(passport, requirements))
  
  console.log(validatedKeys.length)
  console.log(validatedValues.length)
  let differentObjs = validatedKeys.filter(passport => !(JSON.stringify(validatedValues).includes(JSON.stringify(passport))));

  // fs.writeFile('validateValues.txt', JSON.stringify(differentObjs), (err) => {
  //   // throws an error, you could also catch it here
  //   if (err) throw err;
  
  //   // success case, the file was saved
  //   console.log('Arrays saved!');

// });
  return validatedValues;
};




let testTrue = `pid:087499704 hgt:76in ecl:oth iyr:2010 eyr:2030 byr:2001
hcl:#623a2f

ecl:hzl hgt:184cm iyr:2018 byr:2001 pid:453480077 eyr:2025 hcl:#a97842

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
`;

let testFalse = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

theWholeThing(rawInput);