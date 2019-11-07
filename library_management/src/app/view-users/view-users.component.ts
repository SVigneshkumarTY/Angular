import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../library-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users:any[]=[];
 
  constructor(private service:LibraryServiceService,private router:Router) {

    this.service.viewUsers().subscribe(data=>{
     console.log(data);
      this.users=data.users;
      console.log(this.users)
    })}

    deleteUser(user){
      this.service.deleteUser(user.userId).subscribe(data=>{
        console.log(data);
      })
   }
   updateUser(user){
    this.service.selectedUser=user;
    console.log(this.service.selectedUser);
    this.router.navigateByUrl("/register");
   }

  ngOnInit() {
    // document.body.classList.add('bg-img');
  }

}
