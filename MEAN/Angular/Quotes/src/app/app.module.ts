import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteCreateComponent } from './quote-create/quote-create.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
