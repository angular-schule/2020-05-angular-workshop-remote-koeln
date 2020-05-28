import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer } from 'rxjs';

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

    of('😀', '😎', '🤪').subscribe(observer);

    timer(0, 500).subscribe(observer);

  }
}
