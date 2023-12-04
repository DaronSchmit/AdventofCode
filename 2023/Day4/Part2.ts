import { Solver } from '../Solver';

class Card {
  cardNumber: number;
  winningNumbers: number[];
  numbers: number[];
  numWinners: number;

  constructor(cardName: string, winningNumbers: number[], numbers: number[]) {
    this.cardNumber = Number(cardName.replace('Card ', ''));
    this.winningNumbers = winningNumbers;
    this.numbers = numbers;
    this.numWinners = this.numbers.filter((n) =>
      this.winningNumbers.includes(n)
    ).length;
  }
}

class CardTable {
  cards: Card[];
  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getCard(cardNumber: number): Card {
    if (cardNumber > this.cards.length) {
      const newCard = new Card('', [], []);
      newCard.numWinners = 0;
      return newCard;
    }
    return this.cards[cardNumber - 1];
  }

  getCardValue(card: Card): number {
    if (card.numWinners === 0) {
      return 1;
    }
    let subCards = 0;
    let index = 1;
    while (index <= card.numWinners) {
      subCards += this.getCardValue(this.getCard(card.cardNumber + index));
      index += 1;
    }
    return subCards + 1;
  }

  get totalCardValue(): number {
    let count = 0;
    this.cards.forEach((card) => {
      count += this.getCardValue(card);
    });
    return count;
  }
}

class Part2 extends Solver {
  static parseLines(): Card[] {
    const lines = Part2.getInput(__dirname + '/input.txt');
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
    const table = new CardTable(Part2.parseLines());
    // console.log(table.getCardValue(table.getCard(1)));
    return table.totalCardValue;
  }
}

export const solution = Part2.getSolution;
