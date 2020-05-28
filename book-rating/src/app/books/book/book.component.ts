import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // wichtig!
})
export class BookComponent {

  @Input()
  book: Book = {
    isbn: '000',
    title: 'Dummy',
    description: 'Dummy',
    rating: 5,
    price: 0
  };

  @Input()
  test = 'Test';

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }
}
