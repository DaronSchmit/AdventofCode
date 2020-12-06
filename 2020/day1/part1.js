const read = require("./readAndSplit.js");

inputArray = readAndSplit("input.txt");

sumEquals = (num1, num2, sum) => {
  console.log(`Checking ${num1} and ${num2} against ${sum}`);
  if(num1+num2 === sum){
    return true;
  }
  else{
    return false;
  }
}

checkArrAndDo = (array, fn) => {
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
        console.log(`Checking array at index ${i} against array at index ${j}`);
        let num1 = parseInt(array[i]);
        let num2 = parseInt(array[j]);
      if(fn(num1, num2, 2020)){
        console.log(num1, num2);
        return [num1, num2];
      }
      else{
        console.log("match not found");
      }
    }
  }
}

//console.log(sumEquals(2, 2, 3));

const nums = checkArrAndDo(inputArray, sumEquals);

console.log(nums[0]*nums[1]);