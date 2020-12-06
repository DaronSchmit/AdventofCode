const read = require("./readAndSplit.js");

inputArray = readAndSplit("input.txt");

const arrSum = arr => arr.reduce((a,b) => a + b, 0); //pulled from the internet
const arrProd = arr => arr.reduce((a,b) => a * b, 1); //adjusted from above

const sumEquals = (arr, sum) => { //compares the sum of an array to a target sum
  if(arrSum(arr) === sum){
    return true;
  }
  else{
    return false;
  }
}

const checkArrAndDo = (array, fn) => {
  for(let i = 0; i < array.length; i++){ //iterate through whole array
    for(let j = i+1; j < array.length; j++){ //compare that to the one after it
      for(let k = j+1; k <array.length; k++){ //compare that to the one after that too
        let numArr = [parseInt(array[i]), parseInt(array[j]), parseInt(array[k])]; //build array out of the numbers
        //console.log(numArr);
        if(fn(numArr, 2020)){ //use that array to check against sum
          console.log(`Found match with ${numArr}`);
          return numArr;
        }
        else{
          //console.log("match not found");
        }
      }
      //console.log("no matches found"+j);
    }
    //console.log(array[i]);
  }
}

//console.log(checkArrAndDo([123,456,53,6375,2345,789,1000,1047,920,43,4,32342,2343,43,1000, 100,123,367,20], sumEquals));

// twelves = [12,12,12];

// console.log(sumEquals(twelves, 36));

const nums = checkArrAndDo(inputArray, sumEquals);
const prod = arrProd(nums);
console.log(prod);