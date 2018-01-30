import { Component } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold;

  constructor (private _goldService: GoldService) { }

  farm() {
    this._goldService.farmGold();
    this.gold = this._goldService.retrieveGold();
  }

  cave(){
    this._goldService.caveGold();
    this.gold = this._goldService.retrieveGold();
  }

  casino(){
    this._goldService.casinoGold();
    this.gold = this._goldService.retrieveGold;
  }

  house(){
    this._goldService.houseGold();
    this.gold = this._goldService.retrieveGold;
  }
}
