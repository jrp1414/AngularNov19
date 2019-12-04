import { Component, OnInit } from '@angular/core';
import{products} from "../product-api";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  imageWidth: string = "75px";
  imageHeight: string = "75px";
  products = products;
  Test: string = "yellow";
  Message: string="";
  ReceiveDataFromChild(data) {
    console.log(data);
    this.Message=data;
  }


  
}
