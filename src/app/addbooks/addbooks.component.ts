import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  msg='';
  constructor(private libraryService: LibraryServiceService,private router:Router) { }

  addBook(bookform) {
     this.libraryService.addBook(bookform.value).subscribe(res => {
        console.log('book added successfully');
        alert('Book Added Successfully...!')
        this.router.navigateByUrl("/books")
        //this.msg='Book Added Successfully';
        bookform.reset();
     }, err => {
        console.log('book not added');
     });
  }

  goHome(){
    this.router.navigateByUrl("/librarian");
  }


  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
