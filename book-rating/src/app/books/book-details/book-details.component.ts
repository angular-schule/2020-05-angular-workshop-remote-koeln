import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, Subscription, Observable } from 'rxjs';
import { map, tap, filter, scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => this.isbn = paramMap.get('isbn'));


    //  HIER GEHTS LOS

    // Observer!
    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE')
    };

    // Observable
    const observable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(x => x * 10),
      // Hands on
      filter(x => x >= 30),
      reduce((x , y) => x + y),
      map(x => '🤠'.repeat(x))
    );

    // Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1000);
  }
}
