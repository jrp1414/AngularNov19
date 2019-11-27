import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  ClickExample() {
    alert("Test");
  }

  DoubleClickExample() {
    alert("Double Clicked");
  }

  TextChange(data) {
    console.log(data.target.value);
  }
  Message:string;
  MouseEnter(){
    this.Message="Entered";
  }

  MouseLeave(){
    this.Message="Out";
  }

}
