import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class DataService {
  products: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  updateProducts(newProducts : any ): void {
    const tempData = this.products.getValue();
    tempData.push(newProducts);
    console.log("In service");
    this.products.next(tempData);
  }

}
