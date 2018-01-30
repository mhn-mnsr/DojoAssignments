import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {
  places: Array<string> = ["farm", "cave", "casino", "house"];
  place: string = '';
  gold: number = 0;
  sum: number = 0;

  constructor() { }

  retrieveGold(){
    return this.gold;
  }

  farmGold(){
    this.gold = Math.floor(Math.random()* 5 ) + 2;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[0];
    return this.sum;
  }

  caveGold(){
    this.gold = Math.floor(Math.random() * 10) + 5;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[1];
    return this.sum;
  }

  casinoGold(){
    var min = 100;
    var max = -101;
    this.gold = Math.floor(Math.random() * (max - min)) + min;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[2];
    return this.sum;
  }

  houseGold(){
    this.gold = Math.floor(Math.random() * 15) + 7;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[3];
    return this.sum;
  }

}