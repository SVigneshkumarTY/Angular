import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  show=false;
  name='';
  users:any[]=[];
  constructor(private router:Router,private service:LibraryServiceService) {
    this.name=service.userName;
    
    this.service.viewUsers().subscribe(data=>{
      console.log(data);
       this.users=data.users;
       console.log(this.users)
     })
   }
   updateUser(user){
    this.service.selectedUser=user;
    console.log(this.service.selectedUser);
    this.router.navigateByUrl("/update");
   }
   deleteUser(user){
     if(confirm('This User Will Be Deleted')){
    this.service.deleteUser(user.userId).subscribe(data=>{
      console.log(data);
      alert('User Deleted')
    })
  }else{
    alert('User Not Deleted')
  }
 }
   show1(){
     this.show=true;
   }
   show2(){
    this.show=false;
  }
  addUser(){
    this.router.navigateByUrl("/register");
  }
  viewUsers(){
    this.router.navigateByUrl("/viewusers");
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
