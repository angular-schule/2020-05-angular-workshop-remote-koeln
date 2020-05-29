import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';

import { BookComponent } from 'src/app/books/book/book.component';
import { ToArrayPipe } from 'src/app/books/shared/to-array.pipe';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    // AppComponent
    BookComponent,
    ToArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  // entryComponents --- bis Angular 9
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const webComponent = createCustomElement(BookComponent, { injector: this.injector });
    // <book-component>
    customElements.define('book-component', webComponent);
  }
}
