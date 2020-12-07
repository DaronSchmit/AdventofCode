const read = require("../../../readAndSplit.js");

const Toboggan = require("../Toboggan.js");

const TreeMap = require("../TreeMap.js");

input = readAndSplit("../input.txt", "utf-8");

let toboggan1 = new Toboggan(1, 1);

let toboggan2 = new Toboggan(3, 1);

let toboggan3 = new Toboggan(5, 1);

let toboggan4 = new Toboggan(7, 1);

let toboggan5 = new Toboggan(1, 2);

let treeMap1 = new TreeMap(input);

console.log(toboggan1.crossTreeMap(treeMap1)*toboggan2.crossTreeMap(treeMap1)*toboggan3.crossTreeMap(treeMap1)*toboggan4.crossTreeMap(treeMap1)*toboggan5.crossTreeMap(treeMap1));