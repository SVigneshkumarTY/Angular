import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  addBook(bookform) {
     this.libraryService.addBook(bookform.value).subscribe(res => {
      bookform.reset();
      this.router.navigateByUrl('/books');
     }, err => {
        console.log('book not added');
     });
  }

  librarianHomePage() {
    this.router.navigateByUrl('/librarian');
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
