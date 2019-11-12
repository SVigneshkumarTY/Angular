import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allocated-books',
  templateUrl: './allocated-books.component.html',
  styleUrls: ['./allocated-books.component.css']
})
export class AllocatedBooksComponent implements OnInit {

  constructor(private service:LibraryServiceService,private router:Router) { }

  return(books){
    if(confirm('Confirm to Return')){
    this.service.returnBook(books.bookId,books).subscribe(dat=>{
      console.log(dat);
      this.router.navigateByUrl("/student");
    })
  }else{
    this.router.navigateByUrl("/student");
  }
  }
  goHome(){
    this.router.navigateByUrl("/student");
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
