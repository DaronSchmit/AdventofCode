const read = require("../../readAndSplit.js");

input = readAndSplit("input.txt", "utf-8");


//splits a string into an array consisting of[#min, #max, char, pass]
const splitReq = (string) => {
  let retArr = string.split(" "); //split string by spaces
  return retArr[0].split("-").concat(retArr[1][0], retArr[2]);
}

//OOP style

class PassInfo{
  constructor(string){
   // console.log("constructing")
    this.stringArr = splitReq(string);
    //console.log(this.stringArr);
    this.num1 = this.stringArr[0];
    this.num2 = this.stringArr[1];
    this.charReq = this.stringArr[2];
    this.pass = this.stringArr[3];
    //console.log(`${this.pass}`);
  }
  check1(){
      let numChars = this.pass.split(this.charReq).length-1;
    if( numChars >= this.num1 && numChars <= this.num2){
      return true;
    }
    else{
      return false;
    }
  }
  check2(){
    let charAtNum1 = this.charReq === this.pass[this.num1-1];
    let charAtNum2 = this.charReq === this.pass[this.num2-1];
    if( ( charAtNum1 && !charAtNum2 ) || ( !charAtNum1 && charAtNum2 ) ){
      return true;
    }
    else{
      return false;
    }
  }
  printInfo() {
    console.log(`password: ${this.pass}`);
    console.log(`character required: ${this.charReq}`);
    console.log(`minimum of Character: ${this.num1}`);
    console.log(`maximum of Character: ${this.num2}`);
  }
}

//iterate through input, have each check itself
const checkInputs1 = (arr) => {
  let total = 0;
  arr.forEach(one => {
    if(new PassInfo(one).check1()){
      total++;
    }
  });
  return total;
}
const checkInputs2 = (arr) => {
  let total = 0;
  arr.forEach(one => {
    if(new PassInfo(one).check2()){
      total++;
    }
  });
  return total;
}

sample1 = new PassInfo(input[600]);
console.log(sample1.check2());
console.log(`check1: ${checkInputs1(input)}`);
console.log(`check2: ${checkInputs2(input)}`);