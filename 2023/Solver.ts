import { AoCFileReader } from './AoCFileReader';

export abstract class Solver {
  static getInput(filepath: string): string[] {
    return AoCFileReader.readInput(filepath);
  }

  parseLines(): any[] {
    return Solver.getInput(__dirname + 'input.txt');
  }

  static getSolution(): number {
    return -1;
  }
}
