const read = require("./readAndSplit.js");

let inputArray = readAndSplit("input.txt");

inputArray = inputArray.map(each => each.split(" "))

const part1 = (input) => {
    let depth = 0;
    let horizontal = 0;
    input.forEach(entry => {
        switch (entry[0]) {
            case 'forward':
                horizontal += parseInt(entry[1])
                break
            case 'up': 
                depth -= parseInt(entry[1])
                break
            case 'down':
                depth += parseInt(entry[1])
                break
            default:
                break
        }
    })
    return horizontal*depth
}

const part2 = (input) => {
    let aim = 0;
    let depth = 0;
    let horizontal = 0;
    input.forEach(entry => {
        let magnitude = parseInt(entry[1])
        switch (entry[0]) {
            case 'forward':
                horizontal += magnitude
                depth += aim*magnitude
                break
            case 'down':
                aim += magnitude
                break
            case 'up':
                aim -= magnitude
                break
            default:
                break
        }
    })
    return horizontal*depth
}

console.log('part 1: ', part1(inputArray), 'part 2: ', part2(inputArray))
