import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  users = [];
  people = false;
  user = new User ();

  submit(){
    this.users.push(this.user);
    this.user = new User();
    this.people = true;
  }
}
