// const {performance} = require('perf_hooks');
// const start = performance.now();

const read = require("../readAndSplit.js");

let inputArray = readAndSplit("input.txt")[0].split(',');


const schoolOfFish = class {
    constructor(input) {
        this.school = this.condenseFish(input)
    }

    nextDay (){
        let retArray = new Array(9)
        for(let i = 8; i >= 0; i--) {
            if(i === 0) {
                retArray[8] = this.school[0]
                retArray[6] = this.school[0]+this.school[7]
            } else {
                retArray[i-1] = this.school[i]
            }
        }
        this.school = retArray
    }

    condenseFish (input){
        const retArray = Array(9).fill(0)
        for (let i = 0; i < input.length; i++) {
            retArray[input[i]]++    
        }
        return retArray
    }

    advanceDays (num){
        for(let i = 0; i < num; i++ ) {
            this.nextDay()
            // console.log(this.school)
        }        
    }   

    totalFish () {
        return(this.school.reduce((previousValue, currentValue) => previousValue + currentValue));
    }
}

const school = new schoolOfFish(inputArray)
school.advanceDays(256)
console.log(school.totalFish())
