import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = null;
  score = null;

  userExists = null;

  constructor(private _apiService: ApiService) {}

  calculateScore() {
    console.log(this.username)
    this._apiService.retrieveGithubUser(this.username)
    .then( (user) => {
      if (user.id) {
        this.userExists = true;
        this.score = user.public_repos + user.followers;
      } else {
      this.userExists = false; 
      this.score = null;
      }
      this.username = null;
      })
      .catch( (err) => {
        this.userExists = false;
      });
  }
}
