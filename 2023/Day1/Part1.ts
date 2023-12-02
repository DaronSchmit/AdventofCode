import { AoCFileReader } from '../FileReader';

export class Part1 {
  private static filterAndFormat(line: string): number[] {
    return line
      .split('')
      .map((char: string) => Number(char))
      .filter((num: number) => !Number.isNaN(num));
  }

  private static getFirst(line: number[]): number {
    return line[0];
  }

  private static getLast(line: number[]): number {
    return line[line.length - 1];
  }

  static getLineNumber(line: string): number {
    const formatted = Part1.filterAndFormat(line);
    return Number(`${Part1.getFirst(formatted)}${Part1.getLast(formatted)}`);
  }

  static getSolution() {
    const lines = AoCFileReader.readInput(__dirname + '/input.txt');
    const parsedNumbers = lines.map((line: string) =>
      Part1.getLineNumber(line)
    );
    const sum = parsedNumbers.reduce((a: number, b: number) => a + b, 0);
    return sum;
  }
}

export const solution = Part1.getSolution;
