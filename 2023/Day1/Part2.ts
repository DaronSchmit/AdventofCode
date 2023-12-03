import { AoCFileReader } from '../AoCFileReader';
import { Part1 } from './Part1';

enum Numbers {
  'one' = 1,
  'two' = 2,
  'three' = 3,
  'four' = 4,
  'five' = 5,
  'six' = 6,
  'seven' = 7,
  'eight' = 8,
  'nine' = 9,
  'twone' = 21,
  'oneight' = 18,
  'threeight' = 38,
  'fiveight' = 58,
  'nineight' = 98,
  'eightwo' = 82,
  'eighthree' = 83,
  'sevenine' = 79,
}

export class Part2 {
  /** @deprecated */
  static replaceWords(line: string): string {
    const matches = [
      ...line.matchAll(
        /(sevenine|twone|oneight|threeight|fiveight|nineight|eightwo|eighthree|one|two|three|four|five|six|seven|eight|nine)/g
      ),
    ];
    let replaced = line;
    matches.forEach((match) => {
      replaced = replaced.replace(match[0], Numbers[match[0]]);
    });
    return replaced;
  }

  static buildNumString(line: string): string {
    let index = 0;
    let retStr = '';
    while (index < line.length) {
      if (!Number.isNaN(Number(line[index]))) {
        retStr = retStr.concat(line[index]);
      } else {
        const stringMatch = line
          .substring(index)
          .match(/^(one|two|three|four|five|six|seven|eight|nine)/);
        if (stringMatch) {
          retStr = retStr.concat(Numbers[stringMatch[0]]);
        }
      }
      index += 1;
    }
    return retStr;
  }

  static getSolution(): number {
    const lines = AoCFileReader.readInput(__dirname + '/input.txt');
    const parsedNumbers = lines.map((line: string) =>
      Part1.getLineNumber(Part2.buildNumString(line))
    );
    const sum = parsedNumbers.reduce((a: number, b: number) => a + b, 0);
    return sum;
  }
}

export const solution = Part2.getSolution;
