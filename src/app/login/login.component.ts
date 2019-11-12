import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg='';
  invalidLogin=false;
 

  constructor(private libaryService: LibraryServiceService, private router: Router ,private service:AuthenticationserviceService) { }
  
  userLogin(name,password,form) {
    form.reset();
  
    this.libaryService.userLogin(name,password).subscribe(data => {

      if(data.statusCode===200){
      this.libaryService.selectedUser = data.users[0];
      this.libaryService.userName = data.users[0].userName;
      this.libaryService.userId = data.users[0].userId;
      this.libaryService.status=false;
      this.libaryService.status1=true;
      localStorage.setItem('reqUserId', this.libaryService.selectedUser.userId);
      if (this.service.authenticate(this.libaryService.selectedUser.userEmail)) {

        if (this.libaryService.selectedUser.userRole === 'Admin') {
          this.router.navigateByUrl('/admin');
        } else if (this.libaryService.selectedUser.userRole === 'Librarian') {
          this.router.navigateByUrl('/librarian');
        } else {
          this.router.navigateByUrl('/student');
        }
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
    }else{
      this.libaryService.printMessage = 'Invalid User and Password';
      setTimeout(() => {
        this.libaryService.printMessage = '';
      }, 3000);
      this.router.navigateByUrl('/login');
    
    }
    }, err => {
      this.libaryService.printMessage = 'Invalid Email Or Password';
      setTimeout(() => {
        this.libaryService.printMessage = '';
      }, 3000);
      this.router.navigateByUrl('/login');
    });
  }


  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}




