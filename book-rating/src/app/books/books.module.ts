import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ToArrayPipe } from './shared/to-array.pipe';
import { CreateBookComponent } from './create-book/create-book.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    ToArrayPipe,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule --- NIIIEMALS machen! https://github.com/angular/angular/issues/20575
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
