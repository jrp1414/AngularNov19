import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product, description } from "../product-api";
import { LoggingService } from 'src/app/Services/logging.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  // providers:[ProductService]
})
export class ProductsListComponent {

  imageWidth: string = "75px";
  imageHeight: string = "75px";
  productList:Product[] = [];
  Test: string = "yellow";
  Message: string = "";
  filterText:string="";

  
  constructor(public ls:LoggingService,public ps:ProductService) {
      this.productList = ps.getProducts();
  }

  @ViewChild("filter") filter: ElementRef;
  today = new Date();
  ReceiveDataFromChild(data) {
    console.log(data);
    this.Message = data;
  }

  FilterChanged(data) {
    this.ls.SuccessLog("Success");
    let filteredProducts: Product[] = [];
    this.productList.forEach(prod => {
      if (prod.productName.toLocaleLowerCase().indexOf(this.filter.nativeElement.value.toLocaleLowerCase()) != -1) {
        filteredProducts.push(prod);
      }
    });
    this.productList = filteredProducts;
  }

  TestImpurity(){
    this.productList.push(new Product(7,"Leaf Rake","Test","Test",25,5,"Test",new description("Test","Test")));
    this.ls.ErrorLog("Test");
  }



}
