import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LoggingService } from 'src/app/Services/logging.service';


@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
  // encapsulation:ViewEncapsulation.Emulated
})
export class ProductThumbnailComponent {

  constructor(public ls:LoggingService) {
    
  }
  
  @Input('pd') product:any;
  @Output('ed') emitData:EventEmitter<string>=new EventEmitter<string>();

  

  SendDataToParent(){
    let name = prompt("Enter your Name");
    this.ls.SuccessLog(name);
    this.emitData.emit(name);
  }

  

}
