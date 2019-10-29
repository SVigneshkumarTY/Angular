import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router:Router) { }

  registerUser(registerform) {
       this.libraryService.addUser(registerform.value).subscribe(res => {
        registerform.reset();
        this.router.navigateByUrl('/viewusers');
      }, err => {
        console.log('user not registered.');
      });
  }

  navigateAdminHome() {
  this.router.navigateByUrl('/admin');
  }

  login(){
    this.router.navigateByUrl("/login")
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
