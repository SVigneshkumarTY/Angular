import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { 
    setTimeout(() => {
      libraryService.printMessage = '';
    } , 5000);
  }
  // changePassword(){
  //   this.router.navigate(["/changepassword"])
  // }

  viewBooks() {
    this.router.navigate(["/viewbooks"]);
  }

  requestForBook(book) {
    this.libraryService.selectedBook = book;
    this.libraryService.studentBookRequest.userId = localStorage.getItem('reqUserId');
    this.libraryService.studentBookRequest.bookId = this.libraryService.selectedBook.bookId;
    this.router.navigateByUrl('/librarian');
  }
  ngOnInit() {
    this.libraryService.getAllBook();
    document.body.classList.add('bg-img');
  }

}
