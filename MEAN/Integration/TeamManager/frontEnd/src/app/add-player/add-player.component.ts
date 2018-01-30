import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { Player } from '../player'

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player = new Player();

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this._apiService.addPlayer(this.player)
    .then(data =>{
      if(data.error){
        console.log(data.error)
      } else {
        this._router.navigateByUrl('players/list');
      }
    });
  }  
}
