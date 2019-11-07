import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  books:any[]=[];
  name='';
  constructor(private service:LibraryServiceService,private router:Router) { 
    this.service.viewBooks().subscribe(data=>{
      console.log(data);
      this.books=data.books;
      this.name=service.userName;
  })
}

  viewBooks(){
    this.service.userBooks().subscribe(data=>{
      console.log(data);
    })
  }

  sendRequest(book){
    console.log(book);
    this.service.requestBook(book).subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
