"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AoCFileReader = void 0;
const fs_1 = require("fs");
class AoCFileReader {
    static readInput(filePath) {
        try {
            const data = (0, fs_1.readFileSync)(filePath, 'utf8').split("\n").map(each => each.trim());
            return data;
        }
        catch (err) {
            console.error(err);
            return [];
        }
    }
}
exports.AoCFileReader = AoCFileReader;
