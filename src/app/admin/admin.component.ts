import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { }
  addUser() {
    this.router.navigateByUrl('/register');
  }
  viewUsers() {
    //this.libraryService.getAllUsers();
    this.router.navigateByUrl('/viewusers');
  }
  searchByName(userName) {
    this.libraryService.searchByName(userName.value);
    userName.reset();
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
