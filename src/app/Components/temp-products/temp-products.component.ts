import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/Services/logging.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-temp-products',
  templateUrl: './temp-products.component.html',
  styleUrls: ['./temp-products.component.css']  
})
export class TempProductsComponent implements OnInit {

  constructor(public ls:LoggingService) { 

    ls.SuccessLog("Temp Products");
  }

  ngOnInit() {
    
  }

}
