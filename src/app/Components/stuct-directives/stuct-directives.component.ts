import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuct-directives',
  templateUrl: './stuct-directives.component.html',
  styleUrls: ['./stuct-directives.component.css']
})
export class StuctDirectivesComponent {
  filterText:string="";
  students=[
    {Id:1,Name:"Ram",Age:25,Grade:'A'},
    {Id:2,Name:"Ram",Age:24,Grade:'D'},
    {Id:3,Name:"Ram",Age:22,Grade:'B'},
    {Id:4,Name:"Ram",Age:17,Grade:'C'},
    {Id:5,Name:"Ram",Age:30,Grade:'A'},
    {Id:6,Name:"Ram",Age:21,Grade:'E'}
  ];

  AddStudent(){
    this.students.push({Id:7,Name:"Arjun",Age:23,Grade:'F'});
  }
}
