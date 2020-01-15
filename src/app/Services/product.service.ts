import { Injectable, Type } from '@angular/core';
import { Product,products } from '../products/product-api';
import { LoggingService } from './logging.service';


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
    // this.ls.SuccessLog('Success.....');
    return this.products;
  }

  getProductDetails(id:number){
    return this.products.find((product)=>product.productId==id);
  }
}
