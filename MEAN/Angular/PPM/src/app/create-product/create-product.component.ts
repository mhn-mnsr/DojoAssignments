import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Product } from './../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  products: any [] = [];
  newProducts: Product = new Product();

  constructor(private _dataService: DataService, private _router: Router) { }


  ngOnInit() {
    this._dataService.products.subscribe(
      (products) => { this.products = products;}
    );
  }

  create(){
    if (this.newProducts.imgUrl.length > 1 ||
      this.newProducts.imgUrl != 'null') {
        console.log(this.newProducts);
        console.log(this.products);
        this._dataService.updateProducts(this.newProducts);
        this._router.navigate(['products']);
      }
  }
}
