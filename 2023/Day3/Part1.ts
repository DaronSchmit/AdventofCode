import {Solver} from '../Solver';

class Part1 extends Solver {
  parseLines(): any[] {
    const lines = Part1.getInput(__dirname + '/input.txt');
    return []
  }

  getSolution(): number {
    return -1
  }
}

export const solution = Part1.getSolution;