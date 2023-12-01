import { readFileSync } from 'fs';

export abstract class AoCFileReader {
  static readInput(filePath: string): string[] {
    try {
      const data = readFileSync(filePath, 'utf8')
        .split('\n')
        .map((each) => each.trim());
      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
