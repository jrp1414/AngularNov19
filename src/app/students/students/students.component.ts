import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  students:Student[];
  constructor(public ss:StudentService) { }

  ngOnInit() {
    this.students = this.ss.GetStudentsList();
  }
}
