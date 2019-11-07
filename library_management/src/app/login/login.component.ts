import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg='';
 

  constructor(private libaryService: LibraryServiceService, private router: Router ) { }
  
  userLogin(name,password,form) {
  
    this.libaryService.userLogin(name,password).subscribe(res=>{

      console.log(res);
      console.log(res.users[0].userRole)
      if(res.users !== null){
      if(res.users[0].userRole==='Admin'){
        this.libaryService.userName=res.users[0].userName;
        this.router.navigateByUrl("/admin");
      }
      else if(res.users[0].userRole==='Librarian'){
        this.libaryService.userName=res.users[0].userName;
        this.router.navigateByUrl("/librarian");
      }
      else if(res.users[0].userRole==='Student'){
        this.libaryService.userName=res.users[0].userName;
        this.libaryService.userId=res.users[0].userId;
        this.router.navigateByUrl("/student");
      }
      else if(res.users===null){
        this.router.navigateByUrl("/login");
      }
      else{
        this.router.navigateByUrl("/login");
      }
    }else{
      this.router.navigateByUrl("/login");
    }
   
    },err=> {
          this.msg='Invalid Credentials';
    });
    
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
