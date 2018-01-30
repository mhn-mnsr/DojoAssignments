import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {
  users = new User();
  usersObservable = new BehaviorSubject(this.users);

  constructor(private _http: Http) { }

  addUser(newUser){
    return this._http.post('/api/addUser', newUser)
    .map( data => data.json())
    .toPromise()
  }

  getUsers(){
    return this._http.get('/api/getUser')
    .map(data=> data.json())
    .toPromise();
  }
}
