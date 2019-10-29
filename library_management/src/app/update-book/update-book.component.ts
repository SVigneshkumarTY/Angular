import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  cancelBookUpdate() {
    this.router.navigateByUrl('/books');
  }

  updateBook(bookform) {
    console.log(bookform.value);
    this.libraryService.updateBook(bookform.value).subscribe(res => {
      this.router.navigateByUrl('/books');
    }, err => {
       console.log(err);
    });
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
