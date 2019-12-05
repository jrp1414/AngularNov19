import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { products, Product } from "../product-api";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  imageWidth: string = "75px";
  imageHeight: string = "75px";
  productList = products;
  Test: string = "yellow";
  Message: string = "";

  @ViewChild("filter") filter: ElementRef;
  today = new Date();
  ReceiveDataFromChild(data) {
    console.log(data);
    this.Message = data;
  }

  FilterChanged(data) {
    let filteredProducts: Product[] = [];

    products.forEach(prod => {
      if (prod.productName.toLocaleLowerCase().indexOf(this.filter.nativeElement.value.toLocaleLowerCase()) != -1) {
        filteredProducts.push(prod);
      }
    });
    this.productList = filteredProducts;
  }



}
