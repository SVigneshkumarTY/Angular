import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private libraryService:LibraryServiceService,private router:Router) { }

  addBook(bookform){
    console.log(bookform.value);
    if(confirm('confirm to update the book...!')){
    
       this.libraryService.updateBook(bookform.value).subscribe(data=>{
         console.log(data);
         alert('Book Updated Successfully...!')
       })
       this.router.navigateByUrl("/librarian");
    }else{
      alert('Book Update Cancelled...!')
      this.router.navigateByUrl("/librarian");
    }
     
  }
  
 goHome(){
   this.router.navigateByUrl("/librarian");
 }

  ngOnInit() {
  }

}
