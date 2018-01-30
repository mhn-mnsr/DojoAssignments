import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { DataService } from './../data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _dataService: DataService, private _router: Router) { 
  }
  productsList;
  product: Product;
  id;
  
  ngOnInit() {
    this._dataService.products.subscribe(
      (products) => { this.productsList = products; }
    )
    this._route.paramMap.subscribe( params => 
      {this.id = params.get('productid');
      console.log(this.id)
    })
    
    for( let idx = 0 ; idx < this.productsList.length; idx++){
      console.log("this is in for loop")
      console.log(this.productsList[idx].id)
      if(this.productsList[idx].id == this.id){
        console.log("In the if statment")
        this.product = this.productsList[idx]
      }
    }
  }

  update(){
    // this._dataService.updateProducts(this.product);
    this._router.navigate(['/products']);
  }

}
