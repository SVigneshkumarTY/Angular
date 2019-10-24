import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  date = Date.now();
  constructor( private router: Router) { }

  requestUser(user){
      this.router.navigateByUrl('/firebase');
  }

  ngOnInit() {
    // this.firebaseService.getData();
    // console.log(this.firebaseService.users);
  }

}
