import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }
  addUser(){
    this.router.navigateByUrl("/register");
  }
  viewUsers(){
    this.router.navigateByUrl("/viewusers");
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
