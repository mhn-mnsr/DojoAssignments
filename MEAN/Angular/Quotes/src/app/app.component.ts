import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [{quote: 'I m never really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.', author: 'Ada Lovelace', rating: 25}]

  handleCreateQuotes(quote){
    console.log("handlingQuoteCreation")
    this.quotes.push(quote);
  }

  handleDeleteQuotes(idx){
    console.log("Handling delete quotes")
    this.quotes.splice(idx, 1);
  }

}