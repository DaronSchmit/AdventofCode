import { Solver } from '../Solver';

class Card {
  cardName: string;
  winningNumbers: number[];
  numbers: number[];
  winners: number[];
  cardValue: number;

  constructor(cardName: string, winningNumbers: number[], numbers: number[]) {
    this.cardName = cardName;
    this.winningNumbers = winningNumbers;
    this.numbers = numbers;
    this.winners = this.numbers.filter((n) => this.winningNumbers.includes(n));
    this.cardValue =
      this.winners.length === 0 ? 0 : 2 ** (this.winners.length - 1);
  }
}

class Part1 extends Solver {
  static parseLines(): Card[] {
    const lines = Part1.getInput(__dirname + '/input.txt');
    const cards = lines.map((line) => {
      const [cardName, rest] = line.split(': ');
      const [winningNumbers, numbers] = rest.split(' | ').map((r) =>
        r
          .replace(/\s\s/g, ' ')
          .split(' ')
          .map((s) => Number(s))
      );
      return new Card(cardName, winningNumbers, numbers);
    });

    return cards;
  }
  static getSolution(): number {
    return Part1.parseLines()
      .map((card) => card.cardValue)
      .reduce((a, b) => a + b, 0);
  }
}

export const solution = Part1.getSolution;
