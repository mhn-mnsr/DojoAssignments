import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { User } from '../user'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = new User();
  users: any;

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit(){
    this._apiService.addUser(this.user)
    this.user = new User();
    }
}

