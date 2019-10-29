import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  navigateStudentHome() {
    this.router.navigateByUrl('/student');
  }

  returnBook(book) {
     this.libraryService.returnBook(book).subscribe(res => {
        this.libraryService.showIssueBooks();
        this.libraryService.printMessage = 'Book Returned successfully';
        this.router.navigateByUrl('/student');
     }, err => {
        console.log('book not returned..');
     });
  }

  ngOnInit() {
    this.libraryService.showIssueBooks();
    document.body.classList.add('bg-img');
  }

}
