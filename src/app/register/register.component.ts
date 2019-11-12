import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message='';
  constructor(private libraryService: LibraryServiceService, private router:Router) { }

  registerUser(registerform) {
    if(confirm('Confirm to Add This User...?')){
    this.libraryService.addUser(registerform.value).subscribe(res => {
      console.log('user registered.');
      registerform.reset();
      alert('User Added Successfully')
      this.message='user registered successfully';
      this.router.navigateByUrl("/admin");
      
    }, err => {
      console.log('user not registered.');
    });
  }else{
    registerform.reset();
    alert('User Not Added..!')
    this.router.navigateByUrl("/admin")
  }
  }

  login(){
    this.router.navigateByUrl("/login")
  }
  goHome(){
    this.router.navigateByUrl("/admin");
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
