import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private libraryService:LibraryServiceService,private router:Router) { }
  goHome(){
    this.router.navigateByUrl("/admin");
  }

  registerUser(registerform){
    if(confirm('Confirm To Update the User..?')){
    this.libraryService.updateUser(registerform.value).subscribe(data=>{
      console.log(data);
      registerform.reset();
      alert('User details Updated...!')
      this.router.navigateByUrl("/admin")
    })
  }else{
    alert('User Details Not Updated....!')
    this.router.navigateByUrl("/admin")
  }
  }


  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
