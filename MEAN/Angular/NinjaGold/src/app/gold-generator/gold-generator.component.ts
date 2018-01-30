import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-gold-generator',
  templateUrl: './gold-generator.component.html',
  styleUrls: ['./gold-generator.component.css']
})
export class GoldGeneratorComponent implements OnInit {
  gold;
 

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this.gold = this._goldService.retrieveGold();
  
  }
  farm(){
    console.log("Hitting farm in goldGen");
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
