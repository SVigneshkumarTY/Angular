import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  constructor(private libaryService: LibraryServiceService, private router: Router, private authenticationService: AuthenticationService) { }
  userLogin(userLoginForm) {
    this.libaryService.userLogin(userLoginForm.value).pipe(map(resData => {
      return resData;
    })).subscribe(data => {
      this.libaryService.selectedUser = data;
      localStorage.setItem('reqUserId', this.libaryService.selectedUser.userId);
      if (this.authenticationService.authenticate(this.libaryService.selectedUser.userEmail)) {

        if (this.libaryService.selectedUser.userRole === 'admin') {
          this.router.navigateByUrl('/admin');
        } else if (this.libaryService.selectedUser.userRole === 'librarian') {
          this.router.navigateByUrl('/librarian');
        } else {
          this.router.navigateByUrl('/student');
        }
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
    }, err => {
      this.libaryService.printMessage = 'Invalid User and Password';
      setTimeout(() => {
        this.libaryService.printMessage = '';
      }, 5000);
      this.router.navigateByUrl('/login');
    });
  }
  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
