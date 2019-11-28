import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuct-directives',
  templateUrl: './stuct-directives.component.html',
  styleUrls: ['./stuct-directives.component.css']
})
export class StuctDirectivesComponent {
  filterText:string;
  students=[
    {Id:1,Name:"Ram",Age:25},
    {Id:2,Name:"Ram",Age:24},
    {Id:3,Name:"Ram",Age:22},
    {Id:4,Name:"Ram",Age:17},
    {Id:5,Name:"Ram",Age:30},
    {Id:6,Name:"Ram",Age:21}
  ];

  AddStudent(){
    this.students.push({Id:7,Name:"Arjun",Age:23});
  }
}
