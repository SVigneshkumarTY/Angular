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
  if(confirm('This Book Will Be Deleted')){
  this.service.deleteBook(book.bookId).subscribe(data=>{
    console.log(data);
    alert('Book Deleted Successfully')
  })
}else{
  alert('Book Not Deleted')
}
}
goHome(){
  if(this.service.selectedUser.userRole==='Student'){
    this.router.navigateByUrl("/student");
    }else if(this.service.selectedUser.userRole==='Librarian'){
      this.router.navigateByUrl("/librarian");
    }
}

updateBook(book){
  this.service.selectedBook=book;
  this.router.navigateByUrl("/updatebook")
}

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
