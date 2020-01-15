import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-api';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private ps: ProductService,private router:Router) { }

  ngOnInit() {
    // let id = +this.route.snapshot.params["id"];
    // this.product = this.ps.getProductDetails(id);

    // this.route.params.subscribe((paramList) => {
    //   let id = +paramList["id"];
    //   this.product = this.ps.getProductDetails(id);
    // });

    this.route.paramMap.subscribe((paramList) => {
      let id = +paramList.get("id");
      this.product = this.ps.getProductDetails(id);
    });
  }

  RedirectToEdit(id:number){
    console.log(this.route);
    this.router.navigate(["/products",id,"edit"],{relativeTo:this.route.parent});
  }

  BackToProductsList(){
    this.router.navigate(["/products"]);
  }

  

}
