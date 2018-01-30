import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Product } from './../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any [] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.products.subscribe( (products) => {
      this.products = products;
      console.log(this.products);
    })
  }

  deleteProduct(product){
    let idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._dataService.updateProducts(this.products);
  }

}
