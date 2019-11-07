import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  updateUser(user) {
    this.libraryService.selectedUser = user;
    this.router.navigateByUrl('/updateUser');
  }

  removeUser(user) {
     console.log(user);
     this.libraryService.removeUser(user.userId).subscribe(res => {
       this.libraryService.getAllUsers();
       this.router.navigateByUrl('/viewusers');
       console.log('deleted');
     }, err => {
         console.log(err);
     });
  }

  navigateAdminHome() {
    this.router.navigateByUrl('/admin');
  }

  ngOnInit() {
     document.body.classList.add('bg-img');
     this.libraryService.getAllUsers();
     console.log(this.libraryService.users);
  }

}
