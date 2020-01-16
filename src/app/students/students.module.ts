import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {path:"students",component:StudentsComponent,children:[
    {path:":id",component:StudentDetailsComponent},
    {path:":id/edit",component:StudentEditComponent}
  ]}
];

@NgModule({
  declarations: [
    StudentsComponent, 
    StudentDetailsComponent, 
    StudentEditComponent, 
    StudentNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsModule { }
