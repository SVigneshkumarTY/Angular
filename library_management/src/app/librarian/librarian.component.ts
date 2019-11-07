import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  name='';
  requests:any={};
  bookRequests:any[]=[];
  constructor(private router:Router,private service:LibraryServiceService) {
    this.name=service.userName;
    this.service.bookrequests().subscribe(data=>{
     console.log(data);
     this.requests=data;
     console.log(this.requests)
     console.log(this.requests.bookReg)
     this.bookRequests=this.requests.bookReg;
    })
   }
  addBook(){
    this.router.navigateByUrl("/addbooks")
  }
  books(){
    this.router.navigateByUrl("/books")
  }

  acceptReq(reqs){
    this.service.acceptReq(reqs).subscribe(data=>{
      console.log(data);
      alert("you accepted the request")
    })
  }
  

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
