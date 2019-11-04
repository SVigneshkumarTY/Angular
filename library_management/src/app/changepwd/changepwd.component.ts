import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
msg='';
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
  }

}
