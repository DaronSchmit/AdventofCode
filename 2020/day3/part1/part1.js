const read = require("../../../readAndSplit.js");

const Toboggan = require("../Toboggan.js");

const TreeMap = require("../TreeMap.js");

input = readAndSplit("../input.txt", "utf-8");

let toboggan1 = new Toboggan(3, 1);

let treeMap1 = new TreeMap(input);

toboggan1.printInfo();


console.log(toboggan1.crossTreeMap(treeMap1));
