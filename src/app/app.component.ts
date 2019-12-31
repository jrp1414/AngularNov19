import { Component } from '@angular/core';
import { LoggingService } from './Services/logging.service';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // template:"<h1>Hello World. Inline Template Example</h1>"+
  // "<h2>Second Line, Inline Template Example</h2>",
  // template:`<h1>Hello World. Multiple Lines Template Example</h1>
  //           <h2>Second Line, Multiple Lines Template Example</h2>`,
  templateUrl: './app.component.html',
//   styles:[`div{
//     background-color: aqua;
// }`]
//styleUrls:["./app.component.css"]
// providers:[LoggingService]
})
export class AppComponent {
  //
}


