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
    if(confirm('Confirm to update your password')){
    this.service.changepassword(data.userEmail,data.userPassword,data.newPassword).subscribe(data=>{
      console.log(data);
      if(this.service.selectedUser.userRole==='Student'){
        alert('password changed succesfully...!')
      this.router.navigateByUrl("/student");
      }else if(this.service.selectedUser.userRole==='Librarian'){
        alert('password changed succesfully...!')
        this.router.navigateByUrl("/librarian");
      }
      
      
    },err=>{
      
    })
  }else{
    if(this.service.selectedUser.userRole==='Student'){
      alert('password is not changed...!')
      this.router.navigateByUrl("/student");
      }else if(this.service.selectedUser.userRole==='Librarian'){
        alert('password is not changed...!')
        this.router.navigateByUrl("/librarian");
      }
  }
  
}
goHome(){
  if(this.service.selectedUser.userRole==='Student'){
    this.router.navigateByUrl("/student");
    }else if(this.service.selectedUser.userRole==='Librarian'){
      this.router.navigateByUrl("/librarian");
    }
}


  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}


