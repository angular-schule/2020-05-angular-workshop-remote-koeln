import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from 'src/app/books/book/book.component';
import { ToArrayPipe } from 'src/app/books/shared/to-array.pipe';


@NgModule({
  declarations: [
    // AppComponent
    BookComponent,
    ToArrayPipe // weitere Abhängigkeiten (falls vorhanden)
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [] // leer!
  // entryComponents: [] -- nicht mehr notwendig mit Ivy
})
export class AppModule {
  constructor(injector: Injector) {
    const webComponent = createCustomElement(BookComponent, { injector });
    customElements.define('book-component', webComponent);
  }
}
