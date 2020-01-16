import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {

  student:Student;
  constructor(public ss:StudentService, public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((paramList)=>{
      let id = +paramList["id"];
      this.student = this.ss.GetStudentDetails(id);
      console.log(paramList["fName"]);
      console.log(paramList["lName"]);
    });

    // console.log(this.route.snapshot.queryParams["FName"]);
    // console.log(this.route.snapshot.queryParams["LName"]);

    // this.route.queryParams.subscribe((qparams)=>{
    //   console.log(qparams["FName"]);
    //   console.log(qparams["LName"]);
    // });

    // this.route.fragment.subscribe((f)=>{
    //   console.log(f);
    // });
    
  }

  Edit(studentId:number){
    this.router.navigate([studentId,"edit"],{relativeTo:this.route.parent});
  }

}
