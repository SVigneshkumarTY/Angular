import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  books: any[] = [];
  name = '';
  allocatedBooks: any = {};

  constructor(private service: LibraryServiceService, private router: Router) {
    this.service.viewBooks().subscribe(data => {
      console.log(data);
      this.books = data.books;
      this.name = service.userName;
    })
  }

  viewBooks() {
    this.service.userBooks().subscribe(data => {
       this.allocatedBooks = data;
      this.service.allBooks = this.allocatedBooks.bookTrans;
      console.log(data);
      this.router.navigateByUrl("/allocatedBooks")
   })
  }

  
  
  sendRequest(book) {
    console.log(book);
    if(confirm('Send Request To Lirarian To Issue This Book')){
    this.service.requestBook(book).subscribe(data => {
      alert('Request Sent to Librarian')
      console.log(data);
      //this.id=book.bookId;
     // console.log("id of book"+this.id);
    
    })
  }else{
    alert('Request Cancelled')
  }
  }
  changepwd(){
    this.router.navigateByUrl("/changepwd")
  }
  

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
