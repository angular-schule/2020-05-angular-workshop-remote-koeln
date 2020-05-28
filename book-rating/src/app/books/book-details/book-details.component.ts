import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, Subscription, Observable } from 'rxjs';

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
    const observable = new Observable(subscriber => {
      subscriber.next('😍');
      setTimeout(() => subscriber.next('😘'), 1000);
      const x = setTimeout(() => { subscriber.next('🌭'); console.log('WURST!!!'); }, 2000);
      setTimeout(() => subscriber.complete(), 1500);

      return () => {
        console.log('Da wurde unsubscribed, dann muss ich wohl aufräumen!')
        clearTimeout(x);
      };
    });

    // Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1000);
  }
}
