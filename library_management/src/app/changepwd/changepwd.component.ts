import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
msg='';
  constructor(private service:LibraryServiceService,private router:Router) { }

  changepwd(data){
    this.service.changepassword(data.userEmail,data.userPassword,data.newPassword).subscribe(data=>{
      console.log(data);
      alert("Password Changed")
      this.router.navigateByUrl("/student");
      
    },err=>{
      
    })
  }

  ngOnInit() {
  }

}
