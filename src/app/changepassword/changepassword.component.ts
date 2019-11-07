import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  msg="";
  constructor(private router:Router,private service:LibraryServiceService) { }
  changepwd(data){
    this.service.changepassword(data.userId,data.userPassword,data.newPassword).subscribe(data=>{
      console.log(data);
      if(data===true){
      this.msg='password changed successfully'
      }else{
        this.msg='Invalid Id Or Password'
      }
    },err=>{
      
    })
  }

  

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
