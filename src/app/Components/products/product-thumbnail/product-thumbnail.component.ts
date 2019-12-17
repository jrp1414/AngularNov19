import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
  // encapsulation:ViewEncapsulation.Emulated
})
export class ProductThumbnailComponent {
  
  @Input('pd') product:any;
  @Output('ed') emitData:EventEmitter<string>=new EventEmitter<string>();

  

  SendDataToParent(){
    let name = prompt("Enter your Name");
    this.emitData.emit(name);
  }

}
