import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: any;

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    this._apiService.getPlayers()
    .then( data => this.players = data);
  }

  deletePlayer(id){
    this._apiService.deletePlayer(id)
    .then(data => {
      if(data.error){
        console.log("Delete error")
      } else {
        this.getPlayers();
      }
    })
  }

}
