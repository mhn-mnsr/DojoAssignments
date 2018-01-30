import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Quote } from './quote';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css']
})
export class QuoteCreateComponent implements OnInit {
  @Output() createQuotes = new EventEmitter();
  newQuote = {quote: '', author: '', rating : 0};

  constructor() { }

  ngOnInit() {
  }

  submit(formData){
    console.log(formData);
    this.createQuotes.emit(this.newQuote);
    this.newQuote = {quote: '', author: '', rating : 0};
  }

}
