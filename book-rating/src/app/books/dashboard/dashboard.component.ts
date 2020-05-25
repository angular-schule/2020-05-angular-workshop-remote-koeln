import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

/**
 * Dieser Text ist später in der Dokumentation zu sehen:
 * jsdoc.app
 */
@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  // VORSICHT: Bug, sobald wir Daten über Ajax laden
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) { }

  ngOnInit(): void {
    this.books = [{
      isbn: '111',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '222',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    },
    {
      isbn: '333',
      title: 'React',
      description: 'Anderes Buch',
      rating: 1
    },
  ];
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.update(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    this.update(ratedBook);
  }

  update(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
