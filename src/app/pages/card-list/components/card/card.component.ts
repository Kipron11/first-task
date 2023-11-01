import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: true }) cardDetails!: { id: number; text: string[] };
  @Output() onAddTextEvent = new EventEmitter<number>();

  addText(id: number) {
    this.onAddTextEvent.emit(id);
  }
}
