import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  books:any[]=[];

  constructor(private service:LibraryServiceService){ 
    this.service.viewBooks().subscribe(data=>{
      
      console.log(data);
      this.books=data;
    })
    
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
