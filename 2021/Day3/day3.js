const {performance} = require('perf_hooks');
const start = performance.now();

const read = require("../readAndSplit.js");

let inputArray = readAndSplit(__dirname+"/input.txt");

const getEpsilon = array => {
    let retStr = '';
    array.forEach(index => {
        retStr = retStr.concat(index > 0 ? 0 : 1)
    })
    return retStr
}

const getGamma = (array) => {
    let retStr = '';
    array.forEach(index => {
        retStr = retStr.concat(index > 0 ? 1 : 0)
    })
    return retStr
}

const getMostCommonBits = input => {
    let retArray = Array(inputArray[0].length).fill(0)

    input.forEach(str => {
        for (let i in str) {
            retArray[i] += str[i] === '1' ? 1 : -1
        }
    })
    return retArray
}

const part1 = input => {
    const mostCommon = getMostCommonBits(input)
    return parseInt(getGamma(mostCommon), 2)*parseInt(getEpsilon(mostCommon), 2)
}

const getOxygenGeneratorRating = (input, digit = 0) => {
    // console.log(input)
    if (input.length === 1) {
        return input[0] 
    } else {
        // find most common bit at the current digit
        let mostCommon = 0
        input.forEach(str => mostCommon += str[digit] === '1' ? 1 : -1 )
        mostCommon = mostCommon >= 0 ? 1 : 0
        // filter those without that bit in the current digit
        retArray = input.filter(str => str[digit] === `${mostCommon}`)
        return getOxygenGeneratorRating(retArray, digit+1)
    }
}
const getCO2ScrubberRating = (input, digit = 0) => {
    if (input.length === 1) {
        return input[0] 
    } else {
        let leastCommon = 0
        input.forEach(str => leastCommon += str[digit] === '1' ? 1 : -1 )
        leastCommon = leastCommon >= 0 ? 0 : 1
        retArray = input.filter(str => str[digit] === `${leastCommon}`)
        return getCO2ScrubberRating (retArray, digit+1)
    }
}

const part2 = input => {
    return parseInt(getOxygenGeneratorRating(inputArray), 2)*parseInt(getCO2ScrubberRating(inputArray), 2)
}

console.log('part1', part1(inputArray))
console.log('part2', part2(inputArray))

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
