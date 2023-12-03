import { Solver } from '../Solver';

const regexNumbers = /\d{1,4}/g;
const symbols = [
  ...new Set([
    ...Solver.getInput(__dirname + '/input.txt')
      .join('')
      .replace(/(\.|\d)/g, ''),
  ]),
];

class Part1 extends Solver {
  static parseLines(): any[] {
    const lines = Part1.getInput(__dirname + '/input.txt');
    const partNumbers: number[] = [];
    lines.forEach((line: string, index: number) => {
      const matches = [...line.matchAll(regexNumbers)];
      const lineParts = matches
        .filter((match) =>
          Part1.checkEnginePartValiditiy(
            match,
            lines[index - 1],
            lines[index + 1]
          )
        )
        .map((match) => Number(match[0]));
      partNumbers.push(...lineParts);
    });
    return partNumbers;
  }

  static checkEnginePartValiditiy(
    match: RegExpMatchArray,
    prevLine?: string,
    nextLine?: string
  ) {
    const index = match.index ?? -1;
    const length = match[0].length;
    const input = match.input ?? '';
    const validArray: boolean[] = [];
    // check own string
    if (index > 0) {
      validArray.push(symbols.includes(input[index - 1]));
    }
    if (index + length < input.length) {
      validArray.push(symbols.includes(input[index + length]));
    }
    if (prevLine) {
      const substring = prevLine.substring(
        Math.max(index - 1, 0),
        Math.min(index + length + 1, prevLine.length - 1)
      );
      validArray.push([...substring].some((char) => symbols.includes(char)));
    }
    if (nextLine) {
      const substring = nextLine.substring(
        Math.max(index - 1, 0),
        Math.min(index + length + 1, nextLine.length - 1)
      );
      validArray.push([...substring].some((char) => symbols.includes(char)));
    }
    return validArray.includes(true);
  }

  static getSolution(): number {
    const validParts = Part1.parseLines();
    console.log(validParts);
    return validParts.reduce((a, b) => a + b, 0);
  }
}

export const solution = Part1.getSolution;
