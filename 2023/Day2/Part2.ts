import { Solver } from '../Solver';

class Part2 extends Solver {
  static parseLines(): number[] {
    const regex = /\d{1,2} (red|blue|green)/g;
    const lines = Part2.getInput(__dirname + '/input.txt');
    const mapped: number[] = lines.map((line): number => {
      const maxes = {
        green: 0,
        red: 0,
        blue: 0,
      };
      const lineColorQuanties = [...line.matchAll(regex)].map((m) => m[0]);
      lineColorQuanties.forEach((cq) => {
        const [quantity, color] = cq.split(' ');
        maxes[color] = Math.max(maxes[color], Number(quantity));
      });
      const power = maxes.blue * maxes.green * maxes.red;
      return power;
    });

    return mapped;
  }

  static getSolution(): number {
    return Part2.parseLines().reduce((a, b) => a + b, 0);
  }
}

export const solution = Part2.getSolution;
