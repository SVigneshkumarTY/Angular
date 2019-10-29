import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router ) { }
  updateBook(book) {
    this.libraryService.selectedBook = book;
    this.router.navigateByUrl('/updateBook');
  }

  deleteBook(book) {
    this.libraryService.removeBook(book.bookId).subscribe(res => {
      this.libraryService.getAllBook();
      this.router.navigateByUrl('/books');
    }, err => {
      console.log('not deleted');
    });
  }

  librarianHomePage() {
    this.router.navigateByUrl('/librarian');
  }
  ngOnInit() {
    this.libraryService.getAllBook();
    document.body.classList.add('bg-img');
  }

}
