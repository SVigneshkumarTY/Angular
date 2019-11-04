import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  updateUser(registerform) {
    this.libraryService.updateUser(registerform.value).subscribe(res => {
      console.log('udated..');
      registerform.reset();
      this.router.navigateByUrl('/viewusers');
   }, err => {
      console.log('not updated..');
   });
  }
  cancelUpdate() {
    this.router.navigateByUrl('/viewusers');
  }

  ngOnInit() {
  }

}
