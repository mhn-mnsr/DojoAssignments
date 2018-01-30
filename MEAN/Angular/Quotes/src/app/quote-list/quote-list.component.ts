import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() deleteQuotes = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(quote){
    quote.rating++;
  }

  voteDown(quote){
    quote.rating--;
  }

  deleteQuoteTriggered(idx){
    this.deleteQuotes.emit(idx)
  }

}
