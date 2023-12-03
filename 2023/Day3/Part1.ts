import { Solver } from '../Solver';

const regexNumbers = /\d{1, 4}/g;
const symbols = ['!', '@', '$', '%', '^', '&', '*', '/', '+', '='];

class Part1 extends Solver {
  static parseLines(): any[] {
    const lines = Part1.getInput(__dirname + '/input.txt');
    const partNumbers: number[] = [];
    lines.forEach((line: string, index: number) => {
      const lineParts = [...line.matchAll(regexNumbers)]
        .filter((match) =>
          this.checkEnginePartValiditiy(
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
    const input = match[2];
    const validArray: boolean[] = [];
    // check own string
    if (index > 0) {
      validArray.push(symbols.includes(input[index - 1]));
    }
    if (index < length) {
      validArray.push(symbols.includes(input[index + 1]));
    }
    //check prev string
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
    return -1;
  }
}

export const solution = Part1.getSolution;
