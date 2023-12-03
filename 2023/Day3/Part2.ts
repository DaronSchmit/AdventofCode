import { Solver } from '../Solver';

const regexNumbers = /\d{1,4}/g;
const regexGears = /\*/g;

class Part2 extends Solver {
  static parseLines(): any[] {
    // const lines = Part2.getInput(__dirname + '/sampleInput.txt');
    const lines = Part2.getInput(__dirname + '/input.txt');
    const gearRatios: number[] = [];
    lines.forEach((line: string, index: number) => {
      const gears = [...line.matchAll(regexGears)];
      gearRatios.push(
        ...gears.map((gear) =>
          Part2.getGearRatio(
            gear,
            line,
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
    line: string,
    prevLine?: string,
    nextLine?: string
  ): number {
    const adjacentParts = Part2.getAdjacentParts(
      match,
      line,
      prevLine,
      nextLine
    );
    return adjacentParts.length === 2 ? adjacentParts[0] * adjacentParts[1] : 0;
  }

  static getAdjacentParts(
    match: RegExpMatchArray,
    line: string,
    prevLine?: string,
    nextLine?: string
  ): number[] {
    const gearIndex = match.index ?? -1;
    const adjacentParts: number[] = [];
    //check inline
    adjacentParts.push(...Part2.getAdjacentPartsFromLine(gearIndex, line));
    // check previous line
    if (prevLine) {
      adjacentParts.push(
        ...Part2.getAdjacentPartsFromLine(gearIndex, prevLine)
      );
    }
    if (nextLine) {
      adjacentParts.push(
        ...Part2.getAdjacentPartsFromLine(gearIndex, nextLine)
      );
    }
    return adjacentParts;
  }

  static getSolution(): number {
    const gearRatios = Part2.parseLines();
    return gearRatios.reduce((a, b) => a + b, 0);
  }

  static getAdjacentPartsFromLine(gearIndex: number, line: string) {
    const parts = [...line.matchAll(regexNumbers)]
      .filter((part) => {
        const indexStart = Math.max((part.index ?? 0) - 1, 0);
        const indexEnd = indexStart + (part[0] ?? '').length + 1;
        const bool = indexStart <= gearIndex && gearIndex <= indexEnd;
        return bool;
      })
      .map((match) => Number(match[0]));
    return parts;
  }
}

export const solution = Part2.getSolution;
