import { Solver } from '../Solver';

const regexNumbers = /\d{1,4}/g;
const regexGears = /\*/g;

class Part2 extends Solver {
  static parseLines(): any[] {
    const lines = Part2.getInput(__dirname + '/input.txt');
    const gearRatios: number[] = [];
    lines.forEach((line: string, index: number) => {
      const gears = [...line.matchAll(regexGears)];
      gearRatios.push(
        ...gears.map((gear) =>
          Part2.getGearRatio(
            gear,
            index > 0 ? lines[index - 1] : undefined,
            index < lines.length - 1 ? lines[index + 1] : undefined
          )
        )
      );
    });
    return gearRatios;
  }

  static getGearRatio(
    match: RegExpMatchArray,
    prevLine?: string,
    nextLine?: string
  ): number {
    const adjacentParts = Part2.getAdjacentParts(match, prevLine, nextLine);
    return adjacentParts.length === 2 ? adjacentParts[0] * adjacentParts[1] : 0;
  }

  static getAdjacentParts(
    match: RegExpMatchArray,
    prevLine?: string,
    nextLine?: string
  ): number[] {
    const gearIndex = match.index ?? -1;
    const input = match.input ?? '';
    const adjacentParts: number[] = [];
    //check sides
    if (0 < gearIndex && gearIndex < input.length - 1) {
      const parts = [...input.matchAll(regexNumbers)];
      adjacentParts.push(
        ...parts
          .filter((part) => {
            return (
              (part.index ?? 0) + part.length === gearIndex ||
              (part.index ?? 0) - 1 === gearIndex
            );
          })
          .map((match) => Number(match[0]))
      );
    }
    // check previous line
    if (prevLine) {
      const parts = [...input.matchAll(regexNumbers)];
      adjacentParts.push(
        ...parts
          .filter((part) => {
            return (
              
            );
          })
          .map((match) => Number(match[0]))
      );
    }
    if (nextLine) {
      //
    }
    return adjacentParts;
  }

  static getSolution(): number {
    const validParts = Part2.parseLines();
    console.log(validParts);
    return validParts.reduce((a, b) => a + b, 0);
  }
}

export const solution = Part2.getSolution;
