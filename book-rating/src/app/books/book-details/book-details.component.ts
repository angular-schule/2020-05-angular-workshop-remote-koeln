import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, share, shareReplay, catchError, retry } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(p => p.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => of({
        isbn: '000',
        title: 'Es gab einen Fehler',
        description: e.message
      }))
    ))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }
}
