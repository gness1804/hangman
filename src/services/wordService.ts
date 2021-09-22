import { words } from '../data/words';

export class WordService {
  word: string;

  constructor(public maxWordLength = 6) {
    this.word = '';
  }

  setNewWord(): void {
    const filteredWords = words
      .split(',')
      .filter((word) => word.length <= this.maxWordLength)
      .map((word) => word.toLowerCase());

    const randomIndex = Math.floor(
      Math.random() * (filteredWords.length - 0 + 1) + 0,
    );
    this.word = filteredWords[randomIndex];
  }
}
