import { Component } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { TextService } from 'src/app/shared/services/text/text.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  private readonly initialSentenceCount = 4;

  cards: Card[] = [
    {
      id: 1,
      text: this.textService.getRandomSentencesFromArray(
        this.initialSentenceCount
      ),
    },
    {
      id: 2,
      text: this.textService.getRandomSentencesFromArray(
        this.initialSentenceCount
      ),
    },
  ];

  constructor(private readonly textService: TextService) {}

  addTextToCard(id: number): void {
    let card = this.cards.find((item) => item.id === id);
    const sentence = this.textService.getRandomSentencesFromArray(1)[0];

    card?.text.push(sentence);
  }
}
