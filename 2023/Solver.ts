import { AoCFileReader } from './AoCFileReader';

export abstract class Solver {
  getInput(): string[] {
    return AoCFileReader.readInput(__dirname + 'input.txt');
  }

  static getSolution(): number {
    return -1;
  }
}
