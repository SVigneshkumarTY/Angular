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
    if(registerform.value.userId){
      this.libraryService.updateUser(registerform.value).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl("/viewusers")
      })
    }
    else{
    this.libraryService.addUser(registerform.value).subscribe(res => {
      console.log('user registered.');
      this.message='user registered successfully';
      
    }, err => {
      console.log('user not registered.');
    });
  }
}
  login(){
    this.router.navigateByUrl("/login")
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
