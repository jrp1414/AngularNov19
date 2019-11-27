import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {
  OneWayData:string;
  OneWayChange(data){
    this.OneWayData = data.target.value;
  }

  UpdateValueOneWay(){
    this.OneWayData = "One Way Failed";
  }


  TwoWayData:string;
  TwoWayChange(data:string){
    this.TwoWayData = data.toUpperCase();
  }
  UpdateValueTwoWay(){
    this.TwoWayData = "Two Way worked";
  }

  UpdateValueTwoWay2(){
    this.TwoWayData = "Two Way In Segregated Syntax worked";
  }


}
