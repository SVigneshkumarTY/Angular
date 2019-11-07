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
     console.log(bookform.value);
     if(bookform.value.bookId){
       this.libraryService.updateBook(bookform.value).subscribe(data=>{
         console.log(data);
       })
       this.router.navigateByUrl("/books");
     }
     else{
     this.libraryService.addBook(bookform.value).subscribe(res => {
        console.log('book added successfully');
        this.router.navigateByUrl("/books")
        //this.msg='Book Added Successfully';
        bookform.reset();
     }, err => {
        console.log('book not added');
     });
  }
}

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
