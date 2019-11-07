import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any[]=[];
  constructor(private service:LibraryServiceService,private router:Router) { 
    this.service.viewBooks().subscribe(data=>{
      console.log(data);
      this.books=data.books;
  })
}
deleteBook(book){
  this.service.deleteBook(book.bookId).subscribe(data=>{
    console.log(data);
  })
}

updateBook(book){
  this.service.selectedBook=book;
  this.router.navigateByUrl("/addbooks")
}

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
