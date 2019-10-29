import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: AuthenticationService ,private router:Router) { }
  login(){
    this.router.navigateByUrl("/login");
  }
  signUp(){
    this.router.navigateByUrl("/register");
  }

  ngOnInit() {
  }

}
