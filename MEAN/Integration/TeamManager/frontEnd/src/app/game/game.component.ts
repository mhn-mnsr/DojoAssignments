import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: any;
  players: any;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlayers();

    this.game = 'g1'

    this._route.params.subscribe(params => {
      this.game = 'g' + params['id']
    })
  }

  getPlayers(){
    this._apiService.getPlayers()
    .then(data=> this.players = data);
  }

  changeStatus(id, newStatus){
    this._apiService.changeStatus(id, this.game, newStatus)
    // .then(data => {
    //   this.getPlayers()
    // });
  }

}
