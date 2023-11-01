import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private readonly sentences = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Elementum eu facilisis sed odio.',
    'Non blandit massa enim nec dui.',
    'Tellus in hac habitasse platea dictumst.',
    'Sit amet risus nullam eget felis.',
    'Imperdiet massa tincidunt nunc pulvinar.',
    'Sit amet est placerat in egestas erat imperdiet sed.',
    'At auctor urna nunc id cursus metus aliquam eleifend. ',
    'Varius sit amet mattis vulputate enim nulla.',
    'Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.',
    'Ante metus dictum at tempor commodo.',
    'Gravida neque convallis a cras.',
    'Et netus et malesuada fames ac turpis egestas integer.',
    'Placerat vestibulum lectus mauris ultrices eros.',
    'Sit amet risus nullam eget felis eget nunc.',
  ];

  getRandomSentencesFromArray(count: number): string[] {
    const randomSentences = new Set();

    while (randomSentences.size < count) {
      const randomIndex = Math.floor(Math.random() * this.sentences.length - 1);
      randomSentences.add(this.sentences[randomIndex]);
    }

    return Array.from(randomSentences) as string[];
  }
}
