import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }

  viewBooks(){
    this.router.navigate(["/viewbooks"]);
  }
  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
