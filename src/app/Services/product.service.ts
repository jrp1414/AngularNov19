import { Injectable, Type } from '@angular/core';
import { Product,products } from '../Components/products/product-api';
import { LoggingService } from './logging.service';
import { ProductsListComponent } from '../Components/products/products-list/products-list.component';

@Injectable({
  providedIn:"root"
  // providedIn:ProductsListComponent
})
export class ProductService {
  private products:Product[] = products;
  
  constructor(public ls:LoggingService) {
       
  }

  getProducts(){
    //nvjnfvnjfn
    this.ls.SuccessLog('Success.....');
    return this.products;
  }
}
