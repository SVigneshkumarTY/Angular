import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService) { }

  addBook(bookform) {
     console.log(bookform.value);
     this.libraryService.addBook(bookform.value).subscribe(res => {
        console.log('book added successfully');
     }, err => {
        console.log('book not added');
     });
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
