import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-logged-data',
  templateUrl: './logged-data.component.html',
  styleUrls: ['./logged-data.component.css']
})
export class LoggedDataComponent implements OnInit {

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

}
