import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  constructor(private router: Router, private libraryService: LibraryServiceService) { }
  addBook(){
    this.router.navigateByUrl("/addbooks")
  }
  viewBooks() {
    this.libraryService.getAllBook();
    console.log(this.libraryService.books);
    this.router.navigateByUrl("/viewbooks");
  }

  books(){
    this.router.navigateByUrl("/books")
  }
  acceptBookRequest(uId , bId) {
    this.libraryService.accepBookIssueRequest(uId, bId).subscribe(res => {
    this.libraryService.studentBookRequest.userId = '';
    this.libraryService.studentBookRequest.bookId = '';
    this.libraryService.printMessage = 'Request accepted';
    this.router.navigateByUrl( '/student');
    }, err => {
     console.log(err);
    });
  }

  declineBookReq(userId, bookId) {
    this.libraryService.studentBookRequest.userId = '';
    this.libraryService.studentBookRequest.bookId = '';
    this.libraryService.printMessage = 'Request Declined';
    this.router.navigateByUrl( '/student');
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
