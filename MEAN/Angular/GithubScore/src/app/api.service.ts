import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  public retrieveGithubUser(username) {
    console.log(username);
    if (username) {
      return this._http.get(`https://api.github.com/users/${username}`)
      .map( data => data.json() )
      .toPromise();
    }
  }

}