import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  dict = [
    {email: 'bill@gates.com', important: true, subject: 'New Windows', content: 'Windows XI will launch in 2100'},
    {email: 'bill@gates.com', important: false, subject: 'New Windows', content: 'Windows XI will launch in 2100'},
    {email: 'bill@gates.com', important: true, subject: 'New Windows', content: 'Windows XI will launch in 2100'},
    {email: 'bill@gates.com', important: false, subject: 'New Windows', content: 'Windows XI will launch in 2100'}
  ]
  myColor = 'red';
}
