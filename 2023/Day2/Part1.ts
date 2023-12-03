import { Solver } from '../Solver';

type Game = {
  gameNumber: number;
  valid: boolean;
};

enum MaxCubes {
  red = 12,
  green = 13,
  blue = 14,
}

class Part1 extends Solver {
  static parseLines(): Game[] {
    const regex = /\d{1,2} (red|blue|green)/g;
    const lines = Part1.getInput(__dirname + '/input.txt');
    const mapped: Game[] = lines.map((line): Game => {
      const gameNumberMatch = line.match(/\d{1,3}/) ?? [0];
      const gameNumber = Number(gameNumberMatch[0]) ?? 0;
      const lineColorQuanties = [...line.matchAll(regex)].map((m) => m[0]);
      const valid = lineColorQuanties.every((cq) => this.checkQuantity(cq));
      return { gameNumber, valid };
    });

    return mapped;
  }

  static checkQuantity(colorQuantity: string): boolean {
    const [quantity, color] = colorQuantity.split(' ');
    return MaxCubes[color] >= Number(quantity);
  }

  static getSolution() {
    return Part1.parseLines()
      .filter((g) => g.valid)
      .map((g) => g.gameNumber)
      .reduce((a, b) => a + b, 0);
  }
}

export const solution = Part1.getSolution;
