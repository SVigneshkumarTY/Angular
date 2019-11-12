import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private service:LibraryServiceService) { }
  login(){
    this.router.navigateByUrl("/login");
  }
  logout(){
    this.service.status1=false;
    this.service.status=true;
    this.service.selectedUser=null;
    console.log(this.service.selectedUser)
    this.router.navigateByUrl("/login");
  }
  signUp(){
    this.router.navigateByUrl("/register");
  }

  ngOnInit() {
  }

}
