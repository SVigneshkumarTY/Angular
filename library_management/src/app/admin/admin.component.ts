import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name='';
  constructor(private router:Router,private service:LibraryServiceService) {
    this.name=service.userName;
   }
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
