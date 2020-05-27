import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

/**
 * Dieser Text ist später in der Dokumentation zu sehen:
 * jsdoc.app
 */
@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  // VORSICHT: Bug, sobald wir Daten über Ajax laden
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  currentDate: Date;

  constructor(private br: BookRatingService, private bs: BookStoreService) {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.bs.getBooks().subscribe(books => this.books = books);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.update(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: 5
    // };
    this.update(ratedBook);
  }

  update(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }
}
