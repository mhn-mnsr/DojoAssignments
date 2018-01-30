import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class ApiService {

  constructor(private _http: Http) { }


  getPlayers(){
    return this._http.get('/api/getPlayers')
    .map( data=> data.json())
    .toPromise();
  }

  addPlayer(newPlayer){
    return this._http.post('/api/addPlayer', newPlayer)
    .map( data => data.json())
    .toPromise()
  }

  deletePlayer(player){
    return this._http.post('/api/deletePlayer', player)
    .map(data=> data.json())
    .toPromise()
  }

  changeStatus(id, game, status){
    return this._http.get(`/api/changeStatus/${id}/${game}/${status}`)
    .map( data=> data.json())
    .toPromise()
  }
}
