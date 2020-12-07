
//Make Toboggan object
//movement = down 1, right 3
//check if current coordinate is on a #(tree)
//add 1 to total trees encountered if Toboggan lands on #
//if you go too far on the right, reset to 0 and continue the amount you had left
//    if currentX >= length -> currentX -= length
//stop when the Y coordinate is greater than the number of given

const read = require("../../readAndSplit.js");

const Toboggan = require("./Toboggan.js");

const TreeMap = require("./TreeMap.js");

input = readAndSplit("./input.txt", "utf-8");

let toboggan1 = new Toboggan(1, 1);

let toboggan2 = new Toboggan(3, 1);

let toboggan3 = new Toboggan(5, 1);

let toboggan4 = new Toboggan(7, 1);

let toboggan5 = new Toboggan(1, 2);

let treeMap1 = new TreeMap(input);

const part1 = toboggan2.crossTreeMap(treeMap1);

console.log("Part 1: "+part1);

const part2 = part1*toboggan1.crossTreeMap(treeMap1)*toboggan3.crossTreeMap(treeMap1)*toboggan4.crossTreeMap(treeMap1)*toboggan5.crossTreeMap(treeMap1)

console.log("Part 2: "+part2);